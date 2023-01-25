import type { LoaderFunction } from "@remix-run/node";
import {
  Outlet,
  useLoaderData,
  useOutletContext,
  useTransition,
} from "@remix-run/react";
import RoadmapItems from "../../components/roadmap/items";
import { getStatusOptions, getAll } from "~/api.server";
import Spinner from "~/components/ui/spinner";
import ItemsNavbar from "~/components/roadmap/items-navbar";
import Container from "~/components/ui/container";
import { useState } from "react";
import { RoadmapItem } from "~/models/RoadmapItem";
import { Vote } from "~/models/Vote";
import { UserVote } from "~/models/UserVote";
import { User } from "~/models/User";
import MissingFirestoreIndex from "~/components/error/MissingFirestoreIndex";

export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  const [[items, userVotes, errors], statusOptions] = await Promise.all([
    getAll(request, { status }),
    getStatusOptions(),
  ]);
  return {
    items: items?.map((roadmapItem) =>
      RoadmapItem.toClient(roadmapItem as RoadmapItem)
    ),
    userVotes: userVotes?.map((userVote) =>
      UserVote.toClient(userVote as UserVote)
    ),
    errors,
    status,
    statusOptions,
  };
};

export default function Items() {
  const { items, userVotes, errors, status, statusOptions } = useLoaderData();
  const transition = useTransition();
  const isLoading = transition.state == "loading";
  const [sortBy, setSortBy] = useState<"Most Voted" | "Most Recent">(
    "Most Voted"
  );

  if (isLoading)
    return (
      <div className="h-48 w-full">
        <Container>
          <Spinner />
        </Container>
      </div>
    );

  const calculateScore = (item: RoadmapItem) =>
    item.votesSummary.Yes -
    item.votesSummary.Meh +
    2 * item.votesSummary.Urgent;

  const sortedItems =
    sortBy === "Most Voted"
      ? items.sort((item1: RoadmapItem, item2: RoadmapItem) =>
          calculateScore(item1) > calculateScore(item2) ? -1 : 1
        )
      : items.sort((item1: RoadmapItem, item2: RoadmapItem) =>
          item1.createdBy.date! > item2.createdBy.date! ? -1 : 1
        );

  return (
    <Container>
      <ItemsNavbar
        activeStatus={status ?? "All"}
        statusOptions={["All", ...statusOptions]}
        sortBy={sortBy}
        handleSortByChange={setSortBy}
      />
      {transition.state === "submitting" ? (
        <div className="h-48 w-full">
          <Container>
            <Spinner />
          </Container>
        </div>
      ) : (
        <RoadmapItems items={sortedItems} userVotes={userVotes} />
      )}
      {errors.map((error: any) => {
        if (error.code === 9) {
          return <MissingFirestoreIndex error={error} />;
        }
      })}
      <Outlet />
    </Container>
  );
}

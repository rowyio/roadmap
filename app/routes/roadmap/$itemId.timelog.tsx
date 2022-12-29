import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getItem, getTimelog } from "~/api.server";
import ItemNavbar from "~/components/roadmap/item-navbar";
import Container from "~/components/ui/container";
import ItemTimelog from "~/components/roadmap/timelog";
import { TimelogItem } from "~/models/TimelogItem";
import { RoadmapItem } from "~/models/RoadmapItem";

export const loader: LoaderFunction = async ({ params }: any) => {
  const { itemId } = params;
  const [item, timelog] = await Promise.all([
    getItem(itemId),
    getTimelog(itemId),
  ]);
  return {
    item: RoadmapItem.toClient(item),
    timelog: [
      ...timelog,
      TimelogItem.toClient(
        new TimelogItem(item.createdBy, [{ after: item, fieldKey: "item" }])
      ),
    ],
  };
};

export default function Timelog() {
  const { item, timelog } = useLoaderData();
  return (
    <Container>
      <ItemNavbar item={item} />
      <ItemTimelog timelog={timelog} />
      <Outlet />
    </Container>
  );
}

import { ClientOnly } from "remix-utils";
import type { LoaderFunction } from "@remix-run/node";
import { firebaseClientConfig } from "~/firebase-admin.server";
import { Outlet, useLoaderData, useOutletContext } from "@remix-run/react";
import { getUser } from "~/session.server";

import FeedbackFin from "~/components/roadmap/feedbackfin";
import Navbar from "~/components/ui/navbar";
import { User } from "~/models/User";

export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}) => {
  return {
    firebaseClientConfig,
  };
};

export default function Roadmap() {
  const { firebaseClientConfig } = useLoaderData();
  const { currentUser }: { currentUser: User } = useOutletContext();

  return (
    <>
      <Navbar user={currentUser} firebaseClientConfig={firebaseClientConfig} />
      <Outlet context={{ currentUser }} />
    </>
  );
}

import type { LoaderFunction } from "@remix-run/node";
import { firebaseClientConfig } from "~/firebase-admin.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getUser } from "~/session.server";

import Navbar from "~/components/ui/navbar";
import { User } from "~/models/User";

export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const currentUser = await getUser(request);
  return {
    currentUser: currentUser ? User.toClient(currentUser) : null,
    firebaseClientConfig,
  };
};

export default function Roadmap() {
  const { currentUser, firebaseClientConfig } = useLoaderData();
  console.log(currentUser);
  return (
    <>
      <Navbar user={currentUser} firebaseClientConfig={firebaseClientConfig} />
      <Outlet context={{ currentUser }} />
    </>
  );
}

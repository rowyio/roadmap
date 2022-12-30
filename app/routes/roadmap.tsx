import { useEffect } from "react";
import { ClientOnly } from "remix-utils";
import type { LoaderFunction } from "@remix-run/node";
import { firebaseClientConfig } from "~/firebase-admin.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getUser } from "~/session.server";

import FeedbackFin from "~/components/roadmap/feedbackfin";
import Navbar from "~/components/ui/navbar";
import { feedbackFinWebhookUrl } from "~/constants";

export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const currentUser = await getUser(request);
  currentUser?.email;
  return {
    currentUser,
    firebaseClientConfig,
    feedbackFinWebhookUrl,
  };
};

export default function Roadmap() {
  const { currentUser, firebaseClientConfig, feedbackFinWebhookUrl } =
    useLoaderData();
  useEffect(() => {
    if (feedbackFinWebhookUrl && typeof window !== undefined) {
      (window as any).feedbackfin = {
        ...(window as any).feedbackfin,
        config: {
          url: feedbackFinWebhookUrl,
          user: currentUser && {
            name: currentUser.displayName,
            email: currentUser.email,
          },
        },
      };
    }
  }, [currentUser]);
  return (
    <>
      <Navbar user={currentUser} firebaseClientConfig={firebaseClientConfig} />
      {feedbackFinWebhookUrl && (
        <ClientOnly fallback={<></>}>{() => <FeedbackFin />}</ClientOnly>
      )}
      <Outlet context={{ currentUser }} />
    </>
  );
}

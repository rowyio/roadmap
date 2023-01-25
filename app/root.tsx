import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { RootError } from "./components/error";

import styles from "../styles/app.css";
import { checkEnvironmentVariables } from "./util.server";
import { feedbackFinWebhookUrl } from "./constants";
import { getUser } from "./session.server";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Product Roadmap powered by Rowy",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const error = checkEnvironmentVariables();
  if (error) throw error;
  const currentUser = await getUser(request);

  return { feedbackFinWebhookUrl, currentUser };
};

export default function App() {
  const { feedbackFinWebhookUrl, currentUser = {} } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {feedbackFinWebhookUrl && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.feedbackfin = { config: {}, ...window.feedbackfin };
            window.feedbackfin.config.url = "${feedbackFinWebhookUrl}";
            window.feedbackfin.config.user = ${
              currentUser
                ? `{ 
                    name: "${currentUser?.displayName}",
                    email: "${currentUser?.email}"
                    }`
                : "null"
            }`,
            }}
          />
        )}
      </head>
      <body className="w-full h-auto min-h-screen bg-base-200 overflow-y-auto relative">
        <div className="max-w-screen-md md:mx-auto md:pt-10">
          <Outlet context={{ currentUser }} />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
        {feedbackFinWebhookUrl && (
          <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <button
              data-feedbackfin-button
              className="flex items-center bg-primary rounded-full px-6 h-12 text-white group"
            >
              Send feedback
            </button>
          </div>
        )}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: any) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body className="w-full h-auto min-h-screen bg-base-200 overflow-y-auto">
        <div className="max-w-screen-md md:mx-auto md:pt-10">
          <RootError error={error} />
        </div>
        <Scripts />
      </body>
    </html>
  );
}

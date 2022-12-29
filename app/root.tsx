import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { RootError } from "./components/errors";

import styles from "./styles/app.css";
import { checkEnvironmentVariables } from "./util.server";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Product Roadmap powered by Rowy",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = () => {
  const error = checkEnvironmentVariables();
  if (error) throw error;
  return null;
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-full h-auto min-h-screen bg-base-200 overflow-y-auto">
        <div className="max-w-screen-md md:mx-auto md:pt-10">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
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

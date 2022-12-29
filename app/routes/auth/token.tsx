import type { LoaderFunction } from "@remix-run/node";
import { getToken } from "~/session.server";

export const loader: LoaderFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const token = await getToken(request);
  return token;
};

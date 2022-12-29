import { createCookieSessionStorage, redirect } from "@remix-run/node";

import { auth } from "./firebase-admin.server";
import { User } from "./models/User";

const sessionSecret = process.env.SESSION_SECRET ?? "";

const storage = createCookieSessionStorage({
  cookie: {
    name: "session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function requireUser(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const token = await getToken(request);
  if (!token || typeof token !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/auth/login?${searchParams}`);
  }
}

export async function getUser(request: Request) {
  const token = await getToken(request);
  if (typeof token !== "string") {
    return null;
  }
  return auth.verifyIdToken(token).then(
    (decodedIdToken) => User.fromDecodedIdToken(decodedIdToken),
    async (error) => {
      throw await logout(request);
    }
  );
}
export async function createUserSession(token: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("token", token);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getToken(request: Request) {
  const session = await getUserSession(request);
  const token = session.get("token");
  if (!token || typeof token !== "string") return null;
  return token;
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/roadmap", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

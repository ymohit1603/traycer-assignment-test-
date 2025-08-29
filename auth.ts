

import type { NextApiRequest, NextApiResponse } from "next";

// Example dummy session type
export interface Session {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  token?: string;
}

// Fake in-memory session (replace with DB / real auth later)
let dummySession: Session = {
  user: {
    id: "12345",
    name: "Dummy User",
    email: "dummy@example.com",
  },
  token: "fake_token_abc123",
};

// Example: get the current session
export async function getSession(req: NextApiRequest): Promise<Session | null> {
  // In real code, you’d check cookies, headers, or JWTs
  return dummySession;
}

// Example: sign in
export async function signIn(email: string, password: string): Promise<Session> {
  // Always return the dummy user
  return dummySession;
}

// Example: sign out
export async function signOut(res: NextApiResponse): Promise<void> {
  // Reset dummy session
  dummySession = { user: null };
  res.status(200).json({ message: "Signed out (dummy)" });
}

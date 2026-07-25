import * as firebaseAuth from "../app/integrations/firebase/auth";

export async function login(
  email: string,
  password: string
) {
  return firebaseAuth.login(email, password);
}

export async function signup(
  email: string,
  password: string
) {
  return firebaseAuth.signup(email, password);
}

export async function logout() {
  return firebaseAuth.logout();
}

export function subscribeToAuthChanges(
  callback: Parameters<
    typeof firebaseAuth.subscribeToAuthChanges
  >[0]
) {
  return firebaseAuth.subscribeToAuthChanges(
    callback
  );
}

export async function getMe() {
  return firebaseAuth.getMe();
}
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import app from './config';

const auth = getAuth(app);

export async function signup(
  email: string,
  password: string
) {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
}

export async function logout() {
  await signOut(auth);
}

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export async function completeGoogleLogin(
  idToken: string
) {
  const credential =
    GoogleAuthProvider.credential(idToken);

  return signInWithCredential(
    auth,
    credential
  );
}

export const subscribeToAuthChanges = (callback) => {
  console.log("observeAuth is called");
  return onAuthStateChanged(auth, callback);
};




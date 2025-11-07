import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { app } from "./firebase-config";

// Auth & Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);

// Google Auth
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

// Listener for auth state changes
export const listenToAuth = (callback) => {
  onAuthStateChanged(auth, callback);
};

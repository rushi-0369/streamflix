import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDxgpg-LF969RdVlhIPOPpUMuBslFw__fY",
  authDomain: "netflix-clone-a8102.firebaseapp.com",
  projectId: "netflix-clone-a8102",
  storageBucket: "netflix-clone-a8102.firebasestorage.app",
  messagingSenderId: "214968556293",
  appId: "1:214968556293:web:e6880c9988392aceabb56c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const friendlyMessage = (code) => {
  switch (code) {
    case "auth/email-already-in-use": return "This email is already registered.";
    case "auth/invalid-email": return "Invalid email address.";
    case "auth/weak-password": return "Password is too weak.";
    case "auth/invalid-credential": return "Invalid email or password.";
    default: return "Something went wrong. Please try again.";
  }
};

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    return user;
  } catch (error) {
    console.error("Sign Up Error:", error);
    toast.error(friendlyMessage(error.code) || "An unexpected error occurred.");
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    console.error("Login Error:", error);
    toast.error(friendlyMessage(error.code) || "An unexpected error occurred.");
    throw error;
  }
};

const logout = () => signOut(auth);

export { auth, db, login, signUp, logout };

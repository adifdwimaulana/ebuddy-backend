import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import path from "path";

const config = path.resolve(__dirname, "credential.json");

initializeApp({ credential: cert(config) });
const db = getFirestore();
const auth = getAuth();

export { db, auth };

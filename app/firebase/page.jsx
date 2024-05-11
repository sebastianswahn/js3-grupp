"use client"

import { useAuth } from "@clerk/nextjs";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithCustomToken } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: process.env.NEXT_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const getFirestoreData = async () => {
    const docRef = doc(db, "example", "example-document");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
};

export default function FirebaseUI() {
    const { isSignedIn, sessionId, userId } = useAuth();
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (isSignedIn) {
            getToken({ template: "integration_firebase" }).then(setToken);
        }
    }, [isSignedIn]);

    const signInWithClerk = async () => {
        console.log("Sign in with clerk");
        const userCredentials = await signInWithCustomToken(auth, token || "");
        console.log("User:", userCredentials.user);
    };

    return (
        <main style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
            <button onClick={signInWithClerk}>Sign in</button>
            <button onClick={getFirestoreData}>Get document</button>
        </main>
    );
}
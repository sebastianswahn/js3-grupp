import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.NEXT_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
// };

const firebaseConfig = {

    apiKey: "AIzaSyCjsfx0uss7tgi-BCqKzMzvulR7tNjwqCg",
  
    authDomain: "gruppuppgift-ad222.firebaseapp.com",
  
    projectId: "gruppuppgift-ad222",
  
    storageBucket: "gruppuppgift-ad222.appspot.com",
  
    messagingSenderId: "260411845875",
  
    appId: "1:260411845875:web:b0b17782754e3ccef05b86",
  
    measurementId: "G-R5H2VDX0LM"
  
  };
  

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

// const getFirestoreData = async () => {
//     const docRef = doc(db, "example", "example-document");
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//     } else {
//         console.log("No such document!");
//     }
// };
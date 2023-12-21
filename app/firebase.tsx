
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAtgs6L7VdQLd_GssVI8oxvVDaqAoewWg0",
  authDomain: "adoreu-photoboot.firebaseapp.com",
  projectId: "adoreu-photoboot",
  storageBucket: "adoreu-photoboot.appspot.com",
  messagingSenderId: "306318863956",
  appId: "1:306318863956:web:fbf0721d4db1c0160747c1",
  measurementId: "G-QN1CZ1HFM4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
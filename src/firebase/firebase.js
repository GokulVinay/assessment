import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAbnlh6VPncnlbLC2vggrEzCg3A96Y-BNk",
  authDomain: "vibesnap-96df0.firebaseapp.com",
  projectId: "vibesnap-96df0",
  storageBucket: "vibesnap-96df0.firebasestorage.app",
  messagingSenderId: "331387223785",
  appId: "1:331387223785:web:03833d7d0669d6e7ca7a78",
  measurementId: "G-E684R1TWZT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };

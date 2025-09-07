  import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyB766yiXwpUX1zvvXenf4zYoNZacT3LxEM",
    authDomain: "careera-2025.firebaseapp.com",
    projectId: "careera-2025",
    storageBucket: "careera-2025.firebasestorage.app",
    messagingSenderId: "509314396816",
    appId: "1:509314396816:web:4e046bdc2bac8f26b8de15",
    measurementId: "G-XZBXK5MVGZ"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
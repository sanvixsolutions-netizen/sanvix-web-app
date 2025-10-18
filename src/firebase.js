// Firebase configuration and initialization
// Generated from the Firebase console (modular SDK)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAweuMwah56-qcP2oTWUB-eBzwlhyENQbc",
  authDomain: "sanvix-web-app.firebaseapp.com",
  projectId: "sanvix-web-app",
  storageBucket: "sanvix-web-app.firebasestorage.app",
  messagingSenderId: "765882921669",
  appId: "1:765882921669:web:7ec3e3351a174065a676ac",
  measurementId: "G-2EQG5BENHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export { analytics };

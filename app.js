// --- Firebase CDN ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// --- TU WKLEJ SWÓJ FIREBASE CONFIG ---
const firebaseConfig = {
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEo11MkUq72bKR6LsghnzmLjkuFkyc6lg",
  authDomain: "rplife1-4e8e4.firebaseapp.com",
  projectId: "rplife1-4e8e4",
  storageBucket: "rplife1-4e8e4.firebasestorage.app",
  messagingSenderId: "1018234460952",
  appId: "1:1018234460952:web:55f0331db82f3028471c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// --- Obsługa przycisków ---
document.getElementById("googleBtn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        alert(`Witaj ${user.displayName} 🌸`);
        document.getElementById("loginBtn").classList.add("hidden");
        document.getElementById("googleBtn").classList.add("hidden");
        document.getElementById("logoutBtn").classList.remove("hidden");
    })
    .catch((error) => {
        console.log(error);
        alert("Coś poszło nie tak przy logowaniu Google ❌");
    });
});

document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("Wylogowano 🌙");
        document.getElementById("loginBtn").classList.remove("hidden");
        document.getElementById("googleBtn").classList.remove("hidden");
        document.getElementById("logoutBtn").classList.add("hidden");
    });
});

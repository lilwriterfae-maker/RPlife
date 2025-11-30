// ----- TU WKLEIMY PÓŹNIEJ TWÓJ PRAWIDŁOWY FIREBASE CONFIG -----
// na razie placeholder żeby się nie bugowało
// Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Twój config Firebase
const firebaseConfig = {// Import the functions you need from the SDKs you need
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
const app = initializeApp(firebaseConfig);}
  apiKey: "TU_JEST_KLUCZ",
  authDomain: "twoj-projekt.firebaseapp.com",
  projectId: "twoj-projekt",
  storageBucket: "twoj-projekt.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

console.log("RP Life działa 🔮");

document.getElementById("loginBtn").addEventListener("click", () => {
    alert("Logowanie email będzie dostępne po podpięciu Firebase ✨");
});

document.getElementById("googleBtn").addEventListener("click", () => {
    alert("Logowanie Google aktywujemy za chwilę ✨");
});
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

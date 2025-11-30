// ------------------ Firebase config ------------------
const firebaseConfig = {
  apiKey: "AIzaSyCEo11MkUq72bKR6LsghnzmLjkuFkyc6lg",
  authDomain: "rplife1-4e8e4.firebaseapp.com",
  projectId: "rplife1-4e8e4",
  storageBucket: "rplife1-4e8e4.firebasestorage.app",
  messagingSenderId: "1018234460952",
  appId: "1:1018234460952:web:55f0331db82f3028471c6d"
};

// ------------------ Initialize Firebase ------------------
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// ------------------ Google Login ------------------
document.getElementById("googleBtn").addEventListener("click", () => {
  auth.signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      alert(`Witaj ${user.displayName} 🌸`);
      document.getElementById("loginBtn").classList.add("hidden");
      document.getElementById("googleBtn").classList.add("hidden");
      document.getElementById("logoutBtn").classList.remove("hidden");
    })
    .catch(err => {
      console.error(err);
      alert("Coś poszło nie tak przy logowaniu ❌");
    });
});

// ------------------ Wylogowanie ------------------
document.getElementById("logoutBtn").addEventListener("click", () => {
  auth.signOut().then(() => {
    alert("Wylogowano 🌙");
    document.getElementById("loginBtn").classList.remove("hidden");
    document.getElementById("googleBtn").classList.remove("hidden");
    document.getElementById("logoutBtn").classList.add("hidden");
  });
});

// ------------------ Email/Password login (opcjonalne) ------------------
// Możemy dodać później, jeśli chcesz logowanie zwykłym emailem

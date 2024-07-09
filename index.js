import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js"; // Updated URL

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk6Q5l-bmkFsSFtguf5wplOJlkQUdfj5g",
  authDomain: "appointment-d7838.firebaseapp.com",
  projectId: "appointment-d7838",
  storageBucket: "appointment-d7838.appspot.com",
  messagingSenderId: "676234264708",
  appId: "1:676234264708:web:034efd11eabbbde7e582d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('submit').addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("first").value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("LOGGED-IN successfully!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});


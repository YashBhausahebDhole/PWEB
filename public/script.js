// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADZgte29WANflNDLClpYFL2ASDUlyKohE",
  authDomain: "flytchat.firebaseapp.com",
  projectId: "flytchat",
  storageBucket: "flytchat.appspot.com",
  messagingSenderId: "590518536462",
  appId: "1:590518536462:web:11f46f8d7f6eef97cfaf5f",
  measurementId: "G-Y6YEPWVXS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

document.getElementById('createAccountForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  console.log('Form submitted:', { username, email, phone, password, confirmPassword });

  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  try {
    // Create user with email and password in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('User created in Authentication:', user);

    // Store user data in Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      username: username,
      password: password,
      email: email,
      phone: phone,
      
    });

    console.log('User data stored in Firestore');

    // Show the account created popup
    document.getElementById('accountCreatedPopup').style.display = 'flex';
    document.getElementById('createAccountForm').reset();
  } catch (error) {
    console.error('Error creating account:', error);
    if (error.code === 'auth/email-already-in-use') {
      alert('The email address is already in use by another account.');
    } else {
      alert(`An error occurred: ${error.message}`);
    }
  }
});

document.getElementById('closePopupBtn').addEventListener('click', () => {
  document.getElementById('accountCreatedPopup').style.display = 'none';
});
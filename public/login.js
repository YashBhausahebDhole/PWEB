// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzh2KhiC3ITYP9zcpk0sZuK5GjGfXsJKY",
  authDomain: "flychat-d155c.firebaseapp.com",
  projectId: "flychat-d155c",
  storageBucket: "flychat-d155c.firebasestorage.app",
  messagingSenderId: "492166123710",
  appId: "1:492166123710:web:a393525712685ab54a0eef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzh2KhiC3ITYP9zcpk0sZuK5GjGfXsJKY",
  authDomain: "flychat-d155c.firebaseapp.com",
  projectId: "flychat-d155c",
  storageBucket: "flychat-d155c.firebasestorage.app",
  messagingSenderId: "492166123710",
  appId: "1:492166123710:web:a393525712685ab54a0eef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
 
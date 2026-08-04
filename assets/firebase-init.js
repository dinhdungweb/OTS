// assets/firebase-init.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAjzRFjBXb84XJ9tlXgPm7ywAnY2Hxq6xM",
    authDomain: "ots-booking-app.firebaseapp.com",
    projectId: "ots-booking-app",
    storageBucket: "ots-booking-app.firebasestorage.app",
    messagingSenderId: "1932444771",
    appId: "1:1932444771:web:2c780c0af3e23c0a42a456",
    measurementId: "G-JS587YB7S9"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Đăng nhập ẩn danh
signInAnonymously(auth)
  .then(() => {
    console.log('Signed in anonymously');
  })
  .catch(error => {
    console.error('Error signing in anonymously:', error);
  });

export { db, auth };
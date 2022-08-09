import { createApp } from 'vue'
import App from './App.vue'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfKwWjbevqaL-sq2Qeao24BYQhwv8bEAY",
  authDomain: "portfolio-938d1.firebaseapp.com",
  projectId: "portfolio-938d1",
  storageBucket: "portfolio-938d1.appspot.com",
  messagingSenderId: "533124919777",
  appId: "1:533124919777:web:2c59b12ff00cb3b883e2a0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).mount('#app')


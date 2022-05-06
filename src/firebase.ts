// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6wKCTTNrHvPl-Z_g61LuSAPcWgxyn9Mc",
  authDomain: "wedding-5e71c.firebaseapp.com",
  projectId: "wedding-5e71c",
  storageBucket: "wedding-5e71c.appspot.com",
  messagingSenderId: "619545011131",
  appId: "1:619545011131:web:62987a555b336826ad9a9e",
  measurementId: "G-7M27160QV3",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { app, analytics, db }

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVjavF0uC6kOwIOFgUx1IYMM7x5aMGcwo",
  authDomain: "whatsapp-clone-174e2.firebaseapp.com",
  projectId: "whatsapp-clone-174e2",
  storageBucket: "whatsapp-clone-174e2.appspot.com",
  messagingSenderId: "318467930994",
  appId: "1:318467930994:web:8a26af02a05cd4a92b3beb",
  measurementId: "G-FC1N6JPM8X",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

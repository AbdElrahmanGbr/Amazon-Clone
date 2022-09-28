import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAtimTTyzE4zHhA_3clBl4WkgaGRGY_zac",
    authDomain: "amzn-hlbessa.firebaseapp.com",
    projectId: "amzn-hlbessa",
    storageBucket: "amzn-hlbessa.appspot.com",
    messagingSenderId: "804567334270",
    appId: "1:804567334270:web:c3aac385da6a08c030072f",
    measurementId: "G-D4H92H92CV"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
export default db;
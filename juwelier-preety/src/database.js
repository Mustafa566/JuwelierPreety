import firebase from 'firebase'
import 'firebase/firestore'

let config = {
    apiKey: "AIzaSyCOh9ZPOkn7l-zTWk0TFdfP-shzqJWANBo",
    authDomain: "juwelierpreety-eb4fd.firebaseapp.com",
    projectId: "juwelierpreety-eb4fd",
    storageBucket: "juwelierpreety-eb4fd.appspot.com",
    messagingSenderId: "155503239342",
    appId: "1:155503239342:web:01db37b84d4d36ce4d4d3f",
    measurementId: "G-PCE1T8MCEP"
};

// Get a Firestore instance
export const db = firebase.initializeApp(config).firestore()
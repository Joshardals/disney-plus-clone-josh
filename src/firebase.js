import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAS-V43CQtu0UEF234i3e5XO7RgyB9HigY",
    authDomain: "disneyplus-clone-e08e1.firebaseapp.com",
    projectId: "disneyplus-clone-e08e1",
    storageBucket: "disneyplus-clone-e08e1.appspot.com",
    messagingSenderId: "387746631846",
    appId: "1:387746631846:web:09e611cbc81bfc5a296467",
    measurementId: "G-4Z1C7JTDZ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db


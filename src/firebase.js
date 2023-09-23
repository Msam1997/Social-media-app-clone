import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyArL11U3mBJHId2CVozd49ySLOCdMv8mYc",
    authDomain: "linkedin-clone-ms-93770.firebaseapp.com",
    projectId: "linkedin-clone-ms-93770",
    storageBucket: "linkedin-clone-ms-93770.appspot.com",
    messagingSenderId: "177880124143",
    appId: "1:177880124143:web:feab384fa734b4186a291a"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};





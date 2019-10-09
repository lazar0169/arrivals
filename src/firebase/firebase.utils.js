import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD45Xs3EJi3PwPcGQHP0Sg93O8sQqvVFls",
    authDomain: "e-commerce-d09fd.firebaseapp.com",
    databaseURL: "https://e-commerce-d09fd.firebaseio.com",
    projectId: "e-commerce-d09fd",
    storageBucket: "",
    messagingSenderId: "652598020129",
    appId: "1:652598020129:web:7eb95d4d69662fe0603b60",
    measurementId: "G-1FGNRJWKG4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
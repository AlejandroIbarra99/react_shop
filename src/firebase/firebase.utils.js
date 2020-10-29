import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyA0ve4Eapdh_6SiX8HwKiAq8PMhaZDwihU",
        authDomain: "tienda-db-70d41.firebaseapp.com",
        databaseURL: "https://tienda-db-70d41.firebaseio.com",
        projectId: "tienda-db-70d41",
        storageBucket: "tienda-db-70d41.appspot.com",
        messagingSenderId: "898067756685",
        appId: "1:898067756685:web:dfbde7ff13248c2ce7d4c4",
        measurementId: "G-LSKFB0EFX3"
      };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

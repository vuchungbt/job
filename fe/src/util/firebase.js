import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDwB172SszeV0xMC4uVsWCq7kQwGkeMP9E",
    authDomain: "verify-otp-affca.firebaseapp.com",
    projectId: "verify-otp-affca",
    storageBucket: "verify-otp-affca.appspot.com",
    messagingSenderId: "968055646154",
    appId: "1:968055646154:web:9653690ff2d4acfa7c9133"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase;
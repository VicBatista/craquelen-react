import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyBoHzVEPD8Qz_IVM1xZuB8p8_7Hs0UO36o",
  authDomain: "craquelen-62385.firebaseapp.com",
  projectId: "craquelen-62385",
  storageBucket: "craquelen-62385.appspot.com",
  messagingSenderId: "548111942844",
  appId: "1:548111942844:web:b79363200fffb8c143fcb9",
  measurementId: "G-39TPSPK3TZ"
};

const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore() {
    return firebase.firestore(app)
}
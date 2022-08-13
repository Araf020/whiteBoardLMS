// import {initializeApp} from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfX6pnRA-7w8lMP_ne77tyzWr_rAvoIF8",
  authDomain: "locations-6642d.firebaseapp.com",
  databaseURL: "https://locations-6642d-default-rtdb.firebaseio.com",
  projectId: "locations-6642d",
  storageBucket: "locations-6642d.appspot.com",
  messagingSenderId: "967698276361",
  appId: "1:967698276361:web:51da6732c629a92271d8d8",
  measurementId: "G-MJJEYLQ0GM"
};


firebase.initializeApp(firebaseConfig);

const storage  = firebase.storage();

export {storage, firebase as default};


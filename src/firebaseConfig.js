import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABvlD-OFglytU5fH6qSbm0LnXeBRCJhCg",
  authDomain: "ecommerce-kickstreet.firebaseapp.com",
  projectId: "ecommerce-kickstreet",
  storageBucket: "ecommerce-kickstreet.appspot.com",
  messagingSenderId: "800077321723",
  appId: "1:800077321723:web:972275b63da656a6f1675e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

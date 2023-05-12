import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBqmgQ1YxbPbUuD-sElp4cwbnUqX-IIY1s",
        authDomain: "f fir-608fa.firebaseapp.com",
        projectId: "fir-608fa",
        storageBucket: "fir-608fa.appspot.com",
        messagingSenderId: "289320587469",
        appId: "1:289320587469:web:9f38b35ae74c853dfe1984",
        measurementId: "G-8PKVJ79Y4S"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export default Firebase

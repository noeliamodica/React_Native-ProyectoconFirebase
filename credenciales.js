
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAq5uYHFxmullj1_KWzcuHBSNSwZVj5o1s",
  authDomain: "react-native-firebase-52e91.firebaseapp.com",
  projectId: "react-native-firebase-52e91",
  storageBucket: "react-native-firebase-52e91.appspot.com",
  messagingSenderId: "372851856160",
  appId: "1:372851856160:web:1d700b63344a7dd5547d45"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase
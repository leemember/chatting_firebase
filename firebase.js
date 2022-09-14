import "firebase/auth"
import "firebase/database"
import "firebase/storage"
// 인증, DB, 스토리지 등등 불러옴


const firebaseConfig = {
    apiKey: "AIzaSyAwPnwUkMqj2vXjDqvaln5n0F9krxpmXIU",
    authDomain: "react-firebase-chat-app-dbb77.firebaseapp.com",
    projectId: "react-firebase-chat-app-dbb77",
    storageBucket: "react-firebase-chat-app-dbb77.appspot.com",
    messagingSenderId: "488666319672",
    appId: "1:488666319672:web:69a2cadf18afd8a174cfcd",
    measurementId: "G-PXSC9SJLHP"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyArhYYmGw2siPTkztsmc2DfCzI787So9D0",
    authDomain: "phone-login-44ad0.firebaseapp.com",
    projectId: "phone-login-44ad0",
    storageBucket: "phone-login-44ad0.appspot.com",
    messagingSenderId: "452848068291",
    appId: "1:452848068291:web:328a4c5a3334981b67a476"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

//   <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyArhYYmGw2siPTkztsmc2DfCzI787So9D0",
//     authDomain: "phone-login-44ad0.firebaseapp.com",
//     projectId: "phone-login-44ad0",
//     storageBucket: "phone-login-44ad0.appspot.com",
//     messagingSenderId: "452848068291",
//     appId: "1:452848068291:web:328a4c5a3334981b67a476"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCf7p9SPteO6kM8dKa8TcCJ_5BO5kq2lks",
    authDomain: "wisebrandy-fb8d8.firebaseapp.com",
    projectId: "wisebrandy-fb8d8",
    storageBucket: "wisebrandy-fb8d8.firebasestorage.app",
    messagingSenderId: "277705680170",
    appId: "1:277705680170:web:3710154c105f642b086a53",
    measurementId: "G-R6G4V3M3G7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
// Firebase SDK 설정
const firebaseConfig = {
    apiKey: "AIzaSyCesL1gkU8Do6v6KW--h3Xzergqu1jrkK4",
    authDomain: "freebee-6954d.firebaseapp.com",
    projectId: "freebee-6954d",
    storageBucket: "freebee-6954d.appspot.com",
    messagingSenderId: "834160279449",
    appId: "1:834160279449:web:306e1f8925a778af715d08",
    measurementId: "G-63GLX6CZ8Q"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

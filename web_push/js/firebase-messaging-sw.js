importScripts('https://www.gstatic.com/firebasejs/5.9.1/firebase-app.js')
// importScripts('https://www.gstatic.com/firebasejs/5.9.1/firebase-messaging.js')
importScripts('./firebase-messaging.js')

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBb4i0z7aZG21fgG0ScDi5OCmE5TOz4jBI",
    authDomain: "pricetrackingbycream.firebaseapp.com",
    databaseURL: "https://pricetrackingbycream.firebaseio.com",
    projectId: "pricetrackingbycream",
    storageBucket: "pricetrackingbycream.appspot.com",
    messagingSenderId: "844789212498"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

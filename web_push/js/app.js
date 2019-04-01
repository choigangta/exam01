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

console.log("aaaaaaaaaaaaaaa");

const messaging = firebase.messaging();

messaging.requestPermission()
    .then(function () {
        alert("Permission." + messaging.getToken())
        // console.log('Have permission');
        return messaging.getToken();
    })
    .then(function () {
        alert(token);
        console.log("token: ", token);
    })
    .catch(function (err) {
        console.log('Error Occured.');
    });

messaging.onMessage(function (playload) {
    console.log('onMessage: ', playload)
});
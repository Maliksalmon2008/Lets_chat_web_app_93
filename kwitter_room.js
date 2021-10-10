var firebaseConfig = {
    apiKey: "AIzaSyDj54BbiJP5xY3vOV_z8K9NQhE540NOjSg",
    authDomain: "kwitter-6bad0.firebaseapp.com",
    databaseURL: "https://kwitter-6bad0-default-rtdb.firebaseio.com",
    projectId: "kwitter-6bad0",
    storageBucket: "kwitter-6bad0.appspot.com",
    messagingSenderId: "999609939740",
    appId: "1:999609939740:web:a5d566c356db47d6536cd9"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("User_name"); 
   document.getElementById("username").innerHTML = user_name;
  
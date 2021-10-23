var  firebaseConfig = {
    apiKey: "AIzaSyAtEwmg088lWoj7hyFAMRqFuj-J2R5lJ4A",
    authDomain: "kwitter-2-11148.firebaseapp.com",
    databaseURL: "https://kwitter-2-11148-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-11148",
    storageBucket: "kwitter-2-11148.appspot.com",
    messagingSenderId: "666414333196",
    appId: "1:666414333196:web:165486329e6424a4cb1d29"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("User_name");


function send() {
    msg = document.getElementById("msg").value;
    // the following line are pushing the message inside the data base in the respected room by mentioning the room name in the refrence 
     firebase.database().ref(room_name).push({
   name: user_name,
    message: msg,
     like: 0 
  });
   document.getElementById("msg").value = ""; }


   function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
// firebase_message_id variable to hold all the unique message id  generated automatically by the firebase. 
console.log(message_data);
// message_data variable to hold all the messages, likes and username  for every message.

//We will create three varibles to pick up the values of the username and the number of likes for each message stored inside the varible message data

names = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> " + names + "<img class='user_tick' src='tick.png'>";
 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
     document.getElementById("output").innerHTML += row;

//End code
 } });  }); }
getData();

function updateLike(message_id) {
 //This message_id is the same firebase_message_id which we had passed on clicking the like button.
  console.log("clicked on like button - " + message_id);
  //Now assign the message_id value to a new variable button_id
   button_id = message_id;
    likes = document.getElementById(button_id).value;
     updated_likes = Number(likes) + 1;
      console.log(updated_likes);
       firebase.database().ref(room_name).child(message_id).update({
              like: updated_likes }); }

function logout(){
 localStorage.removeItem("room_name");
 localStorage.removeItem("User_name");
 window.location("index.html")
 }
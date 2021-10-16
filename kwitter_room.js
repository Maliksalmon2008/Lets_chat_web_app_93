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
   
function add_room(){
room_name = document.getElementById("room_name").value;
localStorage.setItem("room_name",room_name);
firebase.database().ref("/").child(room_name).update({
 purpose:"addingroomname" 
})
window.location = "Kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name = "+Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
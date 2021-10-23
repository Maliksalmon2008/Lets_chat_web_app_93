var firebaseConfig = {
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
  user_name = localStorage.getItem("User_name"); 
   document.getElementById("username").innerHTML = user_name;
   
function add_room(){
room_name = document.getElementById("room_name").value;
localStorage.setItem("room_name",room_name);
firebase.database().ref("/").child(room_name).update({
 purpose:"addingroomname" 
})

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("User_name");
  window.location("index.html")
  }

window.location = "kwitter_page.html";
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


function redirectToRoomName(name_chosen) {
console.log("room name chosen" + name_chosen);
localStorage.setItem("room_name", name_chosen);
window.location = "kwitter_page.html"; }
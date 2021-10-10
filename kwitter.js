function addUser(){
    user = document.getElementById("user_input").value;
   localStorage.setItem("User_name",user);
   window.location = "kwitter_room.html";
   
   
   }
   
const firebaseConfig = {
    apiKey: "AIzaSyC4mPMArbgZQ_Hai4nW2_72g_cHR_fk7W8",
    authDomain: "let-s-chat-4e6cf.firebaseapp.com",
    databaseURL: "https://let-s-chat-4e6cf-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-4e6cf",
    storageBucket: "let-s-chat-4e6cf.appspot.com",
    messagingSenderId: "538514097736",
    appId: "1:538514097736:web:17767480a70b70c487fa7d"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
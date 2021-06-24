var firebaseConfig = {
    apiKey: "AIzaSyB4D656TfXHY6wlew3XQY3gS_PY0J7Rpdo",
    authDomain: "c94--practice.firebaseapp.com",
    databaseURL: "https://c94--practice-default-rtdb.firebaseio.com",
    projectId: "c94--practice",
    storageBucket: "c94--practice.appspot.com",
    messagingSenderId: "493098844927",
    appId: "1:493098844927:web:8f4d7a284cb54d7cfbc2ca",
    measurementId: "G-0L859JYDY0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
   
  function addUser()
  {
 user_name = document.getElementById ("user_name").value;
firebase.database().ref("/").child(user_name).update({
 purpose :  "adding user"

});


  }
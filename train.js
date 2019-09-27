//Creating the firebase

const firebaseConfig = {
    apiKey: "AIzaSyDxXuUTQVQDJR1sbqqlLwXCtiJdqcaoeWE",
    authDomain: "trainss999.firebaseapp.com",
    databaseURL: "https://trainss999.firebaseio.com",
    projectId: "trainss999",
    storageBucket: "",
    messagingSenderId: "221754450782",
    appId: "1:221754450782:web:111858c12cf2a19dd025cf",
    measurementId: "G-516TTPZ3WG"
  };


  firebase.initializeApp(config);

  var database = firebase.database();
$('#addTrain').on("click", function() {
  // take user input
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = moment($("#timeInput").val().trim(), "HH:mm").format("HH:mm");
  var frequency = $("#frequencyInput").val().trim();
  // to create local temporary object to hold train data
  var newTrain = {
      name: trainName,
      place: destination,
      ftrain: firstTrain,
      freq: frequency
    }

      // to create local temporary object to hold train data
  var newTrain = {
    name: trainName,
    place: destination,
    ftrain: firstTrain,
    freq: frequency
  }
  // uploads train data to the database
database.ref().push(newTrain);
console.log(newTrain.name);
// clears all the text-boxes
$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#timeInput").val("");
$("#frequencyInput").val("");
// Prevents moving to new page
return false;
});

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.0.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.0.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
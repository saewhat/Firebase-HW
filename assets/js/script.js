var config = {
    apiKey: "AIzaSyD4BnufELEIr8UEcBfUEcYEp1F58eFdGAM",
    authDomain: "fir-hw-9ace3.firebaseapp.com",
    databaseURL: "https://fir-hw-9ace3.firebaseio.com",
    projectId: "fir-hw-9ace3",
    storageBucket: "fir-hw-9ace3.appspot.com",
    messagingSenderId: "1079656589489",
    appId: "1:1079656589489:web:a02071e382b0a339131a90",
    measurementId: "G-XJTVRZ6QCX"
};

firebase.initializeApp(config);

var trainData = firebase.database();

$("#submitBtn").on("click",function(){

    event.preventDefault();

    var trainName = $("#nameInput").val().trim();
    var destination = $("#destiInput").val().trim();
    var firstTrain = $("#firstInput").val().trim();
    var frequency = $("#freqInput").val().trim();

    var newData = {
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    }

    trainData.ref().push(newData);

    $("#nameInput").val("");
    $("#destiInput").val("");
    $("#firstInput").val("");
    $("#freqInput").val("");

    return false;
})

newData.ref().on("child_added",function(snapshot){
    var name = 
})
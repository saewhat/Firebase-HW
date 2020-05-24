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
    var firstTrain = moment($("#firstInput").val().trim(), "HH:mm").subtract(10,"years").format("X");
    var frequency = $("#freqInput").val().trim();

    var newData = {
        name: trainName,
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
});

trainData.ref().on("child_added", function(snapshot){
    var name = snapshot.val().name;
    var destination = snapshot.val().destination;
    var firstTrain = snapshot.val().firstTrain;
    var frequency = snapshot.val().frequency;

    var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
    var minutes = frequency - remainder;
    var arrival = moment().add(minutes,"m").format("hh:mm A");

    $("#table > tBody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td></tr>");
});
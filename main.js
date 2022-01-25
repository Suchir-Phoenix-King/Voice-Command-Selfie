var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
        console.log("taking selfie ---");
        speak();
    }
    
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in a few seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    setTimeout(function() {
        take_snapshot();
        save();
    }, 3000);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = "<img id='My-Selfie'"+data_url+">";
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("My-Selfie").src ;
    link.href = image;
    link.click();
}
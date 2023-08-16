var SpeechRecognition = window.webkitSpeechRecognition;

var recogniton = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recogniton.start();
}

recogniton.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    if(Content == "take my selfie")
    {
        console.log("taking a selfie ...");
        speech();
    }
}

function speech() {
    var synth  = window.speechSynthesis;

    speakData = "Taking your selfie. Please don't move.";

    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}


Webcam.set({
    width : 360,
    height : 250,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "selfie image" src = "'+data_uri+'">';
    })
} 
function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

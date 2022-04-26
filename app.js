function playButton(element) {


    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[4]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 0.8; // From 0 to 2
    console.log(`${element}`);
    msg.text = document.getElementById(`${element}`).innerHTML;
    console.log(msg.text);
    msg.lang = 'en';

    // Getting Supported Voices
    // The code below helps you retrieve the list of all supported voices:

    // speechSynthesis.getVoices().forEach(function(voice) {
    //     console.log(voice.name, voice.default ? voice.default :'');
    // });

    speechSynthesis.speak(msg);
}
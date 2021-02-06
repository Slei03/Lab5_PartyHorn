// main.js

// TODO

var hornSound = document.getElementById('horn-sound');
var honkBtn = document.getElementById('honk-btn');
honkBtn.addEventListener('click', function(event){
    event.preventDefault();
    hornSound.play();
});


var airHorn = document.getElementById('radio-air-horn');
var carHorn = document.getElementById('radio-car-horn');
var partyHorn = document.getElementById('radio-party-horn');
var soundImage = document.getElementById('sound-image');
airHorn.addEventListener('change', function(){
    soundImage.src = "./assets/media/images/air-horn.svg";
    soundImage.alt = "Air Horn";
    hornSound.src = "./assets/media/audio/air-horn.mp3";
});
carHorn.addEventListener('change', function(){
    soundImage.src = "./assets/media/images/car.svg";
    soundImage.alt = "Car Horn";
    hornSound.src = "./assets/media/audio/car-horn.mp3";
});
partyHorn.addEventListener('change', function(){
    soundImage.src = "./assets/media/images/party-horn.svg";
    soundImage.alt = "Party Horn";
    hornSound.src = "./assets/media/audio/party-horn.mp3";
});


var soundInput = document.getElementById('volume-number');
var soundSlider = document.getElementById('volume-slider');
var volumeImage = document.getElementById('volume-image');
soundInput.addEventListener('input', function(){
    let inputVolume = soundInput.value;
    if(inputVolume.length == 0){
        inputVolume = 0;
    }
    soundSlider.value = inputVolume;
    volumeImageChange(inputVolume);
    hornSound.volume = (inputVolume)/100.0;
    if(inputVolume == 0){
        honkBtn.disabled = true;
    }else{
        honkBtn.disabled = false;
    }
});
soundSlider.addEventListener('input', function(){
    let sliderVolume = soundSlider.value;
    soundInput.value = sliderVolume;
    volumeImageChange(sliderVolume);
    hornSound.volume = (sliderVolume)/100.0;
    if(sliderVolume == 0){
        honkBtn.disabled = true;
    }else{
        honkBtn.disabled = false;
    }
});
function volumeImageChange(soundValue){
    if(soundValue >= 67){
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(soundValue >= 34){
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(soundValue >= 1){
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    }
}


/* Inspired by this pen by Pieter Biesemans https://codepen.io/pieter-biesemans/pen/BQBWXX and My Mother Before Me project http://mymotherbeforeme.com/ */

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");
  
    playButton.addEventListener("click", function() {
      audio.play();
    });
  });
  
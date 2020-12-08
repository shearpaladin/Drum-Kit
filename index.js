
// DETECT BUTTON PRESS

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // What to do when click detected

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);



  });


}

// DETECT KEYBOARD PRESS

// Add Event Listener to the whole document
document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

})

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;

    case "s":
      var tom3= new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3")
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3")
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3")
      kick.play();
      break;

    default:
      console.log(key.key);

  }


}

function buttonAnimation(currentKey){
  // Selecting the class of currentKey
  var activeButton = document.querySelector("." + currentKey);
  // add blur animation
  activeButton.classList.add("pressed");

  // remove blur to set to normal
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}


/* Audio Function Info
This is how Audio is actually constructed:

function Audio (fileLocation) {
  this.fileLocation = fileLocation;
  this.play = function () {
    //Tap into audio hardware
    //Check the file at fileLocation exists
    //Check the file at fileLocation is a sound file
    //Play the file at fileLocation
  }
}
Ex -
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play()

*/

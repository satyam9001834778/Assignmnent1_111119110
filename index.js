var numberOfDrums= document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrums;i++ ){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var buttoninnerHTML = this.innerHTML;
  makeSound(buttoninnerHTML);
buttonAnimation(buttoninnerHTML);
});
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(key){
switch (key) {
  case "a":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
    break;
  case "s":
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  case "d":
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  case "j":
  var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  case "w":
  var crash = new Audio("sounds/crash.mp3");
  crash.play();
  case "k":
  var kick = new Audio("sounds/kick-bass.mp3");
  kick.play();
  case "l":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  default:
}
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100 ) 
}
document.querySelector("h1").classList.add("pressed");

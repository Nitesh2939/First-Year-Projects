let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = '';

buttonsArray.forEach(btn => {

    btn.addEventListener('click',(e) => {

        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            display.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }else{
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});
function playSound(soundFile) {
  let audio;
  switch (soundFile) {
    case "one":
      audio = new Audio("one.mp3");
      break;
    case "add":
      audio = new Audio("add.mp3");
      break;
    case "Seven":
      audio = new Audio("Seven.mp3");
      break;
    case "all clean":
      audio = new Audio("all clean.mp3");
      break;
    case "two":
      audio = new Audio("two.mp3");
      break;
    case "Zero":
      audio = new Audio("Zero.mp3");
      break;
    case "three":
      audio = new Audio("Three.mp3");
      break;
    case "Four":
      audio = new Audio("Four.mp3");
      break;
    case "Five":
      audio = new Audio("Five.mp3");
      break;
    case "Six":
      audio = new Audio("Six.mp3");
      break;
    case "Eight":
      audio = new Audio("Eight.mp3");
       break;
    case "Nine":
      audio = new Audio("Nine.mp3");
       break;
    case "delete":
      audio = new Audio("delete.mp3");
       break;
    case "divide":
      audio = new Audio("divide.mp3");
       break;
    case "Equal":
      audio = new Audio("equal.mp3");
       break;
    case "Minus":
      audio = new Audio("subtract.mp3");
       break;
    case "Multiple":
      audio = new Audio("Multiply.mp3");
       break;
    case "Per":
      audio = new Audio("Percentile.mp3");
      break; 
    case "Dot":
      audio = new Audio("Dot.mp3");
      break;
    case "DZero":
      audio = new Audio("Double Zero.mp3");
      break;
    default:
      console.error("Unknown sound file.");
      return;
  }
  audio.play();
}

//Set up score variables
var user_score = 0;
var computer_score = 0;

//Set up help menu variable
var menu_status = false;

//Cache the DOM
const user_score_element = document.getElementById("user-score");
const computer_score_element = document.getElementById("computer-score");
const outcome_element = document.getElementById("outcome");
const rock_element = document.getElementById("rock");
const paper_element = document.getElementById("paper");
const scissors_element = document.getElementById("scissors");
const lizard_element = document.getElementById("lizard");
const spock_element = document.getElementById("spock");
const help_menu_element = document.getElementById("help-menu");

//Add event listeners for the Gestures
rock_element.addEventListener("click", function(){
  play("rock");
})

paper_element.addEventListener("click", function(){
  play("paper");
})

scissors_element.addEventListener("click", function(){
  play("scissors");
})

lizard_element.addEventListener("click", function(){
  play("lizard");
})

spock_element.addEventListener("click", function(){
  play("spock");
})

//function to evaluate user gesture
function play(user_gesture){
  const computer_gesture = computer_choice();
  //switch the concatenation of the user gesture and the computers
  switch(user_gesture + computer_gesture){
    //winning cases
    case "rockscissors":
    case "rocklizard":
    case "paperrock":
    case "paperspock":
    case "scissorspaper":
    case "scissorslizard":
    case "lizardspock":
    case "lizardpaper":
    case "spockscissors":
    case "rockscissors":
      user_win(user_gesture, computer_gesture);
      break;
    //losing cases
    case "scissorsrock":
    case "lizardrock":
    case "rockpaper":
    case "spockpaper":
    case "paperscissors":
    case "lizardscissors":
    case "spocklizard":
    case "paperlizard":
    case "scissorsspock":
    case "scissorsrocks":
      computer_win(user_gesture, computer_gesture);
      break;
    //draw cases
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
      draw(user_gesture, computer_gesture);
      break;
  }

}

//function to return random gesture, i.e. the computers choice
function computer_choice(){
  const gestures = ["rock", "paper", "scissors", "lizard", "spock"];
  return gestures[Math.floor(Math.random() * 5)];
}

//function for user wins
function user_win(user_gesture, computer_gesture){
  user_score++; //increment users score
  user_score_element.innerHTML = user_score; //display new score
  //update the outcome text
  outcome_element.innerHTML = "Computer used "+computer_gesture+", You Win!";
  gesture_color(user_gesture, "win");
}

//function for computer wins
function computer_win(user_gesture, computer_gesture){
  computer_score++;
  computer_score_element.innerHTML = computer_score;
  outcome_element.innerHTML = "Computer used "+computer_gesture+", You Lose!";
  gesture_color(user_gesture, "lose");
}

//function for a draw
function draw(user_gesture, computer_gesture){
  outcome_element.innerHTML = "You both used "+computer_gesture+", Draw!";
    gesture_color(user_gesture, "draw");
}

//function for updating gesture background colour for 1 second
function gesture_color(user_gesture, color){
  document.getElementById(user_gesture).classList.add(color);

  setTimeout(function(){
    document.getElementById(user_gesture).classList.remove(color);
  }, 500)
}

function help_click(){
  menu_status=!menu_status; //change the menu status
  if(menu_status){
      help_menu_element.classList.remove("slide-out");
      help_menu_element.classList.add("slide-in");
  }else{
    help_menu_element.classList.remove("slide-in");
    help_menu_element.classList.add("slide-out");
  }
}

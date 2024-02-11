buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keyPress(function () {
  if (!started) {
    $("#level-title").text("level" + level);
    nextSequence();
    start = true;
  }
});

// Create function nextSequence for random number amd match with array of colors

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSounds(userChosenColor);
  animatePress(userChosenColor);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push[randomChosenColor];
  //   console.log(randomChosenColor);
  //   console.log(randomNumber);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSounds(randomChosenColor);
}

function playSounds(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 120);
}

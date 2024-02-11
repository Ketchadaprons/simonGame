buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];

// Create function nextSequence for random number amd match with array of colors

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push[randomChosenColor];
  //   console.log(randomChosenColor);
  //   console.log(randomNumber);
}

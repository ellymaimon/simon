export function CurrentGame() {
  this.turn = 1;
  this.correctPattern = [];
  this.userPattern = [];
}

export function lightButton(choice) {
  $("." + choice).addClass(choice + "lit")
  setTimeout(function(){ $("." + choice).removeClass(choice + "lit"); }, 700);
}

CurrentGame.prototype.computerTurn = function() {
  var boxes = ["red", "blue", "green", "yellow"];
  var roll = Math.floor(Math.random() * 4) + 1;
  var choice = boxes[roll - 1];
  this.correctPattern.push(choice);
  for (var i = 0; i < this.turn; i++) {
    var option = this.correctPattern[i];
    setTimeout(function(){ lightButton(option); }, 700);
    }
    this.turn++;
    console.log(this.correctPattern);
  }

// CurrentGame.prototype.playerTurn() {
//
// }





// export function Simon() {
//   var boxes = ["red", "blue", "green", "yellow"];
//   var roll = Math.floor(Math.random() * 4) + 1;
//   var choice = boxes[roll - 1];
//
//   $("." + choice).addClass(choice + "lit")
//   setTimeout(function(){ $("." + choice).removeClass(choice + "lit"); }, 700);
// }




// var correctPattern = []
// var turn = 1
// var boxes = ["red", "blue", "green", "yellow"];
// var roll = Math.floor(Math.random() * 4) + 1;
// var choice = boxes[roll - 1];

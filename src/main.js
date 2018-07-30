import { CurrentGame } from './simon';
import './styles.css';

$(document).ready(function () {
  var game = new CurrentGame();
  $( "#target" ).click(function() {
    game.computerTurn();
  });



});

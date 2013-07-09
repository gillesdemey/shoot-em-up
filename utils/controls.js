/* namespaces */
var Game = Game || {};

Game.keyboard = new THREEx.KeyboardState();

//level the space craft when key is released
document.addEventListener("keyup", function() {
  Game.ship.level();
}, false);

function input() {

  requestAnimationFrame(input);

  /* check for keyboard input */
  if( Game.keyboard.pressed('left') ) {
    Game.ship.left();
  }
  if( Game.keyboard.pressed('alt+left') ) {
    Game.ship.barrelRollLeft();
    //Game.ship.left();
  }
  if( Game.keyboard.pressed('right') ) {
    Game.ship.right();
  }
  if( Game.keyboard.pressed('alt+right') ) {
    Game.ship.barrelRollRight();
    //Game.ship.right();
  }
  if( Game.keyboard.pressed('up') ) {
    Game.ship.forward();
  }
  if( Game.keyboard.pressed('down') ) {
    Game.ship.back();
  }
  if( Game.keyboard.pressed('space') ) {
    Game.ship.fire();
  }
}
input();
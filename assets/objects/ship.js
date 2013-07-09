/* global TWEEN: false, THREE: false, console: false */

/* Game.ship */

/* Namespaces */
var Game = Game || {};
Game.models = Game.models || {};

Game.models.Ship = function(width, height, depth) {

  var ship = this;

  this.roll = 0.4; //roll of the space ship in radians
  this.pitch = 0.2;// ship's pitch when moving forward or back
  this.agility = 0.15; //ship agility, essentially speed; higher = faster
  this.weapon = new Game.weapons.Lasers(); //ship current weapon
  this.numberOfWeapons = 1; //number of weapons on board

  this.bounds = new Array() // boundries for the ship to navigate in
  this.bounds['left']    = -5,
  this.bounds['right']   = 5,
  this.bounds['forward'] = -1.3,
  this.bounds['back']    = -4 

  /* Private properties with default values */
  width   = typeof width  === 'undefined' ? 0.6 : width;
  height  = typeof height === 'undefined' ? 0.6 : height;
  depth   = typeof depth  === 'undefined' ? 0.6 : depth;

  /* Load the model */
  var loader = new THREE.JSONLoader();

  loader.load( "assets/models/cruiser/cruiser.js", function( geometry, mat ) {

    /* set geometry and material */
    ship.setGeometry( geometry );
    //ship.setMaterial( new THREE.MeshLambertMaterial( mat ) );
    ship.setMaterial( new THREE.MeshNormalMaterial() );

    ship.name = "cruiser";
    console.log("done loading ship", ship);

    /* set origins and scale on the model */
    ship.position = { x: -4, y: 1, z: 0 };
    ship.scale.set( 0.1, 0.1, 0.1 );

    Game.scene.add( ship );

  });

  return this;

};

/* inherit from THREE.Mesh */
Game.models.Ship.prototype = new THREE.Mesh();

var rotationTween = new TWEEN.Tween();
var positionTween = new TWEEN.Tween();

/* Jump function for ship model */
Game.models.Ship.prototype.jump = function() {

  var posTarget = { y: 3 };

  positionTween = new TWEEN.Tween( Game.ship.position ).to( posTarget, 300 )
  .easing(TWEEN.Easing.Exponential.InOut)
  .start();

};

/* Shoot function for the ship */
Game.models.Ship.prototype.fire = function() {
  this.weapon.fire();
};

/* Go left function */
Game.models.Ship.prototype.left = function() {

  if ( this.position.z >= this.bounds['left'] ) {

    var rotTarget = { x: -this.roll };

    rotationTween = new TWEEN.Tween( Game.ship.rotation ).to(rotTarget, 200 )
    .easing(TWEEN.Easing.Exponential.Out)
    .start();

    if ( ( this.position.z - this.agility ) >= this.bounds['left'] ) {
      this.position.z -= this.agility;
    }
    else {
      this.position.z = this.bounds['left']
    }
  }

};

/* Go right function */
Game.models.Ship.prototype.right = function() {

  if ( this.position.z <= this.bounds['right'] ) {

    var rotTarget = { x: this.roll };

    rotationTween = new TWEEN.Tween( Game.ship.rotation ).to(rotTarget, 200 )
    .easing(TWEEN.Easing.Exponential.Out)
    .start();

    if ( ( this.position.z + this.agility ) <= this.bounds['right'] ) {
      this.position.z += this.agility;
    }
    else {
      this.position.z = this.bounds['right']
    }
  }
};

/* Go forward */
Game.models.Ship.prototype.forward = function() {

  if ( this.position.x <= this.bounds['forward'] ) {

    var rotTarget = { z: -this.pitch };

    rotationTween = new TWEEN.Tween( this.rotation ).to(rotTarget, 200 )
    .easing(TWEEN.Easing.Exponential.Out)
    .start();

    if ( ( this.position.x + this.agility ) <= this.bounds['forward'] ) {
      this.position.x += this.agility;
    }
    else {
      this.position.x = this.bounds['forward']
    }
  }

};

/* Go backwards */
Game.models.Ship.prototype.back = function() {

  if ( this.position.x >= this.bounds['back'] ) {
    if ( ( this.position.x - this.agility ) >= this.bounds['back'] ) {
      this.position.x -= this.agility;
    }
    else
    {
      this.position.x = this.bounds['back']
    }
  }

};

/* Level the ship back to rotation 0 */
Game.models.Ship.prototype.level = function() {

  var rotTarget = { x: 0, y: 0, z: 0 };

  rotationTween = new TWEEN.Tween( Game.ship.rotation ).to(rotTarget, 200 )
  .start();

};

/* Do a barrel roll! */
Game.models.Ship.prototype.barrelRoll = function() {

  var rotTarget = { x: Math.PI * 2 };

  rotationTween = new TWEEN.Tween( Game.ship.rotation ).to(rotTarget, 500 )
  .start();

};
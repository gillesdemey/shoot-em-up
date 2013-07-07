/* namespaces */
var Game = Game || {};
Game.weapons = Game.weapons || {};

Game.weapons.Rockets = function() {

  this.name = "Rockets";
  this.mode = "automatic";
  this.bulletType = "rocket";
  this.velocity = 0.1;
  this.firerate = 0.5;

  this.bullet = {
    geometry: new THREE.CubeGeometry(0.1, 0.1, 0.1),
    material: new THREE.MeshNormalMaterial()
  };

};

/* inherit from Game.weapon */
Game.weapons.Rockets.prototype = new Game.Weapon();
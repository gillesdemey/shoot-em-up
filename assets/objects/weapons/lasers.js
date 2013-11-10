/* namespaces */
var Game = Game || {};
Game.weapons = Game.weapons || {};

Game.weapons.Lasers = function() {

  this.name = "Lasers";
  this.mode = "automatic";
  this.bulletType = "laser";
  this.velocity = 0.4;
  this.firerate = 0.4;
  this.color = "green";

  this.bullet = {
    geometry: new THREE.CylinderGeometry(0.02, 0.02, 0.2, 10, 10),
    material: new THREE.MeshBasicMaterial({ wireframe: true, color: this.color })
  };

};

/* inherit from Game.weapon */
Game.weapons.Lasers.prototype = new Game.Weapon();
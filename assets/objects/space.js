/* Game.space */

/* namespaces */
var Game = Game || {};
Game.models = Game.models || {};

Game.models.Space = function(width, height) {

  /* Set the geometry */
  this.setGeometry(
    new THREE.PlaneGeometry(width, height)
  );

  /* Texture properties */
  var texture = THREE.ImageUtils.loadTexture('assets/textures/space/c16_cube.png');

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  texture.repeat.set( 300, 300 );

  /* Set the material */
  this.setMaterial(
    new THREE.MeshBasicMaterial({
      map: texture
    })
  );

  //flip it around
  this.rotation.x = -(Math.PI / 2);
  this.position.y = -10;

  return this;
};

/* Inherit from THREE.Mesh */
Game.models.Space.prototype = new THREE.Mesh();

/* Scroll function for Space model */
Game.models.Space.prototype.scroll = function(speed) {
  function scroll() {
    requestAnimationFrame(scroll);
    Game.space.position.x -= speed;
  }
  scroll();
};
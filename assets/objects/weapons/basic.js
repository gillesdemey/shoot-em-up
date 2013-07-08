var Game = Game || {};
Game.Weapon = Game.Weapon || {};

Game.Weapon = function() {

};

Game.Weapon.prototype.fire = function() {

  var weapon = this;
  var ship = Game.ship;
  var bullets = [];

  // window.console.log("pew", weapon.bulletType, weapon.velocity);

  /* dual weapons, motherf*cker! */
  switch ( ship.numberOfWeapons ) {
    case 1:
      bullets[1] = new THREE.Mesh( weapon.bullet.geometry, weapon.bullet.material );
      bullets[1].position = { x: (Game.ship.position.x + Game.ship.geometry.boundingSphere.radius / 15), y: Game.ship.position.y, z: Game.ship.position.z };
      break;
    case 2:
      bullets[1] = new THREE.Mesh( weapon.bullet.geometry, weapon.bullet.material );
      bullets[2] = new THREE.Mesh( weapon.bullet.geometry, weapon.bullet.material );
      bullets[1].position = { x: (Game.ship.position.x - Game.ship.geometry.boundingSphere.radius / 15), y: Game.ship.position.y, z: Game.ship.position.z - Game.ship.geometry.boundingSphere.radius / 25 };
      bullets[2].position = { x: (Game.ship.position.x - Game.ship.geometry.boundingSphere.radius / 15), y: Game.ship.position.y, z: Game.ship.position.z + Game.ship.geometry.boundingSphere.radius / 25 };
      break;
    case 3:
      bullets[1] = new THREE.Mesh( weapon.bullet.geometry, weapon.bullet.material );
      bullets[2] = new THREE.Mesh( weapon.bullet.geometry, weapon.bullet.material );
      bullets[3] = new THREE.Mesh( weapon.bullet.geometry, weapon.bullet.material );
      bullets[1].position = { x: (Game.ship.position.x - Game.ship.geometry.boundingSphere.radius / 15), y: Game.ship.position.y, z: Game.ship.position.z - Game.ship.geometry.boundingSphere.radius / 25 };
      bullets[2].position = { x: (Game.ship.position.x - Game.ship.geometry.boundingSphere.radius / 15), y: Game.ship.position.y, z: Game.ship.position.z + Game.ship.geometry.boundingSphere.radius / 25 };
      bullets[3].position = { x: (Game.ship.position.x + Game.ship.geometry.boundingSphere.radius / 15), y: Game.ship.position.y, z: Game.ship.position.z };
      break;
    default:
      break;
  }

  /* rotate 90degrees on z-axis to face forward */
  bullets.forEach( function(bullet) {
    Game.scene.add( bullet );
    bullet.rotation.z = (Math.PI / 2);
  });

  function fireBullet() {

    requestAnimationFrame(fireBullet);

    bullets.forEach( function(bullet) {

      bullet.position.x += weapon.velocity;

      /* auto destroy bullets */
      if ( bullet.position.x > 10 ) {
        Game.scene.remove(bullet);
      }

    });

  }
  fireBullet();

};
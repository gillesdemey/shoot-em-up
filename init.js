/* This script initializes the game
 * Setting up a basic scene, and a camera
 */

/* Namespaces */
var Game = Game || {};

/* Scene size */
var SCENE_SETTINGS = {
  WIDTH : window.innerWidth,
  HEIGHT : window.innerHeight
};

var CAMERA_SETTINGS = {
  VIEW_ANGLE : 45,
  ASPECT : SCENE_SETTINGS.WIDTH / SCENE_SETTINGS.HEIGHT,
  NEAR : 0.1,
  FAR : 10000
};

/* The game DOM element */
var CONTAINER = document.getElementById('space');

/* Stats */
var stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.bottom = '0px';
stats.domElement.style.zIndex = 100;
CONTAINER.appendChild( stats.domElement );

/* Renderer + configuration */
Game.renderer = new THREE.WebGLRenderer();
Game.renderer.setSize(SCENE_SETTINGS.WIDTH, SCENE_SETTINGS.HEIGHT);

/* Camera + configuration */
Game.camera = new THREE.PerspectiveCamera(
  CAMERA_SETTINGS.VIEW_ANGLE,
  CAMERA_SETTINGS.ASPECT,
  CAMERA_SETTINGS.NEAR,
  CAMERA_SETTINGS.FAR);

/* Camera position */
Game.camera.position.z = 0;
Game.camera.position.y = 12;
Game.camera.position.x = -2;

/* Camera rotation */
//camera.rotation.x = -45 * Math.PI / 180;

/* Scene & Camera attaching */
Game.scene = new THREE.Scene();

/* Target camera */
Game.camera.lookAt(Game.scene.position);

/* Helpers and debug stuff */
// Game.grid = new THREE.GridHelper( 500, 0.5 );
// Game.scene.add(Game.grid);

// Game.selectionAxis = new THREE.AxisHelper( 100 );
// Game.scene.add(Game.selectionAxis);

/* Attach the render-supplied DOM element */
CONTAINER.appendChild( Game.renderer.domElement );

/* Space */
Game.space = new Game.models.Space( 10000, 10000 );
//start scrolling
Game.space.scroll(0.04);
Game.scene.add( Game.space );

/* --- Adding stuff --- */

/* Add the ship */
Game.ship = new Game.models.Ship();
//Game.scene.add( Game.ship );

/* This camera is now a child of the ship and will always look at it, and spin around with it */
Game.scene.add( Game.camera );

/* Add some lights */

//subtle ambient lights
var ambientLight = new THREE.AmbientLight(0xbbbbbb);
Game.scene.add(ambientLight);

// create a point light
//Game.pointLight = new THREE.PointLight(0xFFFFFF);

/* Target the lights */
//Game.pointLight.lookAt(Game.ship.position);

// add to the scene
//Game.scene.add(Game.pointLight);

/* Render loop */
function render() {
  requestAnimationFrame(render);

  //Game.ship.position.x -= 0.2;

  Game.renderer.render(Game.scene, Game.camera);

  TWEEN.update();
  stats.update();
}
/* enable debugging */
//THREE.utils.enableDebug(Game.scene);
render();

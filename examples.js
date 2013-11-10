/* SKYBOX */
var imagePrefix = "assets/textures/space/c16_cube.";
var directions  = ["px", "nx", "py", "ny", "pz", "nz"];
var imageSuffix = ".png";

var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
// BackSide: render faces from inside of the cube, instead of from outside (default).
var materialArray = [];
for (var i = 0; i < 6; i++)
  materialArray.push( new THREE.MeshBasicMaterial({
    // map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
    map: THREE.ImageUtils.loadTexture( "assets/textures/space/c16_cube.png" ),
    side: THREE.BackSide
  }));
var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
var skyBox = new THREE.Mesh( skyBoxGeometry, skyMaterial );
Game.scene.add( skyBox );
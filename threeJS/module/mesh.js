import * as THREE from 'three';
import img from '../assets/textures/uv-test-bw.png'
function createMaterial() {
  const textureLoader = new THREE.TextureLoader();
  // load a texture
  const texture = textureLoader.load(
    img,
  );
  // create a "standard" material
  // const material = new THREE.MeshStandardMaterial({ color: 'purple' });
  const material = new THREE.MeshStandardMaterial({ map: texture });


  return material;
}

function createCube() {
  // create a geometry
  const geometry = new THREE.BoxGeometry(3, 3, 3)

  // create a default (white) Basic material
  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const cube = new THREE.Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = THREE.MathUtils.degToRad(30);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube }
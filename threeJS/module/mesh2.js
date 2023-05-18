import * as THREE from 'three';

function createCube2 () {
  // create a geometry
  const geometry = new THREE.BoxGeometry(1,1,1)

  // create a default (white) Basic material
  const material = new THREE.MeshBasicMaterial({color: 0xff0000});

  // create a Mesh containing the geometry and material
  const cube = new THREE.Mesh(geometry, material);

  return cube;
}

export {createCube2}
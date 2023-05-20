import * as THREE from 'three';

function createLights() {
   const ambientLight = new THREE.AmbientLight('white', 2);

   const mainLight = new THREE.DirectionalLight('white', 5);
   mainLight.position.set(10, 10, 10);

   return { ambientLight, mainLight };
}

export { createLights }
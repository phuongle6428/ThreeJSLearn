import * as THREE from 'three';

function createLights() {
   const light = new THREE.DirectionalLight('white', 8)

   light.position.set(10, 10, 10)
   return light
}

export { createLights }
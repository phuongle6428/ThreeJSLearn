import * as THREE from 'three';

function createCamera() {
   const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)

   camera.position.set(0, 0, 10)
   return camera
}

export { createCamera }
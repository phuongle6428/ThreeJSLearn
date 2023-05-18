import * as THREE from 'three';

function createRenderer () {
   const renderer = new THREE.WebGLRenderer({antialias: true})

   renderer.useLegacyLights = false;

   return renderer
}

export {createRenderer}
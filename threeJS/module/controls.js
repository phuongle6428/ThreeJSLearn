import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function createControls(camera, canvas) {
   const controls = new OrbitControls(camera, canvas);
   controls.enablePan = false
   controls.enableDamping = true;
   controls.tick = () => controls.update();
   return controls
}

export { createControls };
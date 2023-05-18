import { Resizer } from "./module/Resizer";
import { createCamera } from "./module/camera";
import { createLights } from "./module/light";
import { Loop } from "./module/Loop";
import { createCube } from "./module/mesh";
import { createCube2 } from "./module/mesh2";
import { createRenderer } from "./module/renderer";
import { createScene } from "./module/scene";

let camera;
let renderer;
let scene;
let loop

class World {
   constructor(container) {
      camera = createCamera();
      scene = createScene();
      renderer = createRenderer();
      loop = new Loop(camera, scene, renderer)
      container.append(renderer.domElement);

      const cube = createCube();
      const cube2 = createCube2()
      cube2.position.set(0, 0, 1)
      cube.add(cube2)
      const light = createLights()
      scene.add(cube, light);

      loop.updatables.push(cube);

      const resizer = new Resizer(container, camera, renderer);
   }

   render() {
      // draw a single frame
      renderer.render(scene, camera);
   }

   start() {
      loop.start();
   }

   stop() {
      loop.stop();
   }
}

export { World };
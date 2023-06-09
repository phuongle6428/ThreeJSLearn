import { Resizer } from "./module/Resizer";
import { createCamera } from "./module/camera";
import { createLights } from "./module/light";
import { Loop } from "./module/Loop";
import { createCube } from "./module/mesh";
import { createCube2 } from "./module/mesh2";
import { createRenderer } from "./module/renderer";
import { createScene } from "./module/scene";
import { createControls } from "./module/controls";
import { createMeshGroup } from "./module/meshGroup";

let camera;
let renderer;
let scene;
let loop

class World {
   constructor(container) {
      camera = createCamera();
      scene = createScene();
      renderer = createRenderer();
      container.append(renderer.domElement);

      loop = new Loop(camera, scene, renderer)

      const controls = createControls(camera, renderer.domElement);

      const cube = createCube();
      const cube2 = createCube2()
      cube2.position.set(0, 0, 1)
      cube.add(cube2)
      const { ambientLight, mainLight } = createLights();
      // scene.add(cube, ambientLight, mainLight);
      const meshGroup = createMeshGroup();

      scene.add(ambientLight, mainLight, meshGroup);
      // loop.updatables.push(cube);
      // loop.updatables.push(controls);
      loop.updatables.push(controls, meshGroup);

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
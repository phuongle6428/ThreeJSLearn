import * as THREE from 'three';
import { World } from './threeJS/main';

// const scene = new THREE.Scene();

// let camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 10000 );
// camera.position.z = 1000;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( document.documentElement.clientWidth, document.documentElement.clientHeight - 1 );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// function animate() {
// 	requestAnimationFrame( animate );

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );
// }
// console.log(window.innerWidth, document.documentElement.clientWidth)
// animate();

// let renderer, scene, camera;
// let line;
// const MAX_POINTS = 500;
// let drawCount;

// init();
// animate();

// function init() {

// 	// renderer
// 	renderer = new THREE.WebGLRenderer();
// 	// renderer.setPixelRatio( window.devicePixelRatio );
// 	renderer.setSize( window.innerWidth, window.innerHeight );
// 	document.body.appendChild( renderer.domElement );

// 	// scene
// 	scene = new THREE.Scene();

// 	// camera
// 	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10000 );
// 	camera.position.set( 0, 0, 1000 );

// 	// geometry
// 	const geometry = new THREE.BufferGeometry();

// 	// attributes
// 	const positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
// 	geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

// 	// drawcalls
// 	drawCount = 2; // draw the first 2 points, only
// 	geometry.setDrawRange( 0, drawCount );

// 	// material
// 	const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// 	// line
// 	line = new THREE.Line( geometry,  material );
// 	scene.add( line );

// 	// update positions
// 	updatePositions();

// }

// // update positions
// function updatePositions() {

// 	const positions = line.geometry.attributes.position.array;

// 	let x, y, z, index;
// 	x = y = z = index = 0;

// 	for ( let i = 0, l = MAX_POINTS; i < l; i ++ ) {

// 		positions[ index ++ ] = x;
// 		positions[ index ++ ] = y;
// 		positions[ index ++ ] = z;

// 		x += ( Math.random() - 0.5 ) * 30;
// 		y += ( Math.random() - 0.5 ) * 30;
// 		z += ( Math.random() - 0.5 ) * 30;

// 	}

// }

// // render
// function render() {

// 	renderer.render( scene, camera );

// }

// // animate
// function animate() {

// 	requestAnimationFrame( animate );

// 	drawCount = ( drawCount + 1 ) % MAX_POINTS;

// 	line.geometry.setDrawRange( 0, drawCount );

// 	if ( drawCount === 0 ) {

// 		// periodically, generate new data

// 		updatePositions();

// 		line.geometry.attributes.position.needsUpdate = true; // required after the first render

// 		line.material.color.setHSL( Math.random(), 1, 0.5 );

// 	}

// 	render();

// }

function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);

  // // 2. Render the scene
  // world.render();

  // start the animation loop
  world.start();
}

main();

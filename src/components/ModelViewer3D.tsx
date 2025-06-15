import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ModelViewer3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 95 }}
      style={{ width: 400, height: 400, overflow: 'visible' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

function Model() {
  const gltf = useGLTF('/assets/retro-computer.glb');
  return (
    <primitive 
      object={gltf.scene} 
      scale={50} 
      position={[0, -3, 0]} 
    />
  );
}



export default ModelViewer3D;

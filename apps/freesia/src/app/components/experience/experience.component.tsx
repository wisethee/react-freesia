import { Fragment, useRef } from 'react';
import { OrbitControls, useHelper } from '@react-three/drei';
import { DirectionalLight, Mesh } from 'three';
import { Perf } from 'r3f-perf';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Experience = () => {
  const cubeRef = useRef<Mesh | null>(null);
  const sphereRef = useRef<Mesh | null>(null);

  const directionalLightRef = useRef<DirectionalLight | null>(null);

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 0.5);

  useFrame((state, delta) => {
    if (!cubeRef.current) throw Error('cubeRef not assigned');
    cubeRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Fragment>
      <Perf position="bottom-right" />
      <OrbitControls makeDefault />
      <directionalLight
        ref={directionalLightRef}
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <ambientLight intensity={0.3} />
      <color args={['ivory']} attach="background" />

      <mesh position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </Fragment>
  );
};

export default Experience;

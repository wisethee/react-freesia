import { Fragment, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CustomObject from '../custom-object/custom-object.component';
import { Mesh } from 'three';

const Experience = () => {
  const cubeRef = useRef<Mesh | null>(null);

  useFrame((state, delta) => {
    if (!cubeRef.current) throw Error('cubeRef is not assigned');
    cubeRef.current.rotation.y += delta;
  });

  return (
    <Fragment>
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.3} />

      <mesh ref={cubeRef} position={[2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position={[-2, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh scale={9} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject />
    </Fragment>
  );
};

export default Experience;

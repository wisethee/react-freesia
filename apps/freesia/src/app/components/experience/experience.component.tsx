import { Fragment, useRef } from 'react';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Experience = () => {
  const cubeRef = useRef<ThreeElements['mesh']>(null);

  useFrame((state, delta) => {
    if (!cubeRef.current) throw Error('cubeRef is not assigned');
    cubeRef.current.rotation.y += delta;
  });

  return (
    <Fragment>
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intesity={1.5} />
      <ambientLight intesity={0.3} />

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
    </Fragment>
  );
};

export default Experience;

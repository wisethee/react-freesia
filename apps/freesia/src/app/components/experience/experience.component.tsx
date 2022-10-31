import { Fragment, useRef } from 'react';
import { ThreeElements, useFrame } from '@react-three/fiber';

const Experience = () => {
  const cubeRef = useRef<ThreeElements['mesh']>(null);

  useFrame((state, delta) => {
    if (!cubeRef.current) throw Error('cubeRef is not assigned');
    cubeRef.current.rotation.y += delta;
  });

  return (
    <Fragment>
      <mesh ref={cubeRef} position={[2, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial color="mediumpurple" />
      </mesh>

      <mesh position={[-2, 0, 0]}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>

      <mesh scale={9} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </Fragment>
  );
};

export default Experience;

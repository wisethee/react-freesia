import { Fragment, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import { Perf } from 'r3f-perf';

const Experience = () => {
  const cubeRef = useRef<Mesh | null>(null);
  const sphereRef = useRef<Mesh | null>(null);

  return (
    <Fragment>
      <Perf position="bottom-right" />
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.3} />

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

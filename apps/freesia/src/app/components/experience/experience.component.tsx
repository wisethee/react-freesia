import { Fragment, useRef } from 'react';
import { OrbitControls, PivotControls } from '@react-three/drei';
import { Mesh } from 'three';

const Experience = () => {
  const cubeRef = useRef<Mesh | null>(null);

  return (
    <Fragment>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.3} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={3}
        scale={0.5}
      >
        <mesh ref={cubeRef} position={[2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </PivotControls>

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={3}
        scale={0.5}
      >
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </PivotControls>

      <mesh scale={9} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </Fragment>
  );
};

export default Experience;

import { Fragment, useRef } from 'react';
import {
  OrbitControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { Mesh } from 'three';

const Experience = () => {
  const cubeRef = useRef<Mesh | null>(null);
  const sphereRef = useRef<Mesh | null>(null);

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
        <mesh ref={sphereRef} position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="text"
            center
            distanceFactor={3}
            occlude={[sphereRef, cubeRef]}
          >
            This is a sphere
          </Html>
        </mesh>
      </PivotControls>

      <mesh scale={9} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          mirror={0.3}
          mixBlur={1}
          mixStrength={0.3}
          resolution={1024}
          color="greenyellow"
          blur={[0, 0]}
        />
      </mesh>

      <Float>
        <Text
          font="../../../assets/bangers.woff"
          fontSize={1}
          color="salmon"
          position={[0, 1, -2]}
          maxWidth={2}
          textAlign="center"
        >
          R3F Text
        </Text>
      </Float>
    </Fragment>
  );
};

export default Experience;

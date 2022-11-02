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
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';

const Experience = () => {
  const cubeRef = useRef<Mesh | null>(null);
  const sphereRef = useRef<Mesh | null>(null);

  const { position, color } = useControls('Sphere', {
    position: {
      value: { x: -2, y: 0, z: 0 },
      step: 0.01,
      joystick: 'invertY',
    },
    color: '#ff0000',
  });

  const { scale } = useControls('Cube', {
    scale: {
      value: { x: 1, y: 1, z: 1 },
      step: 0.01,
    },
  });

  return (
    <Fragment>
      <Perf position="bottom-right" />
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.3} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={3}
        scale={0.5}
      >
        <mesh
          ref={cubeRef}
          position={[2, 0, 0]}
          scale={[scale.x, scale.y, scale.z]}
        >
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
        <mesh ref={sphereRef} position={[position.x, position.y, position.z]}>
          <sphereGeometry />
          <meshStandardMaterial color={color} />
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

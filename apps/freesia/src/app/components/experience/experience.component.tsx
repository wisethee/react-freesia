import { Fragment, useRef } from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Mesh } from 'three';
import { Perf } from 'r3f-perf';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

const Experience = () => {
  const cubeRef = useRef<Mesh | null>(null);
  const sphereRef = useRef<Mesh | null>(null);

  const { opacity, blur } = useControls('Contact Shadows', {
    opacity: {
      value: 0.3,
      min: 0,
      max: 1,
      step: 0.01,
    },
    blur: {
      value: 0.6,
      min: 0,
      max: 3,
      step: 0.01,
    },
  });

  const { envMapIntensity } = useControls('Environment', {
    envMapIntensity: {
      value: 3.6,
      min: 0,
      max: 12,
    },
  });

  useFrame((state, delta) => {
    if (!cubeRef.current) throw Error('cubeRef not assigned');
    cubeRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Fragment>
      <Perf position="bottom-right" />
      <OrbitControls makeDefault />

      <Stage
        contactShadow={{ blur: blur, opacity: opacity }}
        environment="sunset"
        preset="rembrandt"
        intensity={0.5}
      >
        <mesh castShadow position-y={1} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial
            envMapIntensity={envMapIntensity}
            color="orange"
          />
        </mesh>

        <mesh
          ref={cubeRef}
          castShadow
          position-y={1}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial
            color="mediumpurple"
            envMapIntensity={envMapIntensity}
          />
        </mesh>
      </Stage>
    </Fragment>
  );
};

export default Experience;

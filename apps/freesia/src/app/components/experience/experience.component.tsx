import { Fragment, Suspense } from 'react';
import { OrbitControls, Html } from '@react-three/drei';
import Model from '../model/model.component';

const Loading = () => {
  return <Html>Loading...</Html>;
};

const Experience = () => {
  return (
    <Fragment>
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Suspense fallback={<Loading />}>
        <Model />
      </Suspense>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </Fragment>
  );
};

export default Experience;

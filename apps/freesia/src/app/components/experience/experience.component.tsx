import { Fragment, Suspense } from 'react';
import { OrbitControls, Html, Stage, Backdrop } from '@react-three/drei';
import Fox from '../fox/fox.component';

const Loading = () => {
  return <Html>Loading...</Html>;
};

const Experience = () => {
  return (
    <Fragment>
      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={0.9}
        shadow-normalBias={0.03}
      />
      <ambientLight intensity={0.5} />

      <Stage
        shadows
        adjustCamera
        intensity={0.3}
        environment="forest"
        preset="soft"
      >
        <Suspense fallback={<Loading />}>
          <Fox />
        </Suspense>
      </Stage>
    </Fragment>
  );
};

export default Experience;

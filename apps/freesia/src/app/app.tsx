import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Fragment } from 'react';
import Experience from './components/experience/experience.component';

const App = () => {
  return (
    <Fragment>
      <Leva collapsed />

      <Canvas
        shadows={false}
        camera={{
          fov: 60,
          near: 0.1,
          far: 200,
          position: [-3, 2, 6],
        }}
      >
        <Experience />
      </Canvas>
    </Fragment>
  );
};

export default App;

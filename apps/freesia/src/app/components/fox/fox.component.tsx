import { useGLTF, useAnimations } from '@react-three/drei';
import { useControls } from 'leva';
import { useEffect } from 'react';

const Fox = () => {
  const fox = useGLTF('../../../assets/Fox/glTF/Fox.gltf');
  const animations = useAnimations(fox.animations, fox.scene);

  const { animation } = useControls({
    animation: {
      options: animations.names,
    },
  });

  useEffect(() => {
    if (!animations.actions) throw Error('no animations provided');
    const action = animations.actions[animation];
    action?.reset().fadeIn(0.5).play();

    return () => {
      action?.fadeOut(0.5);
    };
  }, [animation]);

  return (
    <primitive
      object={fox.scene}
      scale={0.02}
      position={[0, 0, 0]}
      rotation={[0, 0.3, 0]}
    />
  );
};

useGLTF.preload('../../../assets/Fox/glTF/Fox.gltf');

export default Fox;

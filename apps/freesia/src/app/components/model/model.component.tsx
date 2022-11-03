import { useGLTF } from '@react-three/drei';

const Model = () => {
  const model = useGLTF('../../../assets/hamburger.glb');
  return <primitive object={model.scene} scale={0.36} position={[0, -1, 0]} />;
};

export default Model;

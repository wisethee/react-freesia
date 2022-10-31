import { useMemo, useRef, useEffect } from 'react';
import { BufferGeometry, DoubleSide } from 'three';

const CustomObject = () => {
  const geometryRef = useRef<BufferGeometry | null>(null);
  const verticesCount = 10 * 3;

  const positions = useMemo(() => {
    const positionsArray = new Float32Array(verticesCount * 3);
    for (let i = 0; i < verticesCount * 3; i++) {
      positionsArray[i] = (Math.random() - 0.5) * 3;
    }
    return positionsArray;
  }, [verticesCount]);

  useEffect(() => {
    geometryRef.current?.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={DoubleSide} />
    </mesh>
  );
};

export default CustomObject;

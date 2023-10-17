import { Canvas, useLoader } from "@react-three/fiber";
import { useParams } from "react-router";

function Panorama() {
  //获取路径参数id
  const { id } = useParams<{ id: string }>();
  //别报错了哥求你了

  return (
    <div id="canvas-container">
      <div>路径参数ID{id}</div>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Panorama;

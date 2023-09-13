import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.ts";

function Panorama() {
  //别报错了哥求你了
//   const texture = useLoader(TextureLoader, "/path/to/texture.jpg");

  return (
    <div id="canvas-container">
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

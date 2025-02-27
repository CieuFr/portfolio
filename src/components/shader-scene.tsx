import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ShaderScene = () => {
  return (
    // tailwind css usage
    <div className={" bg-indigo-800 absolute w-full h-screen p-0 top-0 left-0"}>
      <div className={"h-5/6 p-0 "}>
        <Canvas
          camera={{
            position: [0, 0, 7],
            fov: 30,
          }}
        >
          <color attach="background" args={["#ececec"]} />
          // three-drei usage
          <OrbitControls />
          <mesh rotation={[Math.PI / 10, 10, 10]}>
            // three-fiber usage
            <torusGeometry />
            <meshNormalMaterial />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default ShaderScene;

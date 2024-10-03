import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

function DockerLogo(props) {
  const { nodes, materials } = useGLTF("/models/react.glb");
  return (
    <Float dispose={null}>
      <group scale={0.01} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[20, 20, 30]}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/react.gltf");
export default DockerLogo;

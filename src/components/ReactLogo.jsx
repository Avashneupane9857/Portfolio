import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

function ReactLogo(props) {
  const { nodes, materials } = useGLTF("/models/docker.glb");
  return (
    <Float dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.3} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_0.geometry}
          material={materials.whale}
          position={[-1.546, 0, -0.072]}
          scale={2.731}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_0.geometry}
          material={materials.crate}
          position={[-3.008, -0.43, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_0.geometry}
          material={materials.crate}
          position={[-2.03, -0.43, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_0.geometry}
          material={materials.crate}
          position={[-1.07, -0.43, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_0.geometry}
          material={materials.crate}
          position={[-0.128, -0.43, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_0.geometry}
          material={materials.crate}
          position={[0.832, -0.43, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_0.geometry}
          material={materials.crate}
          position={[-0.128, -0.43, 1.552]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_0.geometry}
          material={materials.crate}
          position={[-1.07, 0.439, 1.552]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_0.geometry}
          material={materials.crate}
          position={[-2.03, -0.43, 1.534]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_0.geometry}
          material={materials.crate}
          position={[-0.128, -0.43, 2.439]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_0.geometry}
          material={materials.crate}
          position={[-2.023, 0.528, 0.679]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_0.geometry}
          material={materials.crate}
          position={[-0.128, 0.488, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_0.geometry}
          material={materials.crate}
          position={[-0.128, 0.469, 1.552]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_0.geometry}
          material={materials.crate}
          position={[-1.07, 0.482, 0.664]}
          scale={0.435}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_0.geometry}
          material={materials.whale_outline}
          position={[-1.546, 0, -0.072]}
          scale={2.731}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/docker.glb");
export default ReactLogo;

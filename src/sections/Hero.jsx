import { PerspectiveCamera, Ring } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import DockerLogo from "../components/DockerLogo";
import Rings from "../components/Rings";
import Button from "../components/Button";

function Hero() {
  //   const controls = useControls("HackerRoom", {
  //     positionX: { value: 2.5, min: -10, max: 10 },
  //     positionY: { value: 2.5, min: -10, max: 10 },
  //     positionZ: { value: 2.5, min: -10, max: 10 },
  //     rotationX: { value: 0, min: -10, max: 10 },
  //     rotationY: { value: 0, min: -10, max: 10 },
  //     rotationZ: { value: 0, min: -10, max: 10 },
  //     scale: { value: 1, min: 0.1, max: 10 },
  //   });
  const isMobile = useMediaQuery({ maxWidth: 968 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const sizes = calculateSizes(isMobile, isSmall, isTablet);
  return (
    <section className="min-h-screen  w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-26 mt-20 c-space gap-3">
        <p className="sm:text-2xl text-xl font-medium text-white font-generalsans text-center">
          Hi, Avash Neupane Here <span className="waving-hand">👋🏼</span>
        </p>
        <p className="hero_tag  sm:text-3xl  text-gray_gradient ">
          Accidentally Thriving in world of Chaos
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full ">
          {/* <Suspense fallback={null}></Suspense> */}
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <HackerRoom
            // scale={0.07}
            // position={[0, 0, 0]}
            // rotation={[0, 280, 0]}
            position={sizes.deskPosition}
            rotation={[0.4, -3.2, 0.0]}
            scale={sizes.deskScale}
          />
          <group>
            <Target position={sizes.targetPosition} />
            <ReactLogo position={sizes.reactLogoPosition} />
            <DockerLogo position={sizes.cubePosition} />
            <Rings position={sizes.ringPosition} />
          </group>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Canvas>
      </div>
      <div className=" c-space absolute bottom-1 left-0 right-0 z-10">
        <a href="#contact" className="">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;

import ParticlesTS from "react-tsparticles";
import { loadFull } from "tsparticles";
import { config } from "./config";

const particlesInit = async (main: any) => {
  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};
const onHoverOptions = ["grab", "grab", "repulse"];
const directionOptions = [
  "top",
  "bottom",
  "bottom-right",
  "bottom-left",
  "top-left",
  "top-right",
  "right",
  "left",
  "none",
];

const randomElement = (element: any) =>
  element[Math.floor(Math.random() * element.length)];

const onHoverEffect = randomElement(onHoverOptions);
const directionEffet = randomElement(directionOptions);

export const Particles = () => {
  return (
    <div className="z-0">
      <ParticlesTS
        id="tsparticles"
        init={particlesInit}
        // @ts-ignore
        options={config(onHoverEffect, directionEffet)}
      />
    </div>
  );
};

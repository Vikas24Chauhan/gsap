import React from "react";
import "./ResponsiveAnimation.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ResponsiveAnimation() {
  // gsap.matchMedia() is used when you want different GSAP animations for different screen sizes.

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(".res-box", {
        x: 500,
        rotation: 360,
        duration: 2,
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.to(".res-box", {
        x: 200,
        rotation: 180,
        duration: 2,
      });
    });
  });

  return (
    <div className="res-container">
      <div className="res-box"></div>
    </div>
  );
}

export default ResponsiveAnimation;

import React from "react";
import "./Set.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Set() {
  // gsap.set() is used to immediately set a property on an element without creating an animation.

  useGSAP(() => {
    // Animates
    gsap.to(".set-box", {
      x: 200,
      duration: 1,
    });

    // Instantly sets
    gsap.set(".set-box", {
      x: 200,
    });
  });

  return (
    <div>
      <div className="set-container">
        <div className="set-box"></div>
      </div>
    </div>
  );
}

export default Set;

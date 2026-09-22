import React from "react";
import "./LifecycleCallbacks.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function LifecycleCallbacks() {
  // Lifecycle callbacks in GSAP are functions that run automatically at specific stages of an animation.

  useGSAP(() => {
    gsap.to(".life-box1", {
      x: 200,
      duration: 2,

      onStart: () => {
        console.log("Animation started");
      },

      onUpdate: () => {
        console.log("Animation is running");
      },

      onComplete: () => {
        console.log("Animation completed");
      },
    });
  });

  return (
    <div className="life-container">
      <div className="life-box1"></div>
      <div className="life-box2"></div>
      <div className="life-box3"></div>
      <div className="life-box4"></div>
    </div>
  );
}

export default LifecycleCallbacks;

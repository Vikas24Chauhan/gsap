import React from "react";
import "./To.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function To() {
  useGSAP(() => {
    gsap.to(".to-box", {
      x: 1200,
      duration: 2,
      delay: 1,
      rotate: 360,
      // repeat: 1,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div>
      <div className="to-container">
        <div className="to-box"></div>
      </div>
    </div>
  );
}

export default To;

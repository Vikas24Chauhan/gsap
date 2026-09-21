import React from "react";
import "./FromTo.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function FromTo() {
  useGSAP(() => {
    gsap.fromTo(
      ".fromTo-box",
      {
        x: 0,
        opacity: 0,
      },
      {
        x: 1200,
        opacity: 1,
        duration: 2,
        rotate: 360,
        ease: "power2.out",
      },
    );
  });

  return (
    <div className="fromTo-container">
      <div className="fromTo-box"></div>
    </div>
  );
}

export default FromTo;

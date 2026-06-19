import React from "react";
import "./From.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function From() {
  useGSAP(() => {
    gsap.from(".from-box", {
      x: "1200px",
      duration: 2,
      delay: 1,
      rotate: 360,
    });
  });

  return (
    <div>
      <div className="from-container">
        <div className="from-box"></div>
      </div>
    </div>
  );
}

export default From;

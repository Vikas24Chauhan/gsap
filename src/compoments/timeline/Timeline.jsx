import React from "react";
import "./Timeline.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Timeline() {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(".timeline-box1", {
      x: 600,
      duration: 2,
    });

    tl.to(".timeline-box2", {
      x: 1200,
      duration: 2,
    });
  });

  return (
    <div>
      <div className="timeline-container">
        <div className="timeline-box1"></div>
        <div className="timeline-box2"></div>
      </div>
    </div>
  );
}

export default Timeline;

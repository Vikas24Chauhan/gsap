import React from "react";
import "./Timeline.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Timeline() {
  //  A Timeline in GSAP is a way to sequence multiple animations and control them together.

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(".timeline-box1", {
      x: 200,
      duration: 1,
      ease: "bounce.out",
    });

    tl.to(".timeline-box2", {
      x: 400,
      duration: 1,
      ease: "back.out",
    });

    tl.to(".timeline-box3", {
      x: 600,
      duration: 1,
      rotate: 360,
    });

    tl.fromTo(
      ".timeline-box4",
      {
        x: 0,
        opacity: 0,
      },
      {
        x: 800,
        duration: 1,
        opacity: 1,
      },
    );
  });

  return (
    <div className="timeline-container">
      <div className="timeline-box1"></div>
      <div className="timeline-box2"></div>
      <div className="timeline-box3"></div>
      <div className="timeline-box4"></div>
    </div>
  );
}

export default Timeline;

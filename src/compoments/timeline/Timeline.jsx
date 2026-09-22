import React from "react";
import "./Timeline.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Timeline() {
  // Timeline :- A Timeline in GSAP is a way to sequence multiple animations and control them together.
  // position parameter :- The position parameter in a GSAP timeline tells GSAP when an animation should start in relation to other animations.
  // So, position parameter = controlling the timing/overlap of animations inside a timeline.

  const tl = gsap.timeline();

  // useGSAP(() => {
  //   tl.to(".timeline-box1", {
  //     x: 200,
  //     duration: 1,
  //     ease: "bounce.out",
  //   });

  //   tl.to(".timeline-box2", {
  //     x: 400,
  //     duration: 1,
  //     ease: "back.out",
  //   });

  //   tl.to(".timeline-box3", {
  //     x: 600,
  //     duration: 1,
  //     rotate: 360,
  //   });

  //   tl.fromTo(
  //     ".timeline-box4",
  //     {
  //       x: 0,
  //       opacity: 0,
  //     },
  //     {
  //       x: 800,
  //       duration: 1,
  //       opacity: 1,
  //     },
  //   );
  // });

  useGSAP(() => {
    tl.to(
      ".timeline-box1",
      {
        x: 200,
        duration: 1,
        ease: "bounce.out",
      },
      "demo",
    );

    tl.to(".timeline-box2", {
      x: 400,
      duration: 1,
      ease: "back.out",
    });

    tl.to(
      ".timeline-box3",
      {
        x: 600,
        duration: 1,
        rotate: 360,
      },
      // "-=0.9",
      "demo",
    );

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

import React from "react";
import "./CP.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function CP() {
  // Controlling and Playing Animations means using methods to start, pause, resume, reverse, or change the progress of an animation or timeline.

  // Play
  // tl.play();

  // Pause
  // tl.pause();

  // Resume
  // tl.resume();

  // Reverse
  // tl.reverse();

  // Restart from beginning
  // tl.restart();

  // Go to a specific time
  // tl.seek(1);

  // Jump to a specific progress
  // tl.progress(0.5);

  // Change playback speed
  // tl.timeScale(2);

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(".cp-box1", {
      x: 200,
      duration: 1,
    });

    tl.to(".cp-box2", {
      x: 400,
      duration: 1,
    });

    tl.to(".cp-box3", {
      x: 600,
      duration: 1,
    });

    tl.to(".cp-box4", {
      x: 800,
      duration: 1,
    });

    setTimeout(() => {
      tl.pause();
    }, 2200);

    // setTimeout(() => {
    //   tl.reverse();
    // }, 3200);

    setTimeout(() => {
      tl.restart();
    }, 3200);
  });

  return (
    <div className="cp-container">
      <div className="cp-box1"></div>
      <div className="cp-box2"></div>
      <div className="cp-box3"></div>
      <div className="cp-box4"></div>
    </div>
  );
}

export default CP;

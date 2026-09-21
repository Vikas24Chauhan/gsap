import React from "react";
import "./From.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function From() {
  // useGSAP(() => {
  //   gsap.from(".from-box", {
  //     x: "1200px",
  //     duration: 2,
  //   });
  // });

  // useGSAP(() => {
  //   gsap.from(".from-box", {
  //     x: "1200px",
  //     duration: 2,
  //     delay: 1,
  //   });
  // });

  // useGSAP(() => {
  //   gsap.from(".from-box", {
  //     x: "1200px",
  //     duration: 2,
  //     delay: 1,
  //     rotate: 360,
  //   });
  // });

  // useGSAP(() => {
  //   gsap.from(".from-box", {
  //     x: "1200px",
  //     duration: 2,
  //     delay: 1,
  //     rotate: 360,
  //     // repeat: 1,
  //     repeat: -1,
  //   });
  // });

  useGSAP(() => {
    gsap.from(".from-box", {
      x: "1200px", // x: 1200 both will work
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
      <div className="from-container">
        <div className="from-box"></div>
      </div>
    </div>
  );
}

export default From;

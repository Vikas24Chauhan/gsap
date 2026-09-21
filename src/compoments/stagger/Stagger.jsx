import React from "react";
import "./Stagger.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Stagger() {
  // Stagger in GSAP means animating multiple elements one after another with a small delay between each element.

  // useGSAP(() => {
  //   gsap.to(".stagger-h1", {
  //     y: -100,
  //     duration: 1,
  //     delay: 1,
  //     stagger: 0.2,
  //   });
  // });

  useGSAP(() => {
    gsap.to(".stagger-box", {
      x: 500,
      duration: 0.2,
      delay: 1,
      ease: "power2.out",
      stagger: {
        each: 0.1,
        from: "end",
      },
    });
  });

  return (
    <div>
      <div className="stagger-container">
        {/* <h1 className="stagger-h1">Hello,</h1>
        <h1 className="stagger-h1">I am</h1>
        <h1 className="stagger-h1">Vikas Chauhan</h1> */}

        <div className="stagger-box"></div>
        <div className="stagger-box"></div>
        <div className="stagger-box"></div>
        <div className="stagger-box"></div>
        <div className="stagger-box"></div>
        <div className="stagger-box"></div>
      </div>
    </div>
  );
}

export default Stagger;

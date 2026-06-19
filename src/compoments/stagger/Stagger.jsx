import React from "react";
import "./Stagger.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Stagger() {
  useGSAP(() => {
    gsap.to(".stagger-h1", {
      y: -100,
      duration: 1,
      delay: 1,
      stagger: 0.2,
    });
  });

  return (
    <div>
      <div className="stagger-container">
        <h1 className="stagger-h1">Hello,</h1>
        <h1 className="stagger-h1">I am</h1>
        <h1 className="stagger-h1">Vikas Chauhan</h1>
      </div>
    </div>
  );
}

export default Stagger;

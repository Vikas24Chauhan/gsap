import React from "react";
import "./Easing.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Easing() {
  // in :- Starts slowly → gets faster.
  // out :- Starts fast → slows down.
  // inOut :- Starts slowly → speeds up → slows down.
  // back :- Goes slightly beyond the destination and comes back.
  // bounce :- Creates a bouncing effect at the end.
  // elastic :- Creates a spring/rubber-band effect.
  // circ :- Creates a more pronounced smooth acceleration/deceleration.

  //   useGSAP(() => {
  //     gsap.to(".easing-box", {
  //       x: 1200,
  //       duration: 2,
  //       ease: "power2.in",
  //     });
  //   });

  //   useGSAP(() => {
  //     gsap.to(".easing-box", {
  //       x: 1200,
  //       duration: 2,
  //       ease: "power2.out",
  //     });
  //   });

  //   useGSAP(() => {
  //     gsap.to(".easing-box", {
  //       x: 1200,
  //       duration: 2,
  //       ease: "power2.inOut",
  //     });
  //   });

  //   useGSAP(() => {
  //     gsap.to(".easing-box", {
  //       x: 1200,
  //       duration: 2,
  //       ease: "back",
  //     });
  //   });

  //   useGSAP(() => {
  //     gsap.to(".easing-box", {
  //       x: 1200,
  //       duration: 2,
  //       ease: "bounce.out",
  //     });
  //   });

  //   useGSAP(() => {
  //     gsap.to(".easing-box", {
  //       x: 500,
  //       duration: 2,
  //       ease: "elastic.out",
  //     });
  //   });

  useGSAP(() => {
    gsap.to(".easing-box", {
      x: 1200,
      duration: 2,
      ease: "circ.out",
    });
  });

  return (
    <div>
      <div className="easing-container">
        <div className="easing-box"></div>
      </div>
    </div>
  );
}

export default Easing;

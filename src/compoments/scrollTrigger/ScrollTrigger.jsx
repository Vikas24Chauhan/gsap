import React from "react";
import "./ScrollTrigger.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollTriggerComponent() {
  useGSAP(() => {
    gsap.from(".page1 .scrollBox1", {
      scale: 0,
      delay: 1,
      duration: 2,
      rotate: 360,
    });

    gsap.from(".page2 .scrollBox2", {
      scale: 0,
      duration: 2,
      rotate: 360,

      scrollTrigger: {
        trigger: ".page2 .scrollBox2",
        scroller: "body",
        markers: true,
        // start: "top 60%",
        // end: "top 30%",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <div>
      <div className="page1">
        <div className="scrollBox1"></div>
      </div>

      <div className="page2">
        <div className="scrollBox2"></div>
      </div>

      <div className="page3"></div>
    </div>
  );
}

export default ScrollTriggerComponent;

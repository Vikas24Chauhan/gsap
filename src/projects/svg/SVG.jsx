import React, { useEffect } from "react";
import "./SVG.css";
import gsap from "gsap";

function SVG() {
  useEffect(() => {
    let path = "M 10 100 Q 250 100 490 100";
    let finalPath = "M 10 100 Q 250 100 490 100";

    const string = document.querySelector(".svg-container");

    string.addEventListener("mousemove", function (dets) {
      //   path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`;
      path = `M 10 100 Q 250 ${dets.y} 490 100`;

      gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
      });
    });

    string.addEventListener("mouseleave", function () {
      gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    });
  }, []);

  return (
    <div className="svg-container">
      <svg width="500" height="200">
        <path
          d="M 10 100 Q 250 100 490 100"
          stroke="white"
          fill="transparent"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

export default SVG;

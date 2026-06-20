import React, { useEffect } from "react";
import "./Marquee.css";
import gsap from "gsap";

function Marquee() {
  useEffect(() => {
    function marqueeAnimation() {
      window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
          gsap.to(".marquee-line", {
            transform: "translateX(-200%)",
            repeat: -1,
            duration: 4,
            ease: "none",
          });

          gsap.to(".marquee-line img", {
            rotate: 180,
          });
        } else {
          gsap.to(".marquee-line", {
            transform: "translateX(0%)",
            repeat: -1,
            duration: 4,
            ease: "none",
          });

          gsap.to(".marquee-line img", {
            rotate: 0,
          });
        }
      });
    }

    marqueeAnimation();
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee-page1"></div>

      <div className="marquee-page2">
        <div className="marquee-move">
          <div className="marquee-line">
            <h1>THRIVE BEYOND LIMITS</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>

          <div className="marquee-line">
            <h1>THRIVE BEYOND LIMITS</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>

          <div className="marquee-line">
            <h1>THRIVE BEYOND LIMITS</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>

          <div className="marquee-line">
            <h1>THRIVE BEYOND LIMITS</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>

          <div className="marquee-line">
            <h1>THRIVE BEYOND LIMITS</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="marquee-page3"></div>
    </div>
  );
}

export default Marquee;

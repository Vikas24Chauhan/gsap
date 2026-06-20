import React, { useEffect, useRef } from "react";
import "./Text.css";
import gsap from "gsap";

const Text = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    function breakTheText() {
      const h1 = headingRef.current;
      const h1Text = h1.textContent;

      const splittedText = h1Text.split("");
      const halfValue = splittedText.length / 2;

      let clutter = "";

      splittedText.forEach((elem, idx) => {
        if (idx < halfValue) {
          clutter += `<span class="a">${elem}</span>`;
        } else {
          clutter += `<span class="b">${elem}</span>`;
        }
      });

      h1.innerHTML = clutter;
    }

    breakTheText();

    gsap.from("h1 .a", {
      y: 80,
      duration: 0.6,
      delay: 0.5,
      stagger: 0.15,
      opacity: 0,
    });

    gsap.from("h1 .b", {
      y: 80,
      duration: 0.6,
      delay: 0.5,
      stagger: -0.15,
      opacity: 0,
    });
  }, []);

  return (
    <div className="text-container">
      <h1 ref={headingRef}>VIKAS CHAUHAN</h1>
    </div>
  );
};

export default Text;

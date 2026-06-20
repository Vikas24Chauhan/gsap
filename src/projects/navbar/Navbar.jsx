import React, { useRef } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    gsap.from(".navbar-logo", {
      y: -50,
      duration: 1,
      delay: 0.5,
      opacity: 0,
    });

    tl.current.to(".navbar-content", {
      right: 0,
      duration: 0.5,
    });

    tl.current.from(".navbar-content h4", {
      x: 150,
      duration: 0.4,
      stagger: 0.2,
      opacity: 0,
    });

    tl.current.from(".navbar-content navbar-close", {
      opacity: 0,
    });
  });

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <h1>Vikas Chauhan</h1>

        <p onClick={() => tl.current.play()}>
          <RiMenu3Fill />
        </p>
      </div>

      <div className="navbar-content">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Work</h4>
        <h4>Services</h4>
        <h4>Contact Us</h4>

        <RiCloseLine
          className="navbar-close"
          onClick={() => tl.current.reverse()}
        />
      </div>
    </div>
  );
}

export default Navbar;

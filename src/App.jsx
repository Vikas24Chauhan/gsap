import React, { useRef } from "react";
import "./App.css";
import To from "./compoments/to/To";
import From from "./compoments/from/From";
import Stagger from "./compoments/stagger/Stagger";
import Timeline from "./compoments/timeline/Timeline";
import ScrollTrigger from "./compoments/scrollTrigger/ScrollTrigger";
import Navbar from "./projects/navbar/Navbar";
import Text from "./projects/text/Text";
import Marquee from "./projects/marquee/Marquee";
import SVG from "./projects/svg/SVG";
import Easing from "./compoments/easing/Easing";
import FromTo from "./compoments/fromTo/FromTo";

function App() {
  return (
    <div>
      {/* <To /> */}
      {/* <From /> */}
      <FromTo />
      {/* <Stagger /> */}
      {/* <Timeline /> */}
      {/* <ScrollTrigger /> */}
      {/* <Easing /> */}
      {/* <Navbar /> */}
      {/* <Text /> */}
      {/* <Marquee /> */}
      {/* <SVG /> */}
    </div>
  );
}

export default App;

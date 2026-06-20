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

function App() {
  return (
    <div>
      {/* <To /> */}
      {/* <From /> */}
      {/* <Stagger /> */}
      {/* <Timeline /> */}
      {/* <ScrollTrigger /> */}
      {/* <Navbar /> */}
      {/* <Text /> */}
      <Marquee />
    </div>
  );
}

export default App;

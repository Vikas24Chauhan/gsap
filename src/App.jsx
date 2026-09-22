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
import CP from "./compoments/controllingAndPlaying/CP";
import LifecycleCallbacks from "./compoments/lifecycleCallbacks/LifecycleCallbacks";
import Set from "./compoments/set/Set";

function App() {
  return (
    <div>
      {/* <To /> */}
      {/* <From /> */}
      {/* <FromTo /> */}
      {/* <Easing /> */}
      <Set />
      {/* <Stagger /> */}
      {/* <Timeline /> */}
      {/* <CP /> */}
      {/* <LifecycleCallbacks /> */}
      {/* <ScrollTrigger /> */}

      {/* ------------- Small Projects --------------- */}
      {/* <Navbar /> */}
      {/* <Text /> */}
      {/* <Marquee /> */}
      {/* <SVG /> */}
    </div>
  );
}

export default App;

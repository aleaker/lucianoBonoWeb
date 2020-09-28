import React, { useState } from "react";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: false,
  path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LegoDisplay = () => {
  const [play, setPlay] = useState(false);


  return (
    <div  className="legoDisplayContainer" onMouseEnter={() => setPlay(true)} onMouseLeave={() => setPlay(false)}>
      <Lottie options={defaultOptions} isStopped={!play} isPaused={!play} />
    </div>
  );
};
export default LegoDisplay;

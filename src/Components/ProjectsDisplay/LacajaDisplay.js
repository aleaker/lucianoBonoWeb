//rgb(54, 62, 156)
import React from "react";
const laCajaLogo = require("../../images/laCaja.png");

const LacajaDisplay = () => {
  return (
    <div id="lacajaContainer">
      <div id="lacajaLogoTop"></div>
      <img src={laCajaLogo} alt="logoLaCaja"/>
    </div>
  );
};

export default LacajaDisplay;

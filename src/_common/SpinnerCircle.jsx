import React from "react";

import SpinnerCircleSVG from "../images/spinner.svg";

const SpinnerCircle = ({
  style = {},
  width = "80",
  className = "",
  height = "80",
  viewBox = "0 0 38 38"
}) => (
  <SpinnerCircleSVG
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
  />
);

export default SpinnerCircle;

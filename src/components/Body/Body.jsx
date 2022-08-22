import "./body.scss";
import Left from "./Left/Left";
import React from "react";
import Right from "./Right/Right";

// Body component
function Body() {
  return (
    <div className="main-body">
      <Left />
      <Right />
    </div>
  );
}

export default Body;

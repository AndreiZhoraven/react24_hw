import React from "react";
import "./style.sass";

export default function Block() {
  const handleSquare = () => {
    console.log(`in handleSquare`);
  };

  const handleCircle = (event) => {
    event.stopPropagation();
    console.log(`in handleCircle`);
  }

  const handleHeading = (event) => {
    event.stopPropagation();
    console.log(`in handleHeading`);
  }

  return (
    <div>
      <div id="square" onClick={handleSquare}>
        <div id="circle" onClick={handleCircle}>
          <h1 onClick={handleHeading}>Hello, world</h1>
        </div>
      </div>
    </div>
  );
}

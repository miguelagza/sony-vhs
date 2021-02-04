import React from "react";

let paletteStyle = {
  width: "100%",
  height: "35px",
};

function Palette({ backgroundColor }) {
  return (
    <div className='palette'>
      <div
        style={{
          backgroundColor: `${backgroundColor}`,
          width: paletteStyle.width,
          height: paletteStyle.height,
        }}
      ></div>
    </div>
  );
}

export default Palette;

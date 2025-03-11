import React from 'react';
import Spline from "@splinetool/react-spline";

function HomeBg() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background iframe */}
      <iframe
        src="https://my.spline.design/scrollbasedinteracvtivemacbookpro-17b4ba19903c98f218dc70372d0a7127/"
        frameBorder="0"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 5 }} // Ensure it stays in the background
      />

      {/* Content on top of the iframe */}
     
    </div>
  );
}

export default HomeBg;

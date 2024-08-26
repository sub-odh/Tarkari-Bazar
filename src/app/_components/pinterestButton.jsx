import React, { useState } from "react";

const pinterestButton = () => {
  const [imageSrc, setImageSrc] = useState("/socialMedia/pinterestFalse.svg");

  return (
    <button className="mr-2">
      <img
        src={imageSrc}
        onMouseOver={() => setImageSrc("/socialMedia/pinterestTrue.svg")}
        onMouseOut={() => setImageSrc("/socialMedia/pinterestFalse.svg")}
        alt="pinterest"
      />
    </button>
  );
};

export default pinterestButton;

import React, { useState } from "react";

const facebookButton = () => {
  const [imageSrc, setImageSrc] = useState("/socialMedia/facebookFalse.svg");

  return (
    <button className="mr-2">
      <img
        src={imageSrc}
        onMouseOver={() => setImageSrc("/socialMedia/facebookTrue.svg")}
        onMouseOut={() => setImageSrc("/socialMedia/facebookFalse.svg")}
        alt="Facebook"
      />
    </button>
  );
};

export default facebookButton;

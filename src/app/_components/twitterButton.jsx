import React, { useState } from "react";

const twitterButton = () => {
  const [imageSrc, setImageSrc] = useState("/socialMedia/twitterFalse.svg");

  return (
    <button>
      <img
        src={imageSrc}
        onMouseOver={() => setImageSrc("/socialMedia/twitterTrue.svg")}
        onMouseOut={() => setImageSrc("/socialMedia/twitterFalse.svg")}
        alt="twitter"
      />
    </button>
  );
};

export default twitterButton;

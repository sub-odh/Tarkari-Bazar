import React, { useState } from "react";

const twitterButton = () => {
  const [imageSrc, setImageSrc] = useState("/socialMedia/twitterFalse.svg");

  return (
    <button className="mr-2">
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

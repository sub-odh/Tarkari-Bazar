import React, { useState } from "react";

const instagramButton = () => {
  const [imageSrc, setImageSrc] = useState("/socialMedia/instagramFalse.svg");

  return (
    <button>
      <img
        src={imageSrc}
        onMouseOver={() => setImageSrc("/socialMedia/instagramTrue.svg")}
        onMouseOut={() => setImageSrc("/socialMedia/instagramFalse.svg")}
        alt="instagram"
      />
    </button>
  );
};

export default instagramButton;

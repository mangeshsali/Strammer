import React, { useRef } from "react";

const Browse = () => {
  const btn = useRef(null);
  console.log(btn);
  return (
    <div>
      <button ref={btn}>Browse</button>
    </div>
  );
};

export default Browse;

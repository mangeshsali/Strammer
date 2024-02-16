import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
const Loader = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <span className="loader"></span>
        <div className="m-3 text-3xl">Loading</div>
      </div>
      {/* <ShimmerSimpleGallery card imageHeight={250} caption />; */}
    </>
  );
};

export default Loader;

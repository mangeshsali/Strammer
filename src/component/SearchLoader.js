import React from "react";
import { ShimmerContentBlock } from "react-shimmer-effects";
const SearchLoader = () => {
  return (
    <div className="w-[80%] h-2">
      <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={10}
        thumbnailHeight={2}
      />
      <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={10}
        thumbnailHeight={2}
      />
    </div>
  );
};

export default SearchLoader;

import React from "react";
import "../../index.css";

// import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <>
      {/* <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />
      <ShimmerSimpleGallery card imageHeight={300} /> */}
      {/* <ShimmerSimpleGallery card imageHeight={250}  caption /> */}

      <div className="restuarentcard">
        {Array(20)
          .fill("")
          .map((e) => (
            <div className="shimmer-card"> </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;

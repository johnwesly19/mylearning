import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <>
      {/* <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />
      <ShimmerSimpleGallery card imageHeight={300} /> */}
      <ShimmerSimpleGallery card imageHeight={250}  caption />
      
    </>
  );
};

export default Shimmer;

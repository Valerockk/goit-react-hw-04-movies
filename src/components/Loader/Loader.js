import React from "react";
import Loader from "react-loader-spinner";

const MyLoader = () => (
  <Loader
    type="Circles"
    color="#00BFFF"
    height={200}
    width={200}
    timeout={3000} //3 secs
  />
);

export default MyLoader;

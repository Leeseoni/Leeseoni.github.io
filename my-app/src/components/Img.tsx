import React from "react";
import { ImgProps } from "../module/Type";

const Img: React.FC<ImgProps> = ({ src, className, alt }) => {
  return <img src={src} className={className} alt={alt} />;
};

export default Img;

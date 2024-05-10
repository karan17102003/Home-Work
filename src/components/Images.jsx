import React from "react";
import { img1, img2 } from "../components/images/images";
export const Images = () => {
  return (
    <div>
      <div className="flex justify-evenly mt-14">
        <img src={img1} alt="" className="w-[600px] " />
        <img src={img2} alt="" className="w-[600px] " />
      </div>
    </div>
  );
};

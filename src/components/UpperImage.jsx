import React from "react";
import { img0, img1, img2 } from "../components/images/images";
export const UpperImage = () => {
  return (
    <div className="flex gap-5 p-10">
      <div>
        <img src={img0} alt="" className="h-[428px]" />
      </div>
      <div className="flex flex-col gap-5">
        <img src={img1} alt="" className="w-[500px] " />
        <img src={img2} alt="" className="w-[500px] " />
      </div>
    </div>
  );
};

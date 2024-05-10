import React from "react";
import { DiVim } from "react-icons/di";

export const FeaturePrd = ({ img, title, price, rating }) => {
  return (
    <div>
      <div className=" bg-[#fff] flex flex-col justify-center items-center mt-10 gap-2 p-5 shadow-lg w-[400px]">
        <img src={img} alt="" className="w-[200px] h-[250px]" />
        <h3 className="font-bold text-2xl">
          {title.length > 10 ? title.slice(0, 20) + "....." : title}
        </h3>
        <p className="font-bold text-xl">${price}</p>
        <p className="font-bold text-xl">{rating}⭐</p>
      </div>
    </div>
  );
};

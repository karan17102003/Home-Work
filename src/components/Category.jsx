import { data } from "autoprefixer";
import React from "react";

export const Category = ({ img, category, product }) => {
  return (
    <div>
      <div className="mt-10 flex justify-center items-center gap-5 bg-[#fff] w-[300px] h-[150px] shadow-lg">
        <div>
          <img src={img} alt="categoriesImgs" className="w-14 object-cover" />
        </div>
        <div>
          <p>{category}</p>
          <p>{product} Products</p>
        </div>
      </div>
    </div>
  );
};

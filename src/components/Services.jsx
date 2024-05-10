import { MdDone } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { MdWifiCalling2 } from "react-icons/md";
import "../index.css";

export const Services = () => {
  return (
    <div className="flex justify-around mt-10">
      <div
        id="services"
        className="flex justify-center items-center p-5 bg-[#fff]"
      >
        <MdDone className="text-5xl text-[#FFD333]" />
        <span id="services-headings">Quality Product</span>
      </div>

      <div
        id="services"
        className="flex justify-center items-center p-5 bg-[#fff]"
      >
        <FaTruckFast className="text-5xl text-[#FFD333]" />
        <span id="services-headings">Free Shipping</span>
      </div>

      <div
        id="services"
        className="flex justify-center items-center p-5 bg-[#fff]"
      >
        <GoArrowSwitch className="text-5xl text-[#FFD333]" />
        <span id="services-headings">14-Day Return</span>
      </div>

      <div
        id="services"
        className="flex justify-center items-center p-5 bg-[#fff]"
      >
        <MdWifiCalling2 className="text-5xl text-[#FFD333]" />
        <span id="services-headings">24/7 Support</span>
      </div>
    </div>
  );
};

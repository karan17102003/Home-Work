import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#3D464D] p-3 ">
      <div className="flex justify-center items-center bg-[#FFD333]">
        <GiHamburgerMenu className="text-2xl" />
        <p className="text-xl">Categories</p>
      </div>

      <ul className="flex justify-center items-center gap-8 text-xl text-[#fff]">
        <li>Home</li>
        <li>Shop</li>
        <li>Shop Details</li>
        <li>Page</li>
        <li>Contacts</li>
      </ul>

      <div className="bg-blue flex justify-center items-center gap-5">
        <FaRegHeart className="text-xl text-[#FFD333]" />
        <IoCartOutline className="text-xl text-[#FFD333]" />
      </div>
    </div>
  );
};

import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-around p-5">
      <div>
        <span className="text-3xl font-bold bg-[#3D464D] text-[#FFD333] p-2">
          MULTI
        </span>
        <span className="text-3xl font-bold bg-[#FFD333] text-[#3D464D] p-2">
          SHOP
        </span>
      </div>

      <div className="flex justify-center items-center border-2 ">
        <input
          type="text"
          placeholder="Search a product"
          className="p-2 w-[450px]"
        />
        <IoIosSearch className="text-2xl cursor-pointer mr-2" />
      </div>

      <div>
        <p className="text-center">Customer Service</p>
        <p className="text-xl font-bold">+012 345 6789</p>
      </div>
    </div>
  );
};

export default Header;

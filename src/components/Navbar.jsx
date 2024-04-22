import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="w-full bg-neutral-950 text-white flex justify-between py-3 px-2 items-center">
      <div className="flex gap-x-2">
        <RxHamburgerMenu size={25}/>
        <IoSearch size={25}/>
      </div>
      <h2 className="text-2xl">BasketZone</h2>
      <div className="flex gap-x-3">
        <FaRegUser size={25}/>
        <LuShoppingCart size={25}/>
      </div>
    </div>
  );
};

export default Navbar;

import {
  FaSquareXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  CiSearch,
  CiCircleChevDown,
  CiShoppingCart,
  CiPhone,
} from "react-icons/ci";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-5 text-sm sticky top-0 z-50 shadow">
      {/* logo */}
      <div className="flex items-center lg:mr-5">
        <span className=" flex text-xl font-bold items-center">
          <span className="text-agrios mr-1">🌿</span>Agrios
        </span>
      </div>
      {/* social icons */}
      <div className="hidden lg:flex items-center lg:mr-7">
        <FaSquareXTwitter className="mx-1 cursor-pointer" />
        <FaFacebook className="mx-1 cursor-pointer" />
        <FaInstagram className="mx-1 cursor-pointer" />
        <FaLinkedinIn className="mx-1 cursor-pointer" />
      </div>
      {/* naigations links */}
      <ul className="hidden lg:flex list-none items-center m-0 p-0 flex-1">
        <li className="mx-2 flex items-center cursor-pointer">
          Home <CiCircleChevDown className="ml-0.5 text-xs" />
        </li>
        <li className="mx-2 flex items-center cursor-pointer">About</li>
        <li className="mx-2 flex items-center cursor-pointer">
          Services <CiCircleChevDown className="ml-0.5 text-xs" />
        </li>
        <li className="mx-2 flex items-center cursor-pointer">
          Project <CiCircleChevDown className="ml-0.5 text-xs" />
        </li>
        <li className="mx-2 flex items-center cursor-pointer">News</li>
        <li className="mx-2 flex items-center cursor-pointer">Shop</li>
        <li className="mx-2 flex items-center cursor-pointer">
          Contact
        </li>
      </ul>
      {/* right side */}
      <div className="hidden lg:flex items-center">
        <CiSearch className="mx-2 cursor-pointer" />
        <CiShoppingCart className="mx-2 cursor-pointer" />
        <div className="flex items-center ml-2">
          <CiPhone className="mr-1" />
          <span>+254 114 109 301</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

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
    <nav className="flex items-center justify-between bg-white px-2.5 py-5 text-[14px] sticky top-0 z-50 shadow">
      {/* logo */}
      <div className="flex items-center mr-5">
        <span className=" flex text-[20px] font-bold items-center">
          <span className="text-agrios mr-1.25">🌿</span>Agrios
        </span>
      </div>
      {/* social icons */}
      <div className="flex items-center mr-7.5">
        <FaSquareXTwitter className="my-0 mx-[5px] cursor-pointer" />
        <FaFacebook className="my-0 mx-[5px] cursor-pointer" />
        <FaInstagram className="my-0 mx-[5px] cursor-pointer" />
        <FaLinkedinIn className="my-0 mx-[5px] cursor-pointer" />
      </div>
      {/* naigations links */}
      <ul className="list-none flex items-center m-0 p-0 flex-1">
        <li className="my-0 mx-2.5 flex items-center cursor-pointer">
          Home <CiCircleChevDown className="ml-1.25 text-[12px]" />
        </li>
        <li className="my-0 mx-2.5 flex items-center cursor-pointer">About</li>
        <li className="my-0 mx-2.5 flex items-center cursor-pointer">
          Services <CiCircleChevDown className="ml-1.25 text-[12px]" />
        </li>
        <li className="my-0 mx-2.5 flex items-center cursor-pointer">
          Project <CiCircleChevDown className="ml-1.25 text-[12px]" />
        </li>
        <li className="my-0 mx-2.5 flex items-center cursor-pointer">News</li>
        <li className="my-0 mx-2.5 flex items-center cursor-pointer">Shop</li>
        <li className="my-0 mx-2.5 flex items-center cursor-pointer">
          Contact
        </li>
      </ul>
      {/* right side */}
      <div className="flex items-center">
        <CiSearch className="my-0 mx-2.5 cursor-pointer" />
        <CiShoppingCart className="my-0 mx-2.5 cursor-pointer" />
        <div className="flex items-center ml-2.5">
          <CiPhone className="mr-1.25" />
          <span>+254 114 109 301</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

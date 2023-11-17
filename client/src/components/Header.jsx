import logo from "../assets/website_logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="bg-[#010028] border-b-2 border-b-yellow-500 shadow-lg sticky top-0 z-40 py-2 ">
      <header className="flex justify-between items-center max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-32 h-8 sm:w-52 sm:h-10 lg:w-72 lg:h-16 bg-contain cursor-pointer"
            />
          </Link>
        </div>
        <form className="flex justify-between px-3 items-center w-56 sm:w-[300px] lg:w-[350px] bg-white rounded-lg">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="outline-none p-2 rounded-md bg-transparent w-44 sm:w-[270px] lg:w-[330px]"
          />
          <FaSearch className="text-green-800 text-lg" />
        </form>
        <div>
          <ul className="flex items-center gap-2 sm:gap-4 lg:gap-8">
            <Link to="/">
              <li className="hidden sm:inline sm:text-base lg:text-lg font-semibold text-white border-b-[3px] border-b-transparent cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline sm:text-base lg:text-lg font-semibold text-white border-b-[3px] border-b-transparent cursor-pointer">
                About
              </li>
            </Link>
            <Link to="/sign-in">
              <li className="text-sm sm:text-base lg:text-lg font-semibold text-white border-b-[3px] border-b-transparent cursor-pointer">
                SignIn
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { FaTimes, FaBars, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill, BsEnvelope } from "react-icons/bs";
import { Link } from "react-scroll";
import Logo from "../image/olayinka.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#060911] text-gray-300 shadow-[1px 15px 17px -8px rgba(0,0,0,0.5)] ">
      <div className="mx-5 ">
        <button className="text-xl md:text-lg xl:text-xl 2xl:text-2xl text-pink-600 xs:text-xl hover:opacity-70">
          <Link to="home" smooth={true} duration={500}>
            <img className="h-[65px]" src={Logo} alt="logo" />
          </Link>
        </button>
      </div>

      {/* Menu */}
      <ul className=" mx-4 hidden md:flex md:text-sm lg:text-base xl:text-base xl:space-x-2 2xl:text-lg 2xl:space-x-5">
        <li className="Menu_links">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="Menu_links ">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="Menu_links ">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="Menu_links ">
          <Link to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="Menu_links ">
          <Link to="contact" smooth={true} duration={500}>
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 right-0 w-1/2 h-fit bg-pink-600 flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-xl hover:text-gray-300">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 text-xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-4 text-xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-xl">
          <Link onClick={handleClick} to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-4 text-xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Social-Icons */}
      <div className=" hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-gray-900">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="https://www.linkedin.com/in/olayinka-bakare-0a253815a/"
              rel="noreferrer"
              target={"_blank"}
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#1e3a8a]">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="https://github.com/YhinkaDevOps"
              target={"_blank"}
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-pink-900">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="mailto:yinkabakare30@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              Email
              <BsEnvelope size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="http://drive.google.com/file/d/1pm2Hkkivj6L3GDulaFOkHHc1qv0RcC_O/view?usp=drivesdk" 
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

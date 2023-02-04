import React from "react";
import HTML from "../image/html.png";
import CSS from "../image/css.png";
import JavaScript from "../image/javascript.png";
import REACT from "../image/react.png";
import Tailwind from "../image/tailwind.png";
import Github from "../image/github.png";
import SASS from "../image/sass.png";
import Bootstrap from "../image/Bootstrap.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-center text-left pb-4 mt-[90px]">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={HTML} alt="HTML" />
            <p className="p-5">HTML5</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={CSS} alt="css" />
            <p className="p-5">CSS3</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={JavaScript} alt="javascript" />
            <p className="p-5">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={REACT} alt="react" />
            <p className="p-5">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={Tailwind} alt="tailwind" />
            <p className="p-5 bold">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={Bootstrap} alt="boostrap" />
            <p className="p-5 bold">BOOTSTRAP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={SASS} alt="material__ui" />
            <p className="p-5">SASS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200 py-5">
            <img className="w-10 mx-auto" src={Github} alt="github" />
            <p className="p-5">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

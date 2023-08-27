import React from "react";
import realestate from "../image/realestate.jpg";
import squazzle from "../image/squazzle.png";
import lendsqr from "../image/lendsqr.png";
import medium from "../image/medium.png";
import clancommerce from "../image/clancommerce.JPG";
import handout from "../image/handout.JPG";

const Project = () => {
  return (
    <div
      name="project"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full select-none">
        <div className="pb-2 mt-16">
          <div className="sm:text-center text-left mt-5 mb-5 ">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 pt-2">
              Projects
            </p>
          </div>
          {/* container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            <div
              style={{ backgroundImage: `url(${squazzle})` }}
              className="z-1 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-200"
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-bold text-white flex justify-center items-center mt-1">
                  Squazzle
                </span>
                <span className="text-white text-[11px] mt-1 flex justify-center items-center px-4 leading-4">
                  A squatting platform that allows people to accommodate others
                  for an agreed period of time
                </span>
                <div className="text-white text-[11px] pt-4 flex gap-2  justify-center items-center ">
                  <span className="bg-[#696869] p-1 rounded-lg">Figma</span>
                  <span className="bg-[#696869] p-1 rounded-lg">PWA</span>
                  <span className="bg-[#696869] p-1 rounded-lg">React</span>
                  <span className="bg-[#696869] p-1 rounded-lg">CSS</span>
                  <span className="bg-[#696869] p-1 rounded-lg">Tailwind</span>
                </div>
                <div className="pt-6 pb-3 text-center">
                  <a
                    href="https://squazzle-stutern.web.app/"
                    target={`_blank`}
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-pink-600 hover:text-white"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/StuternHousemanship/SQUAZZLE-Frontend-Project-Team1.1/tree/staging"
                    target={`_blank`}
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-pink-600 hover:text-white"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${lendsqr})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-200"
            >
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-bold text-white flex justify-center items-center mt-1">
                  Lendsqr
                </span>
                <span className="text-white text-[11px] mt-1 flex justify-center items-center px-4 leading-4">
                  Empowering the smartest lenders
                </span>
                <div className="text-white text-[11px] pt-4 flex gap-2  justify-center items-center ">
                  <span className="bg-[#696869] p-1 rounded-lg">Figma</span>
                  <span className="bg-[#696869] p-1 rounded-lg">React</span>
                  <span className="bg-[#696869] p-1 rounded-lg">
                    Typescript
                  </span>
                  <span className="bg-[#696869] p-1 rounded-lg">Sass</span>
                </div>
                <div className="pt-6 pb-3 text-center">
                  <a
                    href="https://lateef-bakare-lendsqr-fe-test.netlify.app/"
                    target={`_blank`}
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-pink-600 hover:text-white"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/YhinkaDevOps/lendsqr-fe-test"
                    target={`_blank`}
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-pink-600 hover:text-white"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${medium})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-200"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-lg font-bold text-white flex justify-center items-center mt-1 ">
                  Manage
                </span>
                <span className="text-white text-[11px] mt-1 flex justify-center items-center px-4 leading-4">
                  Bring everyone together to build better products
                </span>
                <div className="text-white text-[11px] pt-4 flex gap-2  justify-center items-center ">
                  <span className="bg-[#696869] p-1 rounded-lg">Html</span>
                  <span className="bg-[#696869] p-1 rounded-lg">CSS</span>
                  <span className="bg-[#696869] p-1 rounded-lg">
                    Javascript
                  </span>
                  <span className="bg-[#696869] p-1 rounded-lg">Tailwind</span>
                </div>
                <div className="pt-6 pb-3 text-center">
                  <a
                    href="https://yhinkadevops.github.io/LandingPage-with-TailwindCSS/"
                    target={`_blank`}
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-pink-600 hover:text-white"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/YhinkaDevOps/LandingPage-with-TailwindCSS"
                    target={`_blank`}
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-pink-600 hover:text-white"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${clancommerce})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-200 "
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-lg font-bold text-white flex justify-center items-center mt-1 ">
                  ClanCommerce
                </span>
                <span className="text-white text-[11px] mt-1 flex justify-center items-center px-4 leading-4">
                  The Smart platform for unified commerce, CRM, sales, and
                  inventory operation
                </span>
                <div className="text-white text-[11px] pt-4 flex gap-2  justify-center items-center ">
                  <span className="bg-[#696869] p-1 rounded-lg">Figma</span>
                  <span className="bg-[#696869] p-1 rounded-lg">Nuxt</span>
                  <span className="bg-[#696869] p-1 rounded-lg">
                    Javascript
                  </span>
                  <span className="bg-[#696869] p-1 rounded-lg">CSS</span>
                  <span className="bg-[#696869] p-1 rounded-lg">Tailwind</span>
                </div>
                <div className="pt-6 pb-3 text-center">
                  <a
                    href="http://clancomm-web-new.s3-website.eu-west-2.amazonaws.com/"
                    target="_blank"
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-pink-600 hover:text-white"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  {/* <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-pink-600 hover:text-white"
                  >
                    Code
                  </a> */}
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${handout})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-200 "
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-lg font-bold text-white flex justify-center items-center mt-1">
                  Handout
                </span>
                <span className="text-white text-[11px] mt-1 flex justify-center items-center px-4 leading-4">
                  This platform provides a conduit for individuals to offer
                  valuable yet surplus items to those who may find them
                  beneficial.
                </span>
                <div className="text-white text-[11px] pt-4 flex gap-2  justify-center items-center ">
                  <span className="bg-[#696869] p-1 rounded-lg">Figma</span>
                  <span className="bg-[#696869] p-1 rounded-lg">PWA</span>
                  <span className="bg-[#696869] p-1 rounded-lg">React</span>
                  <span className="bg-[#696869] p-1 rounded-lg">CSS</span>
                  <span className="bg-[#696869] p-1 rounded-lg">Tailwind</span>
                </div>
                <div className="pt-6 pb-3 text-center">
                  <a
                    href="https://handout-stutern.web.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-pink-600 hover:text-white"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1/tree/staging"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-base hover:bg-pink-600 hover:text-white"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${realestate})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-200"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-lg font-bold text-white flex justify-center items-center mt-1">
                  In Progress!
                </span>
                <div className="pt-6 pb-3 text-center">
                  <a
                    href="/"
                    target={`_blank`}
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-sm hover:bg-pink-600 hover:text-white"
                  >
                    Demo
                  </a>
                  <a
                    href="/"
                    target={`_blank`}
                    className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-base hover:bg-pink-600 hover:text-white"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

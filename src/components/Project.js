import React from "react";
import realestate from "../image/realestate.jpg";
import project1 from "../image/clock.png";
import project2 from "../image/calculator.png";
import project5 from "../image/project1.png";
import project4 from "../image/portfolio.png";

const Project = () => {
  return (
    <div
      name="project"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2 mt-16">
          <div className="sm:text-center text-left mt-5 mb-5 ">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 pt-2">
              Projects
            </p>
          </div>
          {/* container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            <div
              style={{ backgroundImage: `url(${project1})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white flex justify-center items-center">
                  Clock
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://legendary-paprenjak-55b05a.netlify.app/"
                    target={`_blank`}
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/YhinkaDevOps/Clock-VanillaJs.git"
                    target={`_blank`}
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${project2})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white flex justify-center items-center">
                  Calculator
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://exquisite-dragon-9b3423.netlify.app/"
                    target={`_blank`}
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/YhinkaDevOps/Calculator-VanillaJs.git"
                    target={`_blank`}
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${realestate})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${project4})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div object-cover "
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white flex justify-center items-center">
                  Portfolio
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://lucent-malasada-90508b.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/YhinkaDevOps/Youtube-API"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${project5})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white  flex justify-center items-center ">
                  IMDB Movie - API
                </span>
                <div className="pt-8 text-center">
                  <a href="#" target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/YhinkaDevOps/MovieApiFetch.git"
                    target={`_blank`}
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${realestate})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                      Code
                    </button>
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

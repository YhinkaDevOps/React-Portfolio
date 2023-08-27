import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className=" max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full select-none">
        <div className=" sm:text-center text-left pb-5 about">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300  ">
            About
          </p>
        </div>
        <div></div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-6 md:gap-8 px-4 ">
          <div className="sm:text-left md:text-2xl lg:text-3xl  font-bold about-intro ">
            <p>
              Hello! I'm Olayinka, a dedicated Frontend Developer
              with over 2 years of immersive experience in crafting exceptional
              web experiences. I'm thrilled to welcome you to my corner of the
              digital world.
            </p>
          </div>
          <div className="text-sm md:text-base about-info space-y-3 ">
            <p>
              My journey in web development began with a transformative
              experience at the Stutern Frontend Development Bootcamp, where I
              honed my skills and immersed myself in the dynamic world of React
              framework. This bootcamp not only equipped me with technical
              prowess but also ignited my passion for creating visually
              captivating and user-centric web applications.
            </p>

            <p>
              During my time as a Frontend Developer Intern at Scelloo, I had
              the privilege to leverage the power of Nuxt and Vue,
              I played an integral role in crafting seamless user interfaces
              that seamlessly adapt across devices and platforms. This
              experience solidified my ability to translate design concepts into
              engaging and interactive digital solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

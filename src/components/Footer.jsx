import React from "react";

const Footer = () => {
  return (
    <div className="h-auto  mx-auto footer">
      <ul className="flex items-center justify-center text-center socials">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/YhinkaDevOps"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/olayinka-bakare-0a253815a"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="mailto:yinkabakare30@gmail.com"
            rel="noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
      <hr className="text-gray-600" />
      <span className="text-gray-400 flex items-center justify-center text-center p-2 ">
        <i className="fas fa-copyright"></i> &nbsp; 2022 Bakare Olayinka. All Rights
        Reserved.
      </span>
    </div>
  );
};

export default Footer;

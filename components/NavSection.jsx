import React from "react";

export const NavSection = ({ title, img }) => {
  return (
    <nav className="w-[90%] h-auto flex flex-col justify-center items-center mt-10">
      <h3 className="text-xl text-white font-semibold font-mono mb-5">
        {title}
      </h3>
      <div>
        <img src={img} alt="icon" className="h-[200px] drop-shadow-lg" />
      </div>
    </nav>
  );
};

export default NavSection;

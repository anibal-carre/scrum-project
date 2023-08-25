"use client";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

export const NavSection = ({ title, img, bg, bg2 }) => {
  const router = useRouter();
  return (
    <nav className="w-[90%] h-auto flex flex-col justify-center items-center mt-10">
      <button
        onClick={() => {
          router.push("/dashboard");
        }}
        className={`w-[50px] h-10 ${bg} self-start flex justify-center items-center border rounded shadow shadow-black hover:scale-105 hover:transition-all hover:${bg2}`}
      >
        <BiArrowBack className=" text-white " />
      </button>

      <div className="w-full flex justify-center ">
        <h3 className="text-xl text-white font-semibold font-mono mb-5">
          {title}
        </h3>
      </div>
      <div>
        <img src={img} alt="icon" className="h-[200px] drop-shadow-lg" />
      </div>
    </nav>
  );
};

export default NavSection;

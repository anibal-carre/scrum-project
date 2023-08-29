import React from "react";
import { useRouter } from "next/navigation";
import "../app/globals.css";

function Card() {
  const router = useRouter();
  return (
    <div
      className="w-full h-[600px] shadow-md shadow-black rounded-lg bg-blue-950 border border-black cursor-pointer overflow-y-auto card-container"
      onClick={() => {
        router.push("/profile");
      }}
    >
      <div className="rounded-lg bg-blue-900 p-7 pb-0 border border-black overflow-hidden">
        <div className="rounded-full w-[90px] h-[90px]">
          <img
            src="user-image.jpg"
            alt="user"
            className="rounded-md drop-shadow-lg h-[90px]"
          />
        </div>
        <p className="text-sm xl:text-base pt-6 text-gray-400 font-mono">
          La brújula de:
        </p>
        <h1 className="text-2xl lg:text-3xl pr-10 pb-14 font-mono text-white">
          Jeremy Robson
        </h1>
      </div>
      <div className="flex flex-col gap-3 text-xs justify-start px-7 pt-3 pb-0">
        <p className="text-lg font-mono text-white">Desarrollo Full Stack</p>
        <div className="flex flex-row items-center">
          <p className="text-gray-400 text-base font-mono">Perú</p>
          <p className="text-base text-gray-400 ml-auto my-3 lg:my-2 font-mono">
            01 Sep 2023
          </p>
        </div>
      </div>
      <div className="text-sm xl:text-base pt-0 text-white font-mono flex justify-center items-center flex-col">
        <h2 className="text-lg mb-4 mt-4 font-mono self-start ml-5">
          Mi Vision
        </h2>
        <p className="flex justify-center items-center px-4 font-mono text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          debitis possimus qui minima vitae temporibus, eius quis eaque
          expedita! Corrupti saepe similique praesentium animi velit pariatur
          dolorum quod molestias nulla?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusantium debitis possimus qui minima vitae
          temporibus, eius quis eaque expedita! Corrupti saepe similique
          praesentium animi velit pariatur dolorum quod molestias nulla?
        </p>
      </div>
    </div>
  );
}

export default Card;

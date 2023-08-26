import React from "react";
import { useRouter } from "next/navigation";

function Card() {
  const router = useRouter();
  return (
    <div
      className="w-full h-[600px] shadow-md shadow-black rounded-lg bg-blue-950 border border-black cursor-pointer "
      onClick={() => {
        router.push("/profile");
      }}
    >
      <div className="rounded-lg bg-blue-900 p-7 pb-0 border border-black">
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
      <div className="flex flex-col gap-3 text-xs justify-start px-7 pt-5 pb-0">
        <p className="text-lg font-mono text-white">Desarrollo Full Stack</p>
        <p className="text-gray-400 text-base font-mono">Perú</p>
        <p className="text-base text-gray-400 ml-auto my-4 lg:my-2 font-mono">
          01 Sep 2023
        </p>
      </div>
    </div>
  );
}

export default Card;

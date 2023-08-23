"use client";

import Login from "@/components/Login";
import Register from "@/components/Register";

import { useState } from "react";

export default function Home() {
  const [register, setRegister] = useState(false);

  const handleRegister = () => {
    setRegister(!register);
  };

  return (
    <div className="w-screen h-screen md:h-screen flex flex-col items-center md:justify-center md:items-center bg-blue-900 md:bg-blue-950 md:gap-5">
      <div className="w-[95%] md:w-[50%] 2xl:w-[35%] h-[600px] md:h-[680px] flex flex-col mt-20 bg-white rounded-xl md:shadow-md md:shadow-black md:mt-5 border">
        <div className="w-full h-36 flex justify-center md:justify-center md:h-36">
          <img
            src="funval-logo3.jpg"
            alt="funval"
            className="mt-6 rounded-xl h-24 md:h-36"
          />
        </div>
        {!register ? (
          <Login handleRegister={handleRegister} />
        ) : (
          <Register handleRegister={handleRegister} />
        )}
      </div>
    </div>
  );
}

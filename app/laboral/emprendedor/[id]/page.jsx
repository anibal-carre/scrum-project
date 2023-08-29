"use client";

import Form from "@/components/Form";
import Goals from "@/components/Goals";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiHome } from "react-icons/hi";

const Emprendedor = ({ params }) => {
  const currentYear = new Date().getFullYear();
  const nextFourYears = [];
  const [edit, setEdit] = useState(true);
  const router = useRouter();

  const handleEdit = () => {
    setEdit(!edit);
  };

  for (let i = 0; i <= 4; i++) {
    nextFourYears.push(currentYear + i);
  }
  return (
    <div className="h-[120vh] bg-orange-400">
      <div className="flex md:flex-row flex-col text-white h-screen">
        <div className="md:w-20 w-full flex md:flex-col flex-row justify-center items-center fixed md:mt-32 bg-orange-700/90 md:bg-orange-700  md:rounded-2xl md:py-3 md:ml-5">
          <div
            className="w-10 h-10 flex justify-center items-center font-mono bg-orange-600 hover:bg-orange-300 hover:scale-150  hover:duration-150 m-2 mt- text-center rounded-full text-[12px] shadow-md shadow-black border border-white cursor-pointer"
            onClick={() => {
              router.push(`/laboral`);
            }}
          >
            <BsArrowLeftShort className="text-[22px]" />
          </div>
          <div
            className="w-10 h-10 flex justify-center items-center font-mono bg-orange-600 hover:bg-orange-300 hover:scale-150  hover:duration-150 m-2 mt- text-center rounded-full text-[12px] shadow-md shadow-black border border-white cursor-pointer"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            <HiHome className="text-[22px]" />
          </div>
          {nextFourYears.map((e) => (
            <div
              onClick={() => {
                router.push(`/laboral/emprendedor/${e}`);
              }}
              key={e}
              className="w-10 h-10 flex justify-center items-center font-mono bg-orange-600 hover:bg-orange-300 hover:scale-150  hover:duration-150 m-2 mt- text-center rounded-full text-[12px] shadow-md shadow-black border border-white cursor-pointer"
            >
              {e}
            </div>
          ))}
        </div>

        <div className="w-full h-auto md:h-[110vh] md:flex justify-center bg-orange-400 text-white pb-5 md:pb-8 pt-5 font-mono">
          {!edit ? (
            <Goals
              currentYear={params.id}
              bg={"bg-orange-600 hover:bg-orange-300"}
              setEdit={handleEdit}
              title={"Emprendedor"}
            />
          ) : (
            <Form
              currentYear={params.id}
              bg={"bg-orange-600 hover:bg-orange-300"}
              nombre={`emp${params}`}
              setEdit={handleEdit}
              action={`laborale${params.id}`}
              title={"Emprendedor"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Emprendedor;

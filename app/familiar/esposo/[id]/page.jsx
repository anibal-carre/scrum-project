"use client";

import Form from "@/components/Form";
import Goals from "@/components/Goals";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiHome } from "react-icons/hi";

const Esposo = ({ params }) => {
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
    <div className="h-[120vh] bg-green-400">
      <div className="flex md:flex-row flex-col text-white h-screen">
        <div className="md:w-20 w-full flex md:flex-col flex-row justify-center items-center fixed md:mt-32 bg-green-700/90 md:bg-green-700  md:rounded-2xl md:py-3 md:ml-5 ">
          <div
            className="w-10 h-10 flex justify-center items-center font-mono bg-green-500 hover:bg-green-300 hover:scale-150  hover:duration-150 m-2 mt- text-center rounded-full text-[12px] shadow-md shadow-black border border-white cursor-pointer"
            onClick={() => {
              router.push(`/familiar`);
            }}
          >
            <BsArrowLeftShort className="text-[22px]" />
          </div>

          <div
            className="w-10 h-10 flex justify-center items-center font-mono bg-green-500 hover:bg-green-300 hover:scale-150  hover:duration-150 m-2 mt- text-center rounded-full text-[12px] shadow-md shadow-black border border-white cursor-pointer"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            <HiHome className="text-[22px]" />
          </div>
          {nextFourYears.map((e) => (
            <div
              onClick={() => {
                router.push(`/familiar/esposo/${e}`);
              }}
              key={e}
              className="w-10 h-10 flex justify-center items-center font-mono bg-green-500 hover:bg-green-300 hover:scale-150  hover:duration-150 m-2 mt- text-center rounded-full text-[12px] shadow-md shadow-black border border-white cursor-pointer"
            >
              {e}
            </div>
          ))}
        </div>

        <div className="w-full h-auto md:h-[110vh] md:flex justify-center bg-green-400 text-white pb-5 md:pb-8 pt-5 font-mono">
          {!edit ? (
            <Goals
              currentYear={params.id}
              bg={"bg-green-500 hover:bg-green-300"}
              setEdit={handleEdit}
              title={"Esposo"}
            />
          ) : (
            <Form
              currentYear={params.id}
              bg={"bg-green-500 hover:bg-green-300"}
              nombre={`e${params}`}
              setEdit={handleEdit}
              action={`familiarese${params.id}`}
              title={"Esposo"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Esposo;

"use client";

import Form from "@/components/Form";
import Goals from "@/components/Goals";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";

const Fisico = ({ params }) => {
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
    <div className="h-[120vh] bg-red-500">
      <div className="flex md:flex-row flex-col text-white h-screen">
        <div className="md:w-20 w-full flex md:flex-col flex-row justify-center items-center fixed md:mt-32 ">
          <div
            className="w-10 h-10 flex justify-center items-center font-mono bg-red-600 hover:bg-red-300 m-2 mt- text-center rounded-full text-[12px] shadow-md shadow-black border border-white cursor-pointer"
            onClick={() => {
              router.push(`/fisico`);
            }}
          >
            <BsArrowLeftShort className="text-[22px]" />
          </div>
          {nextFourYears.map((e) => (
            <div
              onClick={() => {
                router.push(`/fisico/fisico/${e}`);
              }}
              key={e}
              className="w-10 h-10 flex justify-center items-center font-mono bg-red-600 hover:bg-red-300 m-2 mt- text-center rounded-full text-[12px] shadow-md shadow-black border border-white cursor-pointer"
            >
              {e}
            </div>
          ))}
        </div>

        <div className="w-full h-auto md:h-[110vh] md:flex justify-center bg-red-500 text-white pb-5 md:pb-8 pt-5 font-mono">
          {!edit ? (
            <Goals
              currentYear={params.id}
              bg={"bg-red-600 hover:bg-red-300"}
              setEdit={handleEdit}
              title={"Físico"}
            />
          ) : (
            <Form
              currentYear={params.id}
              bg={"bg-red-600 hover:bg-red-300"}
              nombre={`fi${params}`}
              setEdit={handleEdit}
              action={`fisicofi${params.id}`}
              title={"Físico"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Fisico;

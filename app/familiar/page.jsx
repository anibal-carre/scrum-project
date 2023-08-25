"use client";
import NavSection from "@/components/NavSection";
import { useRouter } from "next/navigation";

const FamiliarPage = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-green-400 gap-10">
      <NavSection
        title={"Metas Familiares"}
        img={"familiar.png"}
        bg={"bg-green-500"}
        bg2={"bg-green-300"}
      />
      <div className="w-[90%] h-[500px] md:w-[600px] md:h-[500px] flex justify-center gap-5">
        <button
          onClick={() => {
            router.push("/familiar/esposo");
          }}
          className="w-[40%] h-14 bg-green-500 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-green-300 shadow shadow-black rounded-md"
        >
          Esposo
        </button>
        <button
          onClick={() => {
            router.push("/familiar/padre");
          }}
          className="w-[40%] h-14 bg-green-500 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-green-300 shadow shadow-black rounded-md"
        >
          Padre
        </button>

        <button
          onClick={() => {
            router.push("/familiar/hijo");
          }}
          className="w-[40%] h-14 bg-green-500 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-green-300 shadow shadow-black rounded-md"
        >
          Hijo
        </button>
      </div>
    </div>
  );
};

export default FamiliarPage;

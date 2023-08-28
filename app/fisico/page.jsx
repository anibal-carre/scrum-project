"use client";
import NavSection from "@/components/NavSection";
import { useRouter } from "next/navigation";
const FisicoPage = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-red-500 gap-10">
      <NavSection
        title={"Metas Fisicas"}
        img={"fisico.png"}
        bg={"bg-red-600"}
        bg2={"bg-red-400"}
      />
      <div className="w-[90%] h-[500px] md:w-[600px] md:h-[500px] flex justify-center gap-5">
        <button
          onClick={() => {
            router.push(`/fisico/fisico/${currentYear}`);
          }}
          className="w-[40%] h-14 bg-red-600 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-red-400 shadow shadow-black rounded-md"
        >
          Físico
        </button>
        <button
          onClick={() => {
            router.push(`/fisico/hobbies/${currentYear}`);
          }}
          className="w-[40%] h-14 bg-red-600 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-red-400 shadow shadow-black rounded-md"
        >
          Hobbies
        </button>
      </div>
    </div>
  );
};

export default FisicoPage;

"use client";
import NavSection from "@/components/NavSection";
import { useRouter } from "next/navigation";
const IntelectualPage = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-blue-500 gap-10">
      <NavSection
        title={"Metas Intelectuales"}
        img={"intelectual.png"}
        bg={"bg-blue-600"}
        bg2={"bg-blue-400"}
      />
      <div className="w-[90%] h-[500px] md:w-[600px] md:h-[500px] flex justify-center gap-5">
        <button
          onClick={() => {
            router.push(`/intelectual/formal/${currentYear}`);
          }}
          className="w-[40%] h-14 bg-blue-600 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-blue-400 shadow shadow-black rounded-md"
        >
          Educación Formal
        </button>
        <button
          onClick={() => {
            router.push(`/intelectual/educacion/${currentYear}`);
          }}
          className="w-[40%] h-14 bg-blue-600 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-blue-400 shadow shadow-black rounded-md"
        >
          Auto Educación
        </button>
      </div>
    </div>
  );
};

export default IntelectualPage;

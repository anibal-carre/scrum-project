"use client";
import NavSection from "@/components/NavSection";
import { useRouter } from "next/navigation";
const LaboralPage = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-orange-400 gap-10">
      <NavSection
        title={"Metas Laborales"}
        img={"laboral.png"}
        bg={"bg-orange-500"}
        bg2={"bg-orange-300"}
      />
      <div className="w-[90%] h-[500px] md:w-[600px] md:h-[500px] flex justify-center gap-5">
        <button
          onClick={() => {
            router.push("/laboral/empleado");
          }}
          className="w-[40%] h-14 bg-orange-500 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-orange-300 shadow shadow-black rounded-md"
        >
          Empleado
        </button>
        <button
          onClick={() => {
            router.push("/laboral/emprendedor");
          }}
          className="w-[40%] h-14 bg-orange-500 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-orange-300 shadow shadow-black rounded-md"
        >
          Emprendedor
        </button>
      </div>
    </div>
  );
};

export default LaboralPage;

"use client";
import NavSection from "@/components/NavSection";
import { useRouter } from "next/navigation";

const EspiritualPage = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-purple-500 gap-10">
      <NavSection
        title={"Metas Espirituales"}
        img={"jesus-icon.png"}
        bg={"bg-purple-600"}
        bg2={"bg-purple-300"}
      />
      <div className="w-[90%] h-[500px] md:w-[600px] md:h-[500px] flex justify-center gap-5">
        <button
          onClick={() => {
            router.push(`/espiritual/conversion/${currentYear}`);
          }}
          className="w-[40%] h-14 bg-purple-600 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-purple-300 shadow shadow-black rounded-md"
        >
          Conversión
        </button>
        <button
          onClick={() => {
            router.push(`/espiritual/discipulo/${currentYear}`);
          }}
          className="w-[40%] h-14 bg-purple-600 text-white font-semibold font-mono border hover:scale-105 hover:transition-all hover:bg-purple-300 shadow shadow-black rounded-md"
        >
          Ser Discipulo
        </button>
      </div>
    </div>
  );
};

export default EspiritualPage;

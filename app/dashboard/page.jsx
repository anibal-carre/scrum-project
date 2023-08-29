"use client";
import BigCard from "@/components/BigCard";
import Card from "@/components/Card";
import GoalCard from "@/components/GoalCard";

export default function Home() {
  return (
    <div className="w-screen h-auto md:h-screen flex flex-col justify-center items-center bg-blue-900 md:bg-white md:gap-5">
      <header className="w-[90%] md:h-20 flex flex-col md:flex-row justify-center md:justify-end md:mb-10">
        <div className="w-full  h-auto flex justify-center md:justify-start md:h-36">
          <img
            src="funval-logo3.jpg"
            alt="funval"
            className="mt-6 rounded-xl "
          />
        </div>
      </header>
      <div className="w-[90%] h-auto md:h-[680px] flex flex-col md:flex-row bg-blue-900 md:bg-blue-950 rounded-xl md:shadow-md md:shadow-black md:mt-5">
        <div className="w-full h-[82vh] md:h-full md:w-[30%] flex justify-center items-center md:p-5 ">
          <Card />
        </div>
        <div className="w-full h-auto md:w-[70%] md:h-full flex flex-col md:flex-row md:flex-wrap gap-5">
          <div className="w-full flex flex-col justify-center md:items-end items-center gap-5 md:flex-row">
            <GoalCard
              title={"Espiritual"}
              bg={"bg-purple-500"}
              link={"/espiritual"}
              img={"jesus-icon.png"}
            />
            <GoalCard
              title={"Familiar"}
              bg={"bg-green-400"}
              link={"/familiar"}
              img={"familiar.png"}
            />
            <GoalCard
              title={"Intelectual"}
              bg={"bg-blue-500"}
              link={"/intelectual"}
              img={"intelectual.png"}
            />
          </div>
          <div className="w-full flex flex-col justify-center gap-5 md:flex-row mb-5 md:mb-0">
            <GoalCard
              title={"Laboral"}
              bg={"bg-orange-400"}
              link={"/laboral"}
              img={"laboral.png"}
            />
            <GoalCard
              title={"Físico"}
              bg={"bg-red-500"}
              link={"/fisico"}
              img={"fisico.png"}
            />

            <GoalCard
              title={""}
              bg={"bg-blue-900"}
              link={"#"}
              img={"brujula2.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

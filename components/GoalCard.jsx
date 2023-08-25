import { useRouter } from "next/navigation";
function GoalCard({ bg, link, title, img }) {
  const router = useRouter();
  return (
    <div
      className="w-full h-64 md:w-[30%] rounded-xl flex items-end bg-white shadow-md shadow-black hover:-translate-y-3 hover:duration-300 cursor-pointer"
      onClick={() => {
        router.push(link);
      }}
    >
      <div
        className={`w-full h-[85%] flex flex-col items-center  rounded-xl ${bg} border border-black`}
      >
        <div className="mt-3 mb-5 ">
          <span className="text-lg font-semibold font-mono">{title}</span>
        </div>

        <div>
          <div>
            <img src={img} alt="" className="w-32 h-32 drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalCard;

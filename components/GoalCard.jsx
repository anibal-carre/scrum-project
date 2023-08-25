import Link from "next/link";

function GoalCard({ bg, link, title, img }) {
  return (
    <div className="w-full h-64 md:w-[30%] rounded-xl flex items-end bg-white shadow-md shadow-black hover:-translate-y-3 hover:duration-300">
      <div
        className={`w-full h-[85%] flex flex-col items-center  rounded-xl ${bg} border border-black`}
      >
        <Link href={link} className="mt-3 mb-5 ">
          <span className="text-lg font-semibold font-mono">{title}</span>
        </Link>

        <div>
          <Link href={link}>
            <img src={img} alt="" className="w-32 h-32 drop-shadow-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GoalCard;

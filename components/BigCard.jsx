const BigCard = () => {
  return (
    <div className="w-full h-[600px] rounded-xl flex items-end bg-white shadow-md shadow-black ">
      <div className="w-full h-[90%] flex flex-col items-center  rounded-xl border border-black bg-blue-950">
        <span className="text-white text-lg font-semibold font-mono mb-24 mt-3">
          Usuario
        </span>

        <div>
          <img
            src="jesus-icon.png"
            alt="icon"
            className=" w-40 h-40 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BigCard;

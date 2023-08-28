import { HiOutlinePencil } from "react-icons/hi";
const Goals = ({ currentYear, bg, setEdit, title }) => {
  return (
    <div className="w-full h-auto md:w-[80%] 2xl:w-[60%] flex flex-col items-center gap-3 md:gap-8">
      <h2 className="font-bold text-lg font-mono mt-12">
        Metas {title} {currentYear}{" "}
      </h2>
      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-bold text-base md:text-lg mb-2">
          ¿Qué haré?
        </span>
        <span className="w-full h-auto  text-zinc-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, libero
          architecto? Expedita provident, dicta ea possimus fuga ullam labore
          temporibus! Odio hic dolores asperiores maxime, dignissimos cumque
          earum nulla quibusdam?
        </span>
      </div>
      <div className="w-[80%] h-auto  flex flex-col items-center">
        <span className="self-start font-bold text-base md:text-lg mb-2">
          ¿Por qué lo hago?
        </span>
        <span className="w-full h-auto text-zinc-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          explicabo nulla! Pariatur aliquid quo, ea fuga quae quas adipisci
          deserunt consectetur deleniti magni nobis natus alias voluptatem iusto
          quis cumque.
        </span>
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2 text-base md:text-lg">
          ¿Cómo lo haré?
        </span>
        <span className="w-full h-auto text-zinc-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
          delectus?
        </span>
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2 text-base md:text-lg">
          ¿Cuándo lo haré?
        </span>
        <span className="w-full h-auto text-zinc-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
          delectus?
        </span>
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2 text-base md:text-lg">
          ¿Dónde lo haré?
        </span>
        <span className="w-full h-auto text-zinc-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
          delectus?
        </span>
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2 text-base md:text-lg">
          ¿Con quién lo haré?
        </span>
        <span className="w-full h-auto text-zinc-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
          delectus?
        </span>
      </div>
      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2 text-base md:text-lg">
          ¿Cuánto me costará?
        </span>
        <span className="w-full h-auto text-zinc-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. similique
          delectus?
        </span>
      </div>

      <div className="w-[80%] flex justify-between items-center mt-3">
        <button
          onClick={setEdit}
          className={`flex items-center gap-2 ${bg} rounded-lg text-white p-3 px-5 md:p-4 md:px-7 border border-white shadow shadow-black`}
        >
          Editar <HiOutlinePencil />
        </button>
      </div>
    </div>
  );
};

export default Goals;

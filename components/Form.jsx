import { LiaSaveSolid } from "react-icons/lia";
const Form = ({ currentYear, bg, nombre, setEdit, action, title }) => {
  return (
    <form
      method="post"
      action={action}
      className="w-full h-auto md:h-screen md:w-[80%] 2xl:w-[60%] flex flex-col items-center gap-3 md:gap-8"
    >
      <h2 className="font-bold text-lg font-mono mt-12">
        Metas {title} {currentYear}{" "}
      </h2>
      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="font-bold text-base md:text-lg mb-2 self-start">
          ¿Qué haré?
        </span>
        <div className="w-full h-auto flex justify-center text-zinc-100">
          <input
            placeholder="¿Qué haré?"
            name={`quehare${nombre}`}
            type="text"
            className="w-full h-10 rounded-md border border-black text-black px-3"
          />
        </div>
      </div>
      <div className="w-[80%] h-auto  flex flex-col items-center">
        <span className="self-start font-bold text-base md:text-lg mb-2">
          ¿Por qué lo hago?
        </span>
        <div className="w-full h-auto text-zinc-100">
          <input
            placeholder="¿Por qué lo hago?"
            name={`porque${nombre}`}
            type="text"
            className="w-full h-10 rounded-md border border-black text-black px-3"
          />
        </div>
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2 text-base md:text-lg">
          ¿Cómo lo haré?
        </span>
        <div className="w-full h-auto text-zinc-100">
          <input
            placeholder="¿Cómo lo haré?"
            name={`como${nombre}`}
            type="text"
            className="w-full h-10 rounded-md border border-black text-black px-3"
          />
        </div>
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2 text-base md:text-lg">
          ¿Cuándo lo haré?
        </span>
        <div className="w-full h-auto text-zinc-100">
          <input
            placeholder="¿Cuándo lo haré?"
            name={`cuando${nombre}`}
            type="text"
            className="w-full h-10 rounded-md border border-black text-black px-3"
          />
        </div>
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2 text-base md:text-lg">
          ¿Dónde lo haré?
        </span>
        <div className="w-full h-auto text-zinc-100">
          <input
            placeholder="¿Dónde lo haré?"
            name={`donde${nombre}`}
            type="text"
            className="w-full h-10 rounded-md border border-black text-black px-3"
          />
        </div>
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2 text-base md:text-lg">
          ¿Con quién lo haré?
        </span>
        <div className="w-full h-auto text-zinc-100">
          <input
            placeholder="¿Con quién lo haré?"
            name={`quien${nombre}`}
            type="text"
            className="w-full h-10 rounded-md border border-black text-black px-3"
          />
        </div>
      </div>
      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2 text-base md:text-lg">
          ¿Cuánto me costará?
        </span>
        <div className="w-full h-auto text-zinc-100">
          <input
            placeholder="¿Cuánto me costará?"
            name={`cuanto${nombre}`}
            type="text"
            className="w-full h-10 rounded-md border border-black text-black px-3"
          />
        </div>
      </div>

      <div className="w-[80%] flex justify-between items-center mt-3">
        <button
          onClick={setEdit}
          className={`flex items-center gap-2 ${bg} rounded-lg text-white p-3 px-5 md:p-4 md:px-7 border border-white shadow shadow-black`}
        >
          Guardar <LiaSaveSolid className="text-[20px]" />
        </button>
      </div>
    </form>
  );
};

export default Form;

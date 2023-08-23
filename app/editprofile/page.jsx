"use client";
import { useRouter } from "next/navigation";
const EditProfile = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-full h-auto md:h-auto md:flex justify-center bg-blue-950 text-white md:pb-8 pt-5">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[80%] 2xl:w-[60%] flex flex-col items-center gap-3 md:gap-8"
      >
        <div className="w-[80%] h-auto flex items-center">
          <div className="w-full h-auto flex flex-col items-center">
            <span className="self-start font-semibold mb-2">Foto</span>
            <input
              className="w-[155px] md:w-[155px] h-12 md:h-14  border border-blue-950 px-2 self-start "
              name="edit-foto"
              type="file"
            />
          </div>
          <div className="w-full h-auto flex justify-end items-center">
            <img
              src="user-image.jpg"
              alt="user-img"
              className=" h-16 md:h-20 rounded-sm"
            />
          </div>
        </div>
        <div className="w-[90%] md:w-[80%] h-[1px] bg-slate-500"></div>

        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-semibold mb-2">País</span>
          <select
            className="w-full h-12 md:h-14 rounded-md border text-blue-950 border-blue-950 px-2 "
            name="edit-country"
            type="country"
          >
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Colombia">Colombia</option>
            <option value="Chile">Chile</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Ecuador">Ecuador</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Honduras">Honduras</option>
            <option value="México">México</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Panamá">Panamá</option>
            <option value="Perú">Perú</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="República Dominicana">República Dominicana</option>
            <option value="Venezuela">Venezuela</option>
          </select>
        </div>
        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-semibold mb-2">Nombre Completo</span>
          <input
            className="w-full h-12 md:h-14 rounded-md border text-blue-950 border-blue-950 px-2"
            name="edit-nombre"
            type="text"
            placeholder="Ingrese su nombre"
          />
        </div>

        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-semibold mb-2">Mi Visión</span>
          <textarea
            className="w-full h-24 rounded-md border text-blue-950 border-blue-950 px-2 pt-2"
            name="edit-vision"
            placeholder="Una visión debe ser clara, simple y fácil de recordar. Es el resultado deseado que quieres llegar a ser en tu familia o en tu organización. Te da dirección, propósito e inspiración. "
          />
        </div>

        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-semibold mb-2">Carrera</span>
          <input
            className="w-full h-12 md:h-14 rounded-md border text-blue-950 border-blue-950 px-2"
            name="edit-carrera"
            type="text"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="w-[90%] md:w-[80%] h-[1px] bg-slate-500"></div>
        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-semibold mb-2">Email</span>
          <input
            className="w-full h-12 md:h-14 rounded-md border text-blue-950 border-blue-950 px-2"
            name="edit-email"
            type="email"
          />
        </div>

        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-semibold mb-2">Password</span>
          <input
            className="w-full h-12 md:h-14 rounded-md border text-blue-950 border-blue-950 px-2"
            name="edit-password"
            type="password"
          />
        </div>

        <div className="w-[80%] flex justify-between items-center mt-3">
          <button
            onClick={() => {
              router.push("/profile");
            }}
            className="bg-blue-900 rounded-lg text-white p-3 px-5 mb-16 md:p-4 md:px-7"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

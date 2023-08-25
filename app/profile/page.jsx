"use client";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import { HiOutlinePencil } from "react-icons/hi";

const Profile = () => {
  const router = useRouter();
  return (
    <div className="w-full h-auto md:h-screen md:flex justify-center bg-blue-950 text-white pb-5 md:pb-8 pt-5">
      <div className="w-full md:w-[80%] 2xl:w-[60%] flex flex-col items-center gap-3 md:gap-5">
        <div className="w-[80%] h-auto flex items-center">
          <div className="w-full h-auto flex justify-between items-center">
            <img
              src="user-image.jpg"
              alt="user-img"
              className=" h-16 md:h-20 rounded-sm"
            />
            <button
              onClick={() => {
                router.push("/");
              }}
              className="bg-blue-900 rounded-lg flex gap-2 items-center text-white p-3 px-5 md:p-4 md:px-7"
            >
              Salir
              <SlLogout />
            </button>
          </div>
        </div>
        <div className="w-[90%] md:w-[80%] h-[1px] bg-slate-500"></div>

        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-bold text-lg mb-2">País</span>
          <span className="w-full h-12 md:h-14 text-zinc-300">Brasil</span>
        </div>
        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-bold text-lg mb-2">
            Nombre Completo
          </span>
          <span className="w-full h-12 md:h-14 text-zinc-300">
            João da Silva Nacimento
          </span>
        </div>

        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-semibold mb-2">Mi Visión</span>
          <span className="w-full h-auto text-zinc-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
            perferendis aperiam quisquam consequuntur expedita ut voluptatem
            possimus placeat saepe ex illo debitis quo laborum velit, nobis
            impedit. Iure dicta esse similique. Nisi mollitia omnis, eveniet
            explicabo minima quis delectus doloribus dignissimos? Maiores
          </span>
        </div>

        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-semibold mb-2">Carrera</span>
          <span className="w-full h-12 md:h-14 text-zinc-300">
            Programación
          </span>
        </div>
        <div className="w-[90%] md:w-[80%] h-[1px] bg-slate-500"></div>

        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-semibold mb-2">Email</span>
          <span className="w-full h-12 md:h-14 text-zinc-300">
            joao@gmail.com
          </span>
        </div>

        <div className="w-[80%] h-auto flex flex-col items-center">
          <span className="self-start font-semibold mb-2">Password</span>
          <span className="w-full h-12 md:h-14 text-zinc-300">**********</span>
        </div>

        <div className="w-[80%] flex justify-between items-center mt-3">
          <button
            onClick={() => {
              router.push("/editprofile");
            }}
            className="flex items-center gap-2 bg-blue-900 rounded-lg text-white p-3 px-5 md:p-4 md:px-7"
          >
            Editar <HiOutlinePencil />
          </button>

          <button
            onClick={() => {
              router.push("/dashboard");
            }}
            className="bg-blue-900 rounded-lg flex gap-2 items-center text-white p-3 px-5 md:p-4 md:px-7"
          >
            Ir al Dashboard <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

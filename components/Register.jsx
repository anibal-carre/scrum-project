import { useRouter } from "next/navigation";
const Register = ({ handleRegister }) => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center mt-2 md:mt-14 gap-3 md:gap-8"
    >
      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2">Email</span>
        <input
          className="w-full h-12 md:h-14 rounded-md border border-blue-950 px-2"
          name="register-email"
          type="email"
          required
        />
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2">Password</span>
        <input
          className="w-full h-12 md:h-14 rounded-md border border-blue-950 px-2"
          name="register-password"
          type="password"
          required
        />
      </div>

      <div className="w-[80%] flex justify-between items-center mt-3">
        <p className="text-sm md:text-lg w-[160px] md:w-[200px] xl:w-[250px]">
          ¿Ya tienes una cuenta?{" "}
          <span
            onClick={handleRegister}
            className="text-blue-900 underline cursor-pointer"
          >
            Login
          </span>
        </p>

        <button
          onClick={() => {
            router.push("/editprofile");
          }}
          className="bg-blue-900 rounded-lg text-white p-3 px-5 md:p-4 md:px-7"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;

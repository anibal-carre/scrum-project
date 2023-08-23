import { useRouter } from "next/navigation";
const Login = ({ handleRegister }) => {
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
          name="login-email"
          type="email"
          required
        />
      </div>

      <div className="w-[80%] h-auto flex flex-col items-center">
        <span className="self-start font-semibold mb-2">Password</span>
        <input
          className="w-full h-12 md:h-14 rounded-md border border-blue-950 px-2"
          name="login-password"
          type="password"
          required
        />
      </div>

      <div className="w-[80%] flex justify-between items-center mt-3">
        <p className="text-sm md:text-lg">
          ¿No tienes una cuenta?{" "}
          <span
            onClick={handleRegister}
            className="text-blue-900 underline cursor-pointer"
          >
            Regístrate
          </span>
        </p>

        <button
          onClick={() => {
            router.push("/profile");
          }}
          className="bg-blue-900 rounded-lg text-white p-3 px-5 md:p-4 md:px-7"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;

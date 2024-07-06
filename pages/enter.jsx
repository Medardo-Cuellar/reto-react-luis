import Image from "next/image";
import devToLogo from "../assets/devto.svg";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { login } from "@/api/api";

export default function Enter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  async function onSubmit(data) {
    try {
      const token = await login(data.email, data.password);
      console.log(token);
      if (token) {
        window.localStorage.setItem("token", token);
        toast.success("Bienvenido");
        //redirection goes here
      } else {
        toast.error("Usuario o contraseña incorrectos");
        setError("root.credentials", {
          type: "manual",
          message: "Usuario o contraseña incorrectos",
        });
      }
    } catch (error) {
      toast.error("Usuario o contraseña incorrectos");
      console.error("[login error]", error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={devToLogo}
          alt="Dev.to Logo"
          width={100}
          height={100}
          className="place-self-center"
        />
        <h1 className="text-3xl font-bold">Join the DEV Community</h1>
      </div>
      <div className="flex flex-col my-4 gap-4">
        <button className="bg-blue-500 text-white p-2 rounded-lg">
          Sign up with GitHub
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-lg">
          Sign up with Twitter
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-lg">
          Sign up with Email
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="email"
          {...register("email", {
            required: { value: true, message: "nombre de usuario requerido" },
          })}
          className="w-96 h-8 rounded-md border-2 border-gray-400 p-1"
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: { value: true, message: "password requerido" },
          })}
          className="w-96 h-8 rounded-md border-2 border-gray-400 p-1"
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg">
          Sign in
        </button>
      </form>
    </main>
  );
}

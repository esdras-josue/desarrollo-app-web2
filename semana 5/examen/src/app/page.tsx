"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useContextLogin } from "./provider/ProviderLogin";

export default function Home() {
  const [user, setUser] = useState("");
  const [password, setPaswword] = useState("");

  const { setNombreUsuario } = useContextLogin();

  const router = useRouter();

  function iniciarSesion() {
    if (user === "" || password === " "){
      return alert("Ingrese credenciales");
    } 

    if (user === "admin" && password === "admin123") {
      setNombreUsuario(user);
      router.push("/general/home");
    }
    else{
      alert("Credenciales incorrectas");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-black">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-900">
        <h1 className="mb-6 text-center text-2xl font-bold text-zinc-800 dark:text-white">
            Login
        </h1>
        <form action="" className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="rounded-lg border border-zinc-300 px-4 py-2 outline-none focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPaswword(e.target.value)}
            className="rounded-lg border border-zinc-300 px-4 py-2 outline-none focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />{" "}
          <br />
          {/*<Link href='/home' className="btn btn-success">Ingresar</Link>*/}
          <button
            onClick={iniciarSesion}
            type="button"
            className="mt-2 rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
          
            {" "}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

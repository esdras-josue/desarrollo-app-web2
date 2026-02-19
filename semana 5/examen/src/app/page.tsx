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
    if (user.trim() === "" || password.trim() === "") {
      return alert("Ingrese credenciales");
    }

    if (user === "admin" && password === "admin123") {
      setNombreUsuario(user);
      router.push("/general/home");
    }
    else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-4 dark:bg-zinc-950">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="mb-6 text-center text-2xl font-bold text-zinc-800 dark:text-white">
          Login
        </h1>
        <form action="" className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-blue-900"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPaswword(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-blue-900"
          />
          {/*<Link href='/home' className="btn btn-success">Ingresar</Link>*/}
          <button
            onClick={iniciarSesion}
            type="button"
            className="mt-2 rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 dark:focus:ring-blue-900"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

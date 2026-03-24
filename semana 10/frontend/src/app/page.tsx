"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center px-4 py-10">
      <main className="w-full max-w-3xl rounded-3xl border border-sky-100 bg-white/90 p-10 shadow-xl shadow-sky-900/10 backdrop-blur">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Panel de Gráficos
          </h1>

          <p className="mt-3 text-base text-slate-600">
            Selecciona un reporte para visualizar estadísticas del sistema.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          <button
            type="button"
            onClick={() => router.push("/sum-salary-by-depto")}
            className="flex items-center justify-between rounded-xl bg-blue-500 px-6 py-4 text-left text-base font-semibold text-white shadow-md shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg"
          >
            <span>Gráfico suma de salario por departamento</span>

            <span className="text-xl">📊</span>
          </button>
        </div>

        <div className="mt-10 grid gap-5">
        </div>
        <div className="mt-10 grid gap-5">
        </div>
      </main>
    </div>
  );
}
'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <main className="w-full max-w-3xl rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-xl shadow-sky-900/10 backdrop-blur md:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Panel de Gráficos</h1>
        <p className="mt-2 text-sm text-slate-600 md:text-base">
          Selecciona un reporte para visualizar los datos de productos.
        </p>

        <div className="mt-8 grid gap-4">
          <button
            type="button"
            onClick={() => router.push('/general/count-producto')}
            className="rounded-xl bg-sky-600 px-5 py-3 text-left text-base font-semibold text-white shadow-md shadow-sky-600/30 transition hover:-translate-y-0.5 hover:bg-sky-700"
          >
            Gráfico de total de productos
          </button>

          <button
            type="button"
            onClick={() => router.push('/general/avg-product-value')}
            className="rounded-xl bg-cyan-600 px-5 py-3 text-left text-base font-semibold text-white shadow-md shadow-cyan-600/30 transition hover:-translate-y-0.5 hover:bg-cyan-700"
          >
            Gráfico de promedios por moneda
          </button>

          <button
            type="button"
            onClick={() => router.push('/general/min-max-by-type')}
            className="rounded-xl bg-indigo-600 px-5 py-3 text-left text-base font-semibold text-white shadow-md shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Gráfico de valores mínimos y máximos
          </button>
        </div>
      </main>
    </div>
  );
}

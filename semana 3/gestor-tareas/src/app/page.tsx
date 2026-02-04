import TablaTarea from "@/components/TablaTarea";
import TareaFormulario from "@/components/TareaFormulario";
import TareaProvider from "./provider/TareaProvider";

export default function Home() {
  return (
    <TareaProvider>
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold mb-4">Agregar tarea</h2>
            <TareaFormulario />
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold mb-4">Tareas</h2>
            <div className="overflow-x-auto">
              <TablaTarea />
            </div>
          </section>
        </div>
      </main>
    </TareaProvider>
  );
}

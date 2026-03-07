import ProcessCard from "@/shared/ui/cards/ProcessCard";

export default function SystemsSection() {
  return (
    <section id="sistemas" className="py-24 md:py-28 px-4 md:px-8 lg:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-center">
          Implementación de Sistemas Contables
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <ProcessCard
            number="1"
            title="Software Contable"
            description="Acompañamiento en la selección y configuración del software contable adecuado a las necesidades de su empresa."
          />

          <ProcessCard
            number="2"
            title="Implementación"
            description="Configuramos sistemas contables de acuerdo a sus necesidades."
          />

          <ProcessCard
            number="3"
            title="Asistencia Técnica"
            description="Asistencia continua para asegurar un correcto funcionamiento del sistema."
          />
        </div>
      </div>
    </section>
  );
}

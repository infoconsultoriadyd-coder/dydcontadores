import ProcessCard from "../ui/ProcessCard";

export default function ValuesSection() {
  return (
    <section id="valores" className="py-24 md:py-28 px-4 md:px-8 lg:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-center">
          Ética y Compromiso con la Excelencia
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <ProcessCard
            number="1"
            title="Compromiso"
            description="Estamos comprometidos con su éxito."
          />

          <ProcessCard
            number="2"
            title="Atención personalizada"
            description="Entendemos las necesidades únicas de cada cliente."
          />

          <ProcessCard
            number="3"
            title="Soluciones integrales"
            description="Abordamos sus necesidades con un enfoque holístico."
          />
        </div>
      </div>
    </section>
  );
}

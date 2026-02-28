import ProcessCard from "../ui/ProcessCard";

export default function FormalizationSection() {
  return (
    <section id="formalizacion" className="py-24 md:py-28 px-4 md:px-8 lg:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-center">
        Formalización de Unidades Productivas
      </h2>
      <p className="text-lg text-slate-600 text-center mb-14 max-w-3xl mx-auto leading-relaxed">
        Te acompañamos paso a paso para estructurar tu empresa con soporte técnico y legal.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <ProcessCard
          number="01"
          title="Formalización de Empresas"
          description="Asesoramiento para la correcta constitución de su empresa."
        />

        <ProcessCard
          number="02"
          title="Registros Contables"
          description="Implementación de la contabilidad y control de las operaciones desde el inicio."
        />

        <ProcessCard
          number="03"
          title="Cumplimiento Legal"
          description="Acompañamiento en el cumplimiento de las obligaciones fiscales y legales."
        />
      </div>
      </div>
    </section>
  );
}
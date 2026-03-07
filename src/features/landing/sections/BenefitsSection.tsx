import { CheckCircle } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    "Reducción de costos operativos",
    "Cumplimiento normativo garantizado",
    "Reportes financieros detallados",
    "Atención personalizada y profesional",
    "Tecnología moderna en procesos",
    "Disponibilidad 24/7 de información"
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          Beneficios de Trabajar con Nosotros
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Confía en profesionales con años de experiencia en el sector contable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              <span className="text-lg text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

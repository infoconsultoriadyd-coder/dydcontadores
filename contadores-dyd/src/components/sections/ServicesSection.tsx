import { Calculator, TrendingUp, PieChart, FileSpreadsheet, Landmark } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() { 
  return (
    <section id="servicios" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-5">
          Contabilidad General, Financiera y de Costos
        </h2>
        <p className="text-lg text-slate-600 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
          Nuestro equipo de profesionales altamente calificado está dedicado a brindar servicios precisos, confiables y oportunos.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Calculator className="w-10 h-10" />}
          title="Contabilidad General"
          description="Mantener registros actualizados de las operaciones financieras de su negocio."
        />
        <ServiceCard
          icon={<TrendingUp className="w-10 h-10" />}
          title="Contabilidad Financiera"
          description="Preparar estados financieros para la toma de decisiones y la presentación a terceros."
        />
        <ServiceCard
          icon={<PieChart className="w-10 h-10" />}
          title="Contabilidad de Costos"
          description="Controlar y analizar los costos de producción para mejorar la eficiencia y la rentabilidad mediante análisis detallados y estrategias de reducción."
        />
      </div>

      <div className="mt-14">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-5">
          Presupuestos y Asesoría Tributaria
        </h3>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <ServiceCard
            icon={<FileSpreadsheet className="w-10 h-10" />}
            title="Elaboración de Presupuestos"
            description="Planificar sus finanzas con precisión y seguridad, incluyendo previsiones de ingresos y gastos."
          />
          <ServiceCard
            icon={<Landmark className="w-10 h-10" />}
            title="Gestión Tributaria"
            description="Optimizar su carga fiscal, cumpliendo con las normas tributarias vigentes y evitar sanciones."
          />
        </div>
      </div>

      <div className="mt-14 bg-gradient-to-br from-slate-100 to-blue-50/50 border border-slate-200 rounded-xl p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              Contabilidad en Propiedad Horizontal
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              En D&D, entendemos los desafíos únicos que enfrentan las propiedades horizontales en materia contable y financiera. Por eso, ofrecemos servicios especializados y personalizados para garantizar la transparencia, eficiencia y tranquilidad de su comunidad, teniendo en cuenta los lineamientos contemplados en la ley 675 / 2001.
            </p>
          </div>

          <div className="bg-white/70 rounded-xl p-4 border border-slate-200 shadow-sm premium-card premium-media-wrap">
            <img
              src="/images/propiedad-horizontal.jpg"
              alt="Propiedad horizontal"
              className="aspect-video w-full rounded-lg object-cover premium-media"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}
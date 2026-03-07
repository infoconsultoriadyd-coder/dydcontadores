import { BarChart3, FileText } from "lucide-react";
import ServiceCard from "@/shared/ui/cards/ServiceCard";

export default function AnalysisSection() {
  return (
    <section id="analisis" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-center">
          Análisis de Datos y Reportes
        </h2>
        <p className="text-lg text-slate-600 text-center mb-14 max-w-3xl mx-auto leading-relaxed">
          Obtenga información útil de sus datos financieros para tomar mejores decisiones identificando áreas de mejora y oportunidades de ahorro.
        </p>

      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard
          icon={<BarChart3 className="w-10 h-10" />}
          title="Análisis de Datos"
          description="Obtenga información útil de sus datos financieros para tomar mejores decisiones."
        />

        <ServiceCard
          icon={<FileText className="w-10 h-10" />}
          title="Generación de Informes"
          description="Presentaciones claras y concisas de sus resultados financieros."
        />

        

      </div>
      </div>

     

    </section>
  );
}
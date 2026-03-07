import { Shield, Settings } from "lucide-react";
import ServiceCard from "@/shared/ui/cards/ServiceCard";

export default function AuditSection() {
  return (
    <section id="auditoria" className="py-24 md:py-28 px-4 md:px-8 lg:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-center">
        Auditoría y Control Interno
      </h2>
      <p className="text-lg text-slate-600 text-center mb-14 max-w-3xl mx-auto leading-relaxed">
        Fortalece la transparencia de tu organización con auditorías técnicas y control interno efectivo.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard
          icon={<Shield className="w-10 h-10" />}
          title="Auditoría Financiera"
          description="Evaluación independiente de los estados financieros para verificar la exactitud y la conformidad con las normas contables."
        />

        <ServiceCard
          icon={<Settings className="w-10 h-10" />}
          title="Control Interno"
          description="Asesoría para la implementación de sistemas de control interno que garanticen la seguridad y la eficiencia de sus operaciones."
        />
      </div>
      </div>
    </section>
  );
}

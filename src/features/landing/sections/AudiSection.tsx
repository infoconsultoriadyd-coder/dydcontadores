import { Shield, Settings } from "lucide-react";
import ServiceCard from "@/shared/ui/cards/ServiceCard";

export default function AuditSection() {
  return (
    <section className="py-12 border-t border-slate-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
        Auditoría y Control
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ServiceCard
          icon={<Shield className="w-10 h-10" />}
          title="Auditoría Financiera"
          description="Evaluación independiente..."
        />

        <ServiceCard
          icon={<Settings className="w-10 h-10" />}
          title="Control Interno"
          description="Asesoría en implementación..."
        />
      </div>
    </section>
  );
}
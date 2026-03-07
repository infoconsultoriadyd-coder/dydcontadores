interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <div className="bg-slate-50/90 rounded-xl p-7 shadow-sm border border-slate-200 hover:bg-white hover:border-blue-200 transition-all duration-500 premium-card">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100/80 flex items-center justify-center border border-blue-200">
          <span className="text-blue-700 font-bold text-lg">{number}</span>
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-600 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-slate-50/90 rounded-xl p-7 shadow-sm border border-slate-200 hover:bg-white hover:border-blue-200 transition-all duration-500 group premium-card">
      <div className="text-blue-700 mb-5 group-hover:text-blue-800 transition">
        {icon}
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
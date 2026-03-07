export default function MidCtaSection() {
  return (
    <section className="py-14 md:py-16 px-4 md:px-8 lg:px-12 bg-slate-100 border-t border-slate-200">
      <div className="max-w-4xl mx-auto rounded-xl bg-gradient-to-r from-blue-800 to-blue-700 text-white p-6 md:p-8 shadow-md premium-cta">
        <div className="flex flex-col items-center text-center gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">¿Listo para ordenar tus finanzas?</h3>
            <p className="text-blue-100">Consulta inicial sin costo y atención personalizada para tu negocio.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="tel:3193767702"
              className="bg-white text-blue-800 px-5 py-3 rounded-xl font-semibold text-center hover:bg-slate-100 transition-all duration-300 hover:shadow-lg"
            >
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/573193767702"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 text-white px-5 py-3 rounded-xl font-semibold text-center hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

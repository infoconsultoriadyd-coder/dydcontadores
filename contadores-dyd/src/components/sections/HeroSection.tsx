export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Soluciones Contables Integrales D&D
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-6 leading-relaxed">
            Experiencia y profesionalismo a su servicio
          </p>
          <p className="text-lg text-slate-300 font-medium mb-12 leading-relaxed">
            ¡Lleve sus finanzas al siguiente nivel!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#servicios"
              className="bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30 text-center"
            >
              Ver Servicios
            </a>
            <a
              href="#contacto"
              className="bg-transparent text-white px-8 py-3 rounded-xl font-semibold border border-slate-300/70 hover:bg-white/10 transition-all duration-300 hover:shadow-lg text-center"
            >
              Contáctanos
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bg-white/5 border border-white/20 rounded-xl p-3 backdrop-blur-sm premium-card">
            <img
              src="/images/hero-equipo.png"
              alt="Equipo contable"
              className="aspect-[16/8] w-full rounded-lg object-cover premium-media"
              loading="lazy"
            />
          </div>
          <div className="bg-white/5 border border-white/20 rounded-xl p-3 backdrop-blur-sm premium-card">
            <img
              src="/images/hero-oficina.png"
              alt="Oficina y atención a clientes"
              className="aspect-square w-full rounded-lg object-cover premium-media"
              loading="lazy"
            />
          </div>
          <div className="bg-white/5 border border-white/20 rounded-xl p-3 backdrop-blur-sm premium-card">
            <img
              src="/images/hero-resultados.png"
              alt="Resultados financieros"
              className="aspect-square w-full rounded-lg object-cover premium-media"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

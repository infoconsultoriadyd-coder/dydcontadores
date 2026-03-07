export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-3 text-white">D&D</h3>
            <p className="text-slate-300 leading-relaxed">
              Soluciones contables y financieras para tu empresa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-slate-300 hover:text-blue-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-300 hover:text-blue-300 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-slate-300 hover:text-blue-300 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contacto</h4>
            <p className="text-slate-300">Email: infoconsultoriadyd@gmail.com</p>
            <p className="text-slate-300 mt-2">Teléfono: 319 3767702 - 313 3494543 - 3005468227</p>
            <p className="text-slate-300 mt-2">Dirección: Cra 12 # 3-50 - Interior 26, Oficina, Chía</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/70 pt-8">
          <p className="text-center text-slate-300">
            © {currentYear} D&D Contadores. Todos los derechos reservados.
          </p>
          <p className="text-center text-slate-400 mt-2">
            Página creada por Sinnexys.
          </p>
        </div>
      </div>
    </footer>
  );
}

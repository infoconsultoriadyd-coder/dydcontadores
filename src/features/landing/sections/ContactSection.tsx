import { useState } from "react";

export default function ContactSection() {
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw4NWqTxlcrYeLVF9_eCzuVqv7OnutJ5IcI1K1fvw1BVz7oLgsp6jJE9XhUYrBPi7Mg/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setErrorMessage("");

  
  const snapshot = { ...formData };
  setFormData({ name: "", email: "", phone: "", message: "" });

 
  setSubmitted(true);
  setLoading(false);
  setTimeout(() => setSubmitted(false), 4000);


  try {
    const body = new FormData();
    body.append("name", snapshot.name);
    body.append("email", snapshot.email);
    body.append("phone", snapshot.phone);
    body.append("message", snapshot.message);

    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body,
    });
  } catch {

    console.error("Error al guardar en Sheet — reintentando no implementado");
  }
  };

  return (
    <section id="contacto" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 bg-slate-100 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-5">
          Contacto
        </h2>
        <p className="text-lg text-slate-600 text-center mb-14 max-w-3xl mx-auto leading-relaxed">
          Contáctenos para una Consulta Inicial Sin Costo. Le invitamos a programar una consulta inicial sin costo para discutir sus necesidades y encontrar las soluciones más adecuadas para su empresa o negocio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white rounded-xl border border-slate-200 p-7 md:p-8 shadow-sm premium-card">
            <h3 className="text-3xl font-semibold text-slate-900 mb-8">
              Información de Contacto
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Dirección</h4>
                <p className="text-slate-600 leading-relaxed">
                  Cra 12 # 3-50 - Interior 26<br />
                  Oficina<br />
                  Chía
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Teléfono</h4>
                <p className="text-slate-600">319 3767702 - 313 3494543 - 3005468227</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
                <p className="text-slate-600">infoconsultoriadyd@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl border border-slate-200 p-7 md:p-8 shadow-sm premium-card">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-700"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-700"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-700"
                placeholder="+57 300 000 0000"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-700 resize-none"
                placeholder="Tu mensaje aquí..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-700 font-semibold">{errorMessage}</p>
              </div>
            )}

            {submitted && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <p className="text-emerald-700 font-semibold">
                  ¡Mensaje enviado exitosamente! Nos contactaremos pronto.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

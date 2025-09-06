'use client';

import { useState } from 'react';

export default function MarketplacePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    userType: 'ship',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.company) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/marketplace/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Lead registrado correctamente');
        setFormData({ name: '', email: '', company: '', userType: 'ship', message: '' });
      } else {
        alert('Error al enviar');
      }
    } catch (error) {
      alert('Error al enviar');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                ⚓
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                NautiXchange
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm">Ahora disponible en Panamá</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            El <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Uber</span> para 
            <br />Químicos Marítimos
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Conectamos barcos con proveedores de AUS40, AdBlue y químicos marítimos. 
            <span className="text-blue-400 font-semibold"> Cotización en 15 minutos, pagos escrow, tracking GPS.</span>
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">15min</div>
              <div className="text-sm text-gray-400">Tiempo de cotización</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-gray-400">Puertos conectados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-400">Pagos seguros</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">24/7</div>
              <div className="text-sm text-gray-400">Tracking en vivo</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ¿Por qué <span className="text-blue-400">NautiXchange</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🚢</div>
              <h3 className="text-xl font-bold mb-3">Cotización Instantánea</h3>
              <p className="text-gray-300">4 campos, 15 minutos, múltiples opciones rankeadas</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Pagos Escrow</h3>
              <p className="text-gray-300">Tu dinero protegido hasta confirmar entrega</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3">Tracking GPS</h3>
              <p className="text-gray-300">Seguimiento en tiempo real tipo FlightRadar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Únete al <span className="text-blue-400">Beta</span>
            </h2>
            <p className="text-xl text-gray-300">
              Sé de los primeros en acceder a NautiXchange
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email corporativo"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-400"
                />
              </div>
              
              <input
                type="text"
                name="company"
                placeholder="Nombre de la empresa"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors text-white placeholder-gray-400"
              />

              <select
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors text-white"
              >
                <option value="ship" className="bg-slate-800">Naviera / Barco</option>
                <option value="supplier" className="bg-slate-800">Proveedor de Químicos</option>
                <option value="agent" className="bg-slate-800">Agente Marítimo</option>
                <option value="other" className="bg-slate-800">Otro</option>
              </select>

              <textarea
                name="message"
                placeholder="Cuéntanos sobre tu operación actual..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors resize-none text-white placeholder-gray-400"
              ></textarea>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Acceso Anticipado'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Addurea NautiXchange. Powered by Addurea.
          </p>
        </div>
      </footer>
    </div>
  );
}

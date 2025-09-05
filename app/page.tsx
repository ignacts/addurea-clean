export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          🚀 Bienvenido a Addurea Clean
        </h1>
        
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">
              Gestión Inteligente
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Sistema completo de gestión para tu negocio
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">
              Tecnología Moderna
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Construido con Next.js 14, TypeScript y Tailwind CSS
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">
              Listo para Desarrollo
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Proyecto organizado y optimizado para crecer
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

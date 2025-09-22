export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Conecta Bairro
      </h1>
      <p className="text-center text-lg text-gray-300 mb-8">
        Marketplace local com vitrine de produtos/serviços e funcionalidades comunitárias.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-glass backdrop-blur-xs rounded-lg p-6 shadow-glass">
          <h2 className="text-xl font-semibold mb-4 text-secondary">Vitrine</h2>
          <p className="text-gray-300">Explore produtos e serviços locais</p>
        </div>
        
        <div className="bg-glass backdrop-blur-xs rounded-lg p-6 shadow-glass">
          <h2 className="text-xl font-semibold mb-4 text-accent">Anunciar</h2>
          <p className="text-gray-300">Divulgue seu negócio</p>
        </div>
        
        <div className="bg-glass backdrop-blur-xs rounded-lg p-6 shadow-glass">
          <h2 className="text-xl font-semibold mb-4 text-primary">Preciso de</h2>
          <p className="text-gray-300">Encontre o que você precisa</p>
        </div>
      </div>
    </div>
  )
}

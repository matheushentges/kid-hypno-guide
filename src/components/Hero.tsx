
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-hero-gradient py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop)' }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-brand-blue leading-tight max-w-4xl">
            Domine a Hipnoterapia Infantil e Transforme a Vida de Crianças com Técnicas Inovadoras
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-3xl text-gray-700">
            Aprenda a aplicar métodos modernos e eficazes de hipnoterapia criados especialmente para o universo infantil — e faça a diferença na vida de cada criança que você atender.
          </p>
          
          <a 
            href="#comprar" 
            className="btn-primary group"
            aria-label="Garantir acesso ao curso agora"
          >
            QUERO TRANSFORMAR VIDAS
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto mt-16 px-4 py-8 bg-white rounded-lg shadow-lg border-t-4 border-brand-blue">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-brand-blue">
          Mergulhe em um Novo Mundo de Possibilidades com a Hipnoterapia Infantil
        </h2>
        
        <p className="text-gray-700 mb-4">
          Seja você um terapeuta em busca de abordagens modernas para promover o equilíbrio emocional de crianças, ou um pai, mãe ou cuidador que deseja apoiar o bem-estar dos pequenos, este material foi pensado com carinho para atender exatamente às suas necessidades.
        </p>
        
        <p className="text-gray-700 font-medium">
          A hipnoterapia, quando aplicada com empatia e técnica, revela-se uma poderosa aliada na superação de desafios emocionais e comportamentais na infância.
        </p>
      </div>
    </section>
  );
};

export default Hero;

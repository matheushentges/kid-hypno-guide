import React from 'react';
import { Lock, Zap, CheckCircle } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const CTASection = () => {
  return (
    <section id="comprar" className="section-container">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
        <div className="p-8 md:p-12 bg-gradient-to-r from-brand-blue to-brand-light-blue text-gray-700 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Aprenda Hipnoterapia Infantil e Transforme Vidas
          </h2>
          <p className="text-lg md:text-xl mb-0 max-w-2xl mx-auto opacity-90">
            Acesso imediato ao guia completo com técnicas poderosas para o cuidado infantil
          </p>
        
        </div>

        <div className="p-8 md:p-12">
          <div className="mb-6">
            <CountdownTimer initialMinutes={10} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-200">
            <div>
              <p className="text-gray-500 mb-2 text-lg">Investimento único:</p>
              <div className="flex items-center">
                <span className="text-gray-400 line-through text-xl" style={{ color: '#dc2727' }}>R$197</span>
                <span className="ml-3 text-4xl font-bold text-brand-blue" style={{ color: '#3ab895' }}>R$57</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Pagamento único • Acesso vitalício</p>
            </div>
            
            <div className="mt-6 md:mt-0">
              <div className="flex items-center mb-2">
                <Lock className="h-4 w-4 text-brand-green mr-2" />
                <span className="text-sm text-gray-600">Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 text-brand-green mr-2" />
                <span className="text-sm text-gray-600">Acesso imediato</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4">O que você vai receber:</h3>
            <ul className="space-y-3">
              {[
                "Guia completo de hipnoterapia infantil",
                "Técnicas exclusivas para cada desafio emocional",
                "Scripts prontos para usar nas sessões",
                "Estratégias para engajar crianças no processo",
                "Suporte e-mail por 30 dias"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="ml-2 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <a 
              href="https://google.com" 
              className="bg-[#3AB795] hover:bg-[#319f82] text-white font-bold text-xl px-8 py-5 rounded-3xl shadow-xl w-full md:w-auto text-center transition-all duration-300"

              aria-label="Comprar agora">

              🛒 COMPRAR AGORA
            </a>
             <br />
            <div className="mt-6 p-4 bg-brand-light-green rounded-lg inline-block">
              <div className="flex items-center justify-center">
                <Lock className="h-5 w-5 text-brand-green mr-2" />
               
                <p className="text-gray-700 font-medium">
                   Acesso imediato e vitalício
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Garantia de 7 dias. Se não gostar, devolvemos seu dinheiro.
            </p>
          </div>
        </div>
      </div>     
    </section>   
  );
};
export default CTASection;

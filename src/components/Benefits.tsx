
import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  "Dificuldades para dormir (insônia)",
  "Ansiedade e agitação emocional",
  "Enurese noturna (xixi na cama)",
  "Comportamentos agressivos",
  "Sintomas de estresse e tensão",
  "Tristezas profundas e sinais de depressão",
  "Medos excessivos e fobias",
  "Hiperatividade e inquietação constante",
  "Falta de foco e baixa concentração",
  "Entre outros desafios que afetam o bem-estar infantil"
];

const Benefits = () => {
  return (
    <section className="section-container" id="beneficios">
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-brand-blue font-medium text-sm mb-3">
          RESULTADOS TRANSFORMADORES
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Com este guia, você vai descobrir como auxiliar as crianças a superarem:
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Técnicas eficazes para ajudar no tratamento dos principais desafios emocionais e comportamentais infantis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="benefit-card"
          >
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-1" />
              <p className="ml-3 text-lg text-gray-700">{benefit}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-block p-6 rounded-lg bg-blue-50 max-w-2xl">
          <p className="text-lg font-medium text-gray-700 italic">
            "As técnicas apresentadas neste guia foram desenvolvidas e testadas com centenas de crianças, mostrando resultados positivos desde as primeiras sessões."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

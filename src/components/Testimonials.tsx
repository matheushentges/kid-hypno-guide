
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    quote: "Transformador! Esse guia chegou como um alívio na minha rotina com três filhas em fases totalmente diferentes. Uma com TDAH, outra com DDA e a mais nova sempre tentando agradar a todos. Me ajudou a organizar a casa, equilibrar as emoções e criar um ambiente mais leve. Waldiney trouxe orientações práticas, acessíveis e com uma linguagem que acolhe. Um verdadeiro presente para quem quer criar filhos emocionalmente saudáveis.",
    author: "Thamires Couto",
    role: "Mãe e servidora pública",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "Trabalhar com crianças há mais de 30 anos me mostrou que o que elas mais precisam são estímulos para florescerem. Esse material vai direto ao ponto: prático, objetivo e repleto de técnicas eficazes. Um verdadeiro guia para terapeutas que desejam ter mais resultados com o público infantil. Waldiney reuniu aqui um conteúdo essencial, feito com conhecimento e sensibilidade.",
    author: "Patricia Simas",
    role: "Neuropsicopedagoga e hipnoterapeuta",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-brand-green font-medium text-sm mb-3">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que dizem sobre o nosso material
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como nosso guia tem transformado a prática de profissionais e a vida de famílias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-brand-blue hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <Avatar className="h-14 w-14 border-2 border-brand-light-blue">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback className="bg-brand-blue text-white">
                    {testimonial.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

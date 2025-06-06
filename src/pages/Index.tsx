
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import ProductContent from '../components/ProductContent';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import { ShieldCheck } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-bg">
      <NavBar />
      
      <Hero />
      
      <Benefits />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <ShieldCheck className="h-10 w-10 text-brand-blue" />,
                title: "Material Exclusivo", 
                description: "Conteúdo desenvolvido por especialistas com décadas de experiência em hipnoterapia infantil." 
              },
              { 
                icon: <ShieldCheck className="h-10 w-10 text-brand-blue" />,
                title: "Aplicação Imediata", 
                description: "Técnicas práticas que podem ser utilizadas desde o primeiro dia de estudo." 
              },
              { 
                icon: <ShieldCheck className="h-10 w-10 text-brand-blue" />,
                title: "Resultados Comprovados", 
                description: "Métodos testados e aprovados por centenas de profissionais e famílias." 
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-light-blue mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ProductContent />
      
      <Testimonials />
      
      <CTASection />
      
      <footer className="bg-brand-green text-gray-700 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6 flex items-center justify-center">
            <ShieldCheck className="h-8 w-8 text-brand-blue mr-2" />
            <span className="font-poppins font-semibold text-xl">Hipnoterapia Infantil</span>
          </div>
          
          <p className="mb-6 max-w-2xl mx-auto text-gray-700">
            O guia essencial para terapeutas e cuidadores que desejam transformar a vida de crianças através da hipnoterapia.
          </p>
    
            <p>&copy; {new Date().getFullYear()} Hipnoterapia Infantil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

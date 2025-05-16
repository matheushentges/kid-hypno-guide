
import React from 'react';
import { Book, Award, Gift, Check, Clock, CheckSquare, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProductContent = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-brand-blue font-medium text-sm mb-3">
            CONTEÚDO COMPLETO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🎓 Torne-se um Especialista em Hipnoterapia Infantil
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforme vidas desde os primeiros anos com técnicas comprovadas e abordagens especializadas
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {/* Módulo 1 */}
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 md:p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="bg-brand-blue rounded-full p-5 text-white">
                <Book size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brand-blue mb-3">
                  🧩 Módulo 1 – Transformando a Saúde Emocional Infantil
                </h3>
                <p className="text-gray-700 mb-4">
                  Neste módulo, você aprenderá a identificar e lidar com os principais desafios emocionais enfrentados por crianças e adolescentes.
                </p>
                <p className="text-gray-700 mb-2 font-medium">
                  Você vai aprender a lidar com:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                  {["Ansiedade", "Medos excessivos","Estresse", "Identificar sinais de depressão"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-green mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-gray-700">
                  <strong>Resultado:</strong> Redução de crises e equilíbrio emocional duradouro.
                </p>
              </div>
            </div>
          </div>

          {/* Módulo 2 */}
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 md:p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="bg-brand-blue rounded-full p-5 text-white">
                <Clock size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brand-blue mb-3">
                  🛠️ Módulo 2 – Comportamento e Rotina Saudável
                </h3>
                <p className="text-gray-700">
                  Solução para comportamentos disruptivos e melhora da rotina familiar. Aprenda a aplicar técnicas de hipnose e PNL para ajudar crianças a desenvolverem hábitos saudáveis e comportamentos positivos.
                </p>
                <p className="text-gray-700 mb-2 font-medium">
                  Você vai aprender a lidar com:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                  {["Insônia", "Enurese noturna (xixi na cama)", "Hiperatividade","Falta de foco"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-green mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-gray-700">
                  <strong>Resultado:</strong> Sono reparador, harmonia familiar e maior concentração infantil.
                </p>
              </div>
            </div>
          </div>

          {/* Módulo 3 */}
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 md:p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="bg-brand-blue rounded-full p-5 text-white">
                <Award size={40} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brand-blue mb-3">
                  🌙 Módulo 3 – Método Sleep Talk para Pais e Cuidadores
                </h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Um dos grandes diferenciais do material!</span>
                </p>
                <p className="text-gray-700">
                  Revolução na conexão familiar com hipnoterapia prática. Aprenda a usar o método Sleep Talk para ajudar crianças a desenvolverem autoconfiança, autoestima e habilidades sociais.
                </p>
                <p className="text-gray-700 mb-2 font-medium">
                  Você vai aprender:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                  {["Passo a passo para aplicar técnicas em casa (linguagem simples e afetiva)", "Casos reais de sucesso e fortalecimento do vínculo pais-filhos"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-green mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-gray-700">
                  <strong>Resultado:</strong> Autonomia para os pais e rotina infantil mais tranquila comprovada por resultados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* O que mais você encontrará */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            🚀 O que mais você encontrará neste guia:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="h-6 w-6 text-brand-blue mb-2" />,
                title: "Técnicas Modernas",
                description: "Abordagens modernas, criativas e eficazes para lidar com os principais desafios da infância — apresentadas de forma prática e lúdica."
              },
              {
                icon: <CheckSquare className="h-6 w-6 text-brand-blue mb-2" />,
                title: "Checklists Práticos",
                description: "Ferramentas prontas para aplicação imediata, com checklists detalhados para acompanhamento de cada caso, garantindo a correta aplicação das técnicas."
              },
              {
                icon: <Book className="h-6 w-6 text-brand-blue mb-2" />,
                title: "Estudos de Caso Reais",
                description: "Nada de teoria solta! Veja como as técnicas foram aplicadas com sucesso em crianças reais, enfrentando situações do dia a dia."
              },
              {
                icon: <FileText className="h-6 w-6 text-brand-blue mb-2" />,
                title: "Guias Práticos",
                description: "Instruções claras e detalhadas para cada técnica, protocolo ou sessão. Você saberá exatamente como aplicar, o que falar e o que observar."
              },
              {
                icon: <CheckSquare className="h-6 w-6 text-brand-blue mb-2" />,
                title: "Abordagens Práticas",
                description: "Todo o conteúdo foi desenvolvido pensando na aplicação real, com métodos passo a passo e exemplos concretos para implementação imediata."
              },
              {
                icon: <Clock className="h-6 w-6 text-brand-blue mb-2" />,
                title: "Protocolos Rápidos",
                description: "Acesso a protocolos de emergência para situações que exigem intervenção imediata, permitindo resultados visíveis em poucas sessões."
              }
            ].map((item, index) => (
              <Card key={index} className="border-t-4 border-brand-green hover:shadow-lg transition-all">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  {item.icon}
                  <h4 className="text-xl font-semibold mb-3">✅ {item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <p className="text-lg font-medium text-brand-blue">✅ E muito, muito mais...</p>
          </div>
        </div>

        {/* Bônus */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-8 rounded-xl shadow-md mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            🎁 Ao garantir agora, você ainda recebe 5 Super Bônus Exclusivos!
          </h3>
          
          <div className="space-y-6">
            {[
              {
                title: "BÔNUS 1 – Reduzindo o Uso Excessivo de Celulares",
                description: "Material desenvolvido para ajudar crianças a construírem uma relação mais saudável com a tecnologia, unindo hipnoterapia + PNL para resultados efetivos."
              },
              {
                title: "BÔNUS 2 – Lidando com o Luto Infantil",
                description: "Aprenda a entender o processo de luto nas crianças e como utilizar a hipnoterapia para acolher, apoiar e conduzir a criança à superação emocional."
              },
              {
                title: "BÔNUS 3 – Tratamento de Tiques Infantis",
                description: "Conteúdo exclusivo com técnicas específicas para lidar com tiques motores ou vocais na infância, aplicando a hipnose de forma leve e eficiente."
              },
              {
                title: "BÔNUS 4 – Superando a Gagueira (Tartamudez)",
                description: "Um guia completo e direto para tratar a gagueira infantil em sessões de hipnoterapia. Com exemplos práticos, sugestões de frases e atividades para os pais."
              },
              {
                title: "BÔNUS 5 – Alimentação Infantil e Hipnoterapia",
                description: "Aprenda como a hipnoterapia pode auxiliar crianças que apresentam seletividade alimentar ou recusa de alimentos. Técnicas detalhadas para ajudar na criação de hábitos mais saudáveis."
              }
            ].map((bonus, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-amber-400 rounded-full p-2 text-white mr-4 flex-shrink-0">
                  <Gift size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">🎁 {bonus.title}</h4>
                  <p className="text-gray-700">{bonus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recapitulando */}
        <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-brand-blue shadow-md">
          <h3 className="text-2xl font-bold text-brand-blue text-center mb-8">
            🔁 Recapitulando tudo que você vai levar:
          </h3>
          
          <div className="space-y-4">
            {[
              {
                title: "Guia Completo de Hipnoterapia Infantil",
                description: "Com técnicas, protocolos, estratégias e abordagens testadas em consultório."
              },
              {
                title: "5 Bônus Incríveis",
                description: "Conteúdos complementares para expandir seu repertório terapêutico e lidar com questões cada vez mais comuns entre as crianças."
              },
              {
                title: "Certificado de Conclusão com 30h",
                description: "Emitido por uma instituição reconhecida, para você comprovar seus estudos e agregar autoridade à sua prática profissional."
              },
              {
                title: "Acesso Vitalício ao Material",
                description: "Estude no seu tempo, revise sempre que quiser e mantenha esse conteúdo como referência no seu dia a dia."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-brand-green mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800"> {item.title}:</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="mb-6">
              <p className="text-2xl font-bold text-gray-800 mb-2">💸 Tudo isso por apenas <span className="text-brand-blue" style={{ color: '#3ab895' }}>R$57</span></p>
              <p className="text-gray-700">Isso mesmo: por menos do que o valor de uma única sessão terapêutica, você garante acesso a um material rico, profundo e cheio de estratégias que você pode aplicar para a vida toda.</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg inline-block">
              <p className="text-amber-800 font-medium">
                ⏰ Aproveite agora! Essa é uma oferta especial por tempo limitado.
              </p>
              <p className="text-amber-800 mt-2">
                Clique no botão abaixo e dê o próximo passo na sua jornada como especialista em hipnoterapia infantil.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="#comprar" 
                className="btn-primary text-lg px-10 py-4"
                style={{ backgroundColor: '#3ab895', borderColor: '#3ab895' }}
              >
                👉 COMPRAR!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductContent;


import React from 'react';
import { Star, MessageSquare, Heart, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    username: "thamires.couto",
    name: "Thamires Couto",
    role: "Mãe e servidora pública",
    comment: "Transformador! Esse guia chegou como um alívio na minha rotina com três filhas em fases totalmente diferentes. Me ajudou a organizar a casa, equilibrar as emoções e criar um ambiente mais leve. 💯",
    likes: 47,
    time: "2d",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
    replies: [
      {
        id: 101,
        username: "ana.terapeuta",
        name: "Ana Claudia",
        comment: "Você aplicou o método Sleep Talk? Estou curiosa sobre os resultados!",
        likes: 8,
        time: "1d",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop"
      },
      {
        id: 102,
        username: "thamires.couto",
        name: "Thamires Couto",
        comment: "Sim! Já na primeira semana percebi diferença no comportamento da minha filha com TDAH. Muito mais tranquila na hora de dormir.",
        likes: 12,
        time: "1d",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 2,
    username: "patricia_simas",
    name: "Patricia Simas",
    role: "Neuropsicopedagoga e hipnoterapeuta",
    comment: "Trabalho com crianças há mais de 30 anos e esse material vai direto ao ponto: prático, objetivo e repleto de técnicas eficazes. Um verdadeiro guia para terapeutas que desejam ter mais resultados com o público infantil. Os checklists são fantásticos para acompanhar o progresso! 👏👏👏",
    likes: 86,
    time: "5d",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    replies: [
      {
        id: 201,
        username: "marcos.psi",
        name: "Marcos Silva",
        comment: "Patricia, você acha que funciona bem para crianças com transtorno de ansiedade?",
        likes: 4,
        time: "4d",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop"
      },
      {
        id: 202,
        username: "patricia_simas",
        name: "Patricia Simas",
        comment: "Marcos, absolutamente! As técnicas de respiração e visualização são perfeitas para ansiedade infantil. Já apliquei com 5 pacientes.",
        likes: 15,
        time: "4d",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
      },
      {
        id: 203,
        username: "carol.terapeuta",
        name: "Carolina Mendes",
        comment: "Confirmo! Estou usando o protocolo para ansiedade há 2 semanas e já vejo resultados significativos nos meus pacientes.",
        likes: 11,
        time: "3d",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 3,
    username: "roberto.andrade",
    name: "Roberto Andrade",
    role: "Psicólogo infantil",
    comment: "Comprei com ceticismo, mas preciso admitir que as técnicas são sensacionais. Especialmente o módulo sobre comportamento e rotina - implementei na clínica e os resultados são visíveis já na segunda sessão. Os pais estão impressionados! 🙌",
    likes: 53,
    time: "1sem",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
    replies: [
      {
        id: 301,
        username: "maria.eduarda",
        name: "Maria Eduarda",
        comment: "Meu filho tem dificuldade para dormir, esse material ajuda?",
        likes: 3,
        time: "6d",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
      },
      {
        id: 302,
        username: "roberto.andrade",
        name: "Roberto Andrade",
        comment: "Maria, o módulo 2 é específico para isso! Tem protocolos excelentes para insônia infantil e estabelecimento de rotina de sono.",
        likes: 8,
        time: "6d",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop"
      },
      {
        id: 303,
        username: "lucia.melo",
        name: "Lucia Melo",
        comment: "Confirmo! Minha filha de 7 anos dormia muito mal. Depois do protocolo da página 42, em duas semanas já dormia a noite toda!",
        likes: 21,
        time: "5d",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=500&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 4,
    username: "fernanda.oliveira",
    name: "Fernanda Oliveira",
    role: "Mãe e professora",
    comment: "Incrível como o guia transformou minha relação com meu filho autista! As técnicas de comunicação e relaxamento fizeram toda a diferença nas crises sensoriais. Recomendo demais, especialmente para pais de crianças neurodivergentes! ✨🧩",
    likes: 72,
    time: "3d",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=500&auto=format&fit=crop",
    replies: [
      {
        id: 401,
        username: "joao.neuro",
        name: "João Pimentel",
        comment: "Fernanda, qual técnica você achou mais eficaz para as crises sensoriais?",
        likes: 6,
        time: "2d",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=500&auto=format&fit=crop"
      },
      {
        id: 402,
        username: "fernanda.oliveira",
        name: "Fernanda Oliveira",
        comment: "João, sem dúvida a técnica do 'Lugar Seguro' adaptada para as necessidades sensoriais específicas dele. Fazemos diariamente e reduziu as crises em 80%!",
        likes: 14,
        time: "2d",
        image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=500&auto=format&fit=crop"
      },
      {
        id: 403,
        username: "paula.terapeuta",
        name: "Paula Vasconcellos",
        comment: "Estou implementando essas técnicas no meu consultório com 3 crianças autistas e os resultados são impressionantes. O capítulo sobre integração sensorial é revolucionário.",
        likes: 17,
        time: "1d",
        image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=500&auto=format&fit=crop"
      }
    ]
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-light-green text-brand-green font-medium text-sm mb-3">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conversas reais sobre nosso material
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que as pessoas estão comentando sobre os resultados do nosso guia na vida real
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Post header */}
              <div className="flex items-center p-4 border-b border-gray-100">
                <Avatar className="h-10 w-10 border-2 border-brand-light-blue">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-brand-blue text-white">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="font-semibold text-sm text-gray-800">{testimonial.username}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Post content */}
              <div className="p-4 border-b border-gray-100">
                <p className="text-gray-700 text-sm">{testimonial.comment}</p>
              </div>
              
              {/* Post interactions */}
              <div className="px-4 py-2 flex items-center justify-between text-gray-500 text-xs border-b border-gray-100">
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-red-400" />
                  <span>{testimonial.likes} curtidas</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{testimonial.replies.length} comentários</span>
                </div>
                <span>{testimonial.time}</span>
              </div>
              
              {/* Replies */}
              <div className="bg-gray-50 p-3">
                {testimonial.replies.map((reply) => (
                  <div key={reply.id} className="mb-3 last:mb-0">
                    <div className="flex items-start">
                      <Avatar className="h-7 w-7 mr-2">
                        <AvatarImage src={reply.image} alt={reply.name} />
                        <AvatarFallback className="bg-brand-blue text-white text-xs">
                          {reply.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-white rounded-lg p-2 text-xs flex-1">
                        <p className="font-semibold text-gray-800">{reply.username}</p>
                        <p className="text-gray-700">{reply.comment}</p>
                        <div className="flex items-center mt-1 text-gray-500 text-[10px]">
                          <span>{reply.time}</span>
                          <span className="mx-1">•</span>
                          <span>{reply.likes} curtidas</span>
                          <span className="mx-1">•</span>
                          <span className="text-gray-600 font-medium">Responder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

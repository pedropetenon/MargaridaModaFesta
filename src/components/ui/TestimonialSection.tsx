"use client";

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animations/Reveal';

interface TestimonialCardProps {
  quote: string;
  author: string;
  image: string;
}

function TestimonialCard({ quote, author, image }: TestimonialCardProps) {
  return (
    <Reveal y={30} duration={1}>
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-2 luxury-frame">
      <div className="w-full md:w-[300px] aspect-[2/3] shrink-0 overflow-hidden relative luxury-frame !p-0">
         <div className="absolute inset-[12px] overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
         </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-4 md:px-8 py-6">
        <p className="font-serif italic text-xl md:text-2xl text-primary leading-relaxed mb-6">
          "{quote}"
        </p>
        <span className="font-sans text-[0.7rem] uppercase tracking-[3px] text-secondary">
          — {author}
        </span>
      </div>
    </div>
    </Reveal>
  );
}

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "O vestido dos meus sonhos! O decote nas costas e cada detalhe da renda foram elogiados por todos. O atendimento da Dona Margarida fez toda a diferença para o meu grande dia ser perfeito.",
      author: "Juliana S., Noiva",
      image: "/images/cliente1.png"
    },
    {
      quote: "Fiquei encantada com a modernidade e o movimento desse vestido azul. É difícil encontrar peças tão exclusivas e com um caimento tão impecável. Me senti maravilhosa!",
      author: "Beatriz L., Madrinha",
      image: "/images/cliente2.png"
    },
    {
      quote: "A delicadeza do bordado e o brilho sutil do tecido me conquistaram à primeira vista. Foi o traje perfeito para celebrar esse momento tão especial com elegância e conforto.",
      author: "Renata P., Casamento",
      image: "/images/cliente3.png"
    }
  ];

  return (
    <section id="prova-social" className="py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Nossas Clientes e Amigos</h2>
          <p className="font-sans text-secondary uppercase tracking-[3px] text-xs">A alegria de celebrar momentos inesquecíveis</p>
        </div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

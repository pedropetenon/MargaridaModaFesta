"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Reveal } from '@/components/animations/Reveal';

interface TestimonialCardProps {
  quote: string;
  author: string;
  image: string;
}

function TestimonialCard({ quote, author, image }: TestimonialCardProps) {
  return (
    <Reveal y={30} duration={1} className="h-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-white p-2 luxury-frame h-full">
      <div className="w-full md:w-[300px] aspect-[2/3] shrink-0 overflow-hidden relative luxury-frame !p-0">
         <div className="absolute inset-[12px] overflow-hidden">
             <Image 
               src={image} 
               alt={`Depoimento de ${author}`} 
               fill 
               sizes="(max-width: 768px) 85vw, 300px"
               className="object-cover"
             />
         </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-4 md:px-8 py-6 text-center md:text-left">
        <p className="font-serif italic text-lg md:text-2xl text-primary leading-relaxed mb-6">
          "{quote}"
        </p>
        <span className="font-sans text-[0.65rem] md:text-[0.7rem] uppercase tracking-[3px] text-secondary">
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
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-3 md:mb-4">Nossas Clientes e Amigos</h2>
          <p className="font-sans text-secondary uppercase tracking-[2px] md:tracking-[3px] text-[10px] md:text-xs block md:inline">A alegria de celebrar momentos inesquecíveis</p>
          <span className="font-sans text-gold/60 text-[10px] italic block mt-1 md:hidden">(Deslize para ler mais)</span>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 w-full md:flex-col md:gap-12 md:overflow-visible no-scrollbar max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="w-[85%] sm:w-[50%] snap-center shrink-0 md:w-full h-full flex">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

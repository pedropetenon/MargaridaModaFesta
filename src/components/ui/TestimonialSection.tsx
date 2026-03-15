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
      quote: "O vestido ficou perfeito, o caimento impecável. Foi a escolha certa para ser madrinha. Muito obrigada pelo atendimento incrível!",
      author: "Juliana S., Casamento",
      image: "/images/cliente1.png"
    },
    {
      quote: "Resolvi tudo em um só lugar. O traje estava impecável e o ajuste da calça ficou na medida exata.",
      author: "Rafael M., Formatura",
      image: "/images/cliente2.png"
    },
    {
      quote: "Achei o vestido dos meus sonhos. O bordado era delicadíssimo e recebi elogios a noite toda!",
      author: "Camila T., Casamento",
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

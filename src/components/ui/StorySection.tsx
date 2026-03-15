"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Reveal } from '@/components/animations/Reveal';

export function StorySection() {
  return (
    <section id="nossa-historia" className="py-24 bg-white/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <Reveal x={-50} duration={1.2}>
            <div className="relative">
            <div className="luxury-frame aspect-[1/1.2] shadow-2xl">
               <div className="absolute inset-[15px] overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/dona-margarida.jpg')" }}
                    role="img"
                    aria-label="Dona Margarida na boutique"
                  />
               </div>
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-6 md:-right-12 w-32 h-32 md:w-40 md:h-40 bg-gold text-white rounded-full flex flex-col items-center justify-center text-center shadow-xl z-20 border-[6px] border-white"
            >
               <span className="text-3xl md:text-4xl font-serif font-bold">30</span>
               <span className="text-[0.6rem] md:text-[0.7rem] uppercase tracking-wider leading-tight">Anos de<br/>Tradição</span>
            </motion.div>
          </div>
          </Reveal>

          {/* Text Column */}
          <Reveal x={50} duration={1.2} delay={0.4}>
            <div className="space-y-8">
            <div>
               <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4 leading-tight">
                 Conheça a <br /> <span className="italic">Dona Margarida</span>
               </h2>
               <p className="font-sans text-gold uppercase tracking-[3px] text-xs font-medium">Tradição, afeto e o ajuste perfeito</p>
            </div>

            <div className="space-y-6 font-sans text-secondary leading-relaxed font-light text-lg">
              <p>
                A Margarida Moda Festa não é apenas uma loja, é uma tradição em Santa Rosa de Viterbo e região. Tudo começou com o sonho da Dona Margarida de vestir pessoas para os momentos mais felizes de suas vidas.
              </p>
              <p>
                Com um atendimento acolhedor – como se você estivesse em casa –, ela faz questão de ajudar na escolha do traje ideal. Mais do que alugar um vestido ou um terno, a verdadeira arte da Dona Margarida está nos ajustes precisos.
              </p>
              <p className="text-primary font-medium">Venha nos visitar e sinta a diferença de um atendimento que transborda amor e perfeccionismo.</p>
            </div>

            <Link 
              href="https://wa.me/5516991062118?text=Olá, gostaria de agendar um horário na Margarida Moda Festa!" 
              className="inline-block bg-primary text-white px-10 py-5 font-sans text-[0.7rem] uppercase tracking-[3px] transition-all duration-300 hover:bg-gold shadow-lg"
              target="_blank"
            >
              Falar com a Margarida
            </Link>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

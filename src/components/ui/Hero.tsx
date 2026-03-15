"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#111]">
      {/* Hero Background with subtle zoom animation */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
          role="img"
          aria-label="Margarida Moda Festa Storefront"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="font-sans text-[0.7rem] uppercase tracking-[6px] text-gold mb-6 block">
            Tradição & Elegância
          </span>
          <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 tracking-tighter leading-tight">
            Margarida <br /> <span className="italic">Moda Festa</span>
          </h1>
          <p className="font-sans text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Locação de vestidos de festa e trajes a rigor masculinos com atendimento personalizado em Santa Rosa de Viterbo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="https://wa.me/5516991062118?text=Olá, gostaria de agendar um horário na Margarida Moda Festa!"
              target="_blank"
              className="group relative px-10 py-5 bg-gold text-white font-sans text-[0.75rem] uppercase tracking-[3px] transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Agendar Atendimento</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}

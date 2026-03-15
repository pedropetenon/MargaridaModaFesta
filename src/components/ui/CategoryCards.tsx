"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
  className?: string;
}

function CategoryCard({ title, image, href, className }: CategoryCardProps) {
  return (
    <Link href={href} className={`group block relative overflow-hidden luxury-frame min-h-[400px] flex-1 ${className}`}>
      {/* Background Image inside frame */}
      <div className="absolute inset-[15px] overflow-hidden z-1">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="w-full h-full bg-cover bg-center transition-transform duration-700"
          style={{ backgroundImage: `url('${image}')` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/40 transition-colors duration-500" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center text-white">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl mb-4"
        >
          {title}
        </motion.h2>
        <span className="font-sans text-[0.7rem] uppercase tracking-[3px] border-b border-white/50 pb-1 group-hover:border-gold group-hover:text-gold transition-all duration-300">
          Ver Coleção
        </span>
      </div>
    </Link>
  );
}

export function CategoryCards() {
  return (
    <section className="flex flex-col md:flex-row gap-0 bg-bg md:h-screen min-h-[600px]">
      <CategoryCard 
        title="Moda Feminina" 
        image="/images/moda_feminina_cat_1773431343179.png" 
        href="#moda-feminina"
      />
      <CategoryCard 
        title="Trajes Masculinos" 
        image="/images/moda_masculina_cat_1773431357106.png" 
        href="#trajes-masculinos"
      />
    </section>
  );
}

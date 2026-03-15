"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  image: string;
  whatsappLink: string;
  badge?: string;
  aspectRatio?: "portrait" | "square";
}

export function ProductCard({ name, image, whatsappLink, badge, aspectRatio = "portrait" }: ProductCardProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Image Container with Luxury Frame */}
      <motion.div 
        whileHover={{ y: -5 }}
        className={cn(
          "luxury-frame overflow-hidden mb-4 group cursor-pointer",
          aspectRatio === "portrait" ? "aspect-[2/3]" : "aspect-square"
        )}
      >
        <div className="absolute inset-[12px] overflow-hidden">
           <motion.div
             whileHover={{ scale: 1.04 }}
             transition={{ duration: 0.6 }}
             className="w-full h-full bg-cover bg-center"
             style={{ backgroundImage: `url('${image}')` }}
           />
        </div>
        
        {badge && (
          <div className="absolute top-6 right-6 z-20 bg-gold text-white text-[0.6rem] uppercase tracking-[2px] px-3 py-1.5 shadow-lg">
            {badge}
          </div>
        )}
      </motion.div>

      {/* Info */}
      <div className="flex flex-col items-center text-center flex-grow pt-2">
        <h3 className="font-serif text-lg text-primary mb-4 leading-snug">
          {name}
        </h3>
        
        <Link 
          href={whatsappLink}
          target="_blank"
          className="w-full py-3 px-6 border border-ph-mid text-primary text-[0.7rem] uppercase tracking-[1.5px] font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 2.014c-5.503 0-9.982 4.478-9.982 9.982 0 1.944.557 3.82 1.616 5.49L2 22l4.64-1.218a9.94 9.94 0 0 0 5.37 1.558c5.498 0 9.98-4.478 9.98-9.982 0-5.504-4.482-9.98-9.98-9.98h-.01zm5.82 14.18c-.244.686-1.428 1.34-1.957 1.455-.526.113-1.124.085-1.84-.13-.424-.133-.96-.31-1.642-.607-2.903-1.258-4.786-4.173-4.93-4.364-.143-.19-1.18-1.57-1.18-2.99s.686-2.126.938-2.4c.252-.276.55-.345.733-.345.18 0 .363.003.525.01.173.01.41-.06.638.487.238.567.824 2 1.006 2.368.07.142.128.314.024.524-.103.207-.152.336-.31.52-.16.183-.332.404-.475.545-.16.155-.33.322-.14.65.187.327.838 1.39 1.8 2.25.14.126.313.257.51.385.197.13.398.243.61.342.36.17.57.14.783-.105.215-.246.924-1.076 1.17-1.446.246-.368.494-.306.828-.182.333.125 2.108.995 2.47 1.177.362.182.602.27.69.424.088.152.088.887-.156 1.573z"/></svg>
          Verificar Disponibilidade
        </Link>
      </div>
    </div>
  );
}

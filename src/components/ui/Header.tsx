"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[1100px] transition-all duration-500">
      <div className={cn(
        "flex items-center justify-between px-8 h-[54px] rounded-[6px] transition-all duration-500",
        "bg-white/95 backdrop-blur-md border border-gold/40",
        "shadow-[0_4px_20px_rgba(0,0,0,0.06),inset_0_0_0_1px_rgba(184,158,103,0.05)]",
        isScrolled ? "scale-[0.98] bg-white" : "scale-100"
      )}>
        {/* Left: Logo */}
        <Link href="/" className="font-serif text-2xl tracking-tighter text-primary hover:opacity-70 transition-opacity">
          Margarida
        </Link>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#moda-feminina" className="nav-link-next">Moda Feminina</Link>
          <Link href="#trajes-masculinos" className="nav-link-next">Trajes Masculinos</Link>
          <Link href="#nossa-historia" className="nav-link-next">Nossa História</Link>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center">
           <Link 
              href="https://wa.me/5516991062118?text=Olá, gostaria de agendar um horário na Margarida Moda Festa!" 
              className="bg-primary hover:bg-gold text-white text-[0.7rem] uppercase tracking-[2px] px-6 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              target="_blank"
           >
              Agendar
           </Link>
        </div>
      </div>
      
      <style jsx>{`
        .nav-link-next {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          color: var(--color-text-primary);
          transition: var(--transition-fast);
          position: relative;
        }
        .nav-link-next:hover {
          color: var(--color-gold);
        }
        .nav-link-next::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--color-gold);
          transition: var(--transition-fast);
        }
        .nav-link-next:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}

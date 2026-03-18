"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-2 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[1100px] transition-all duration-500">
        <div className={cn(
          "flex items-center justify-between px-4 md:px-8 h-[60px] md:h-[54px] rounded-[10px] md:rounded-[6px] transition-all duration-500",
          "bg-white/95 backdrop-blur-md border border-gold/40",
          "shadow-[0_4px_20px_rgba(0,0,0,0.06),inset_0_0_0_1px_rgba(184,158,103,0.05)]",
          isScrolled ? "scale-[0.98] bg-white" : "scale-100"
        )}>
          {/* Left: Logo */}
          <Link href="/" className="font-serif text-2xl tracking-tighter text-primary hover:opacity-70 transition-opacity">
            Margarida
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="#moda-feminina" className="nav-link-next">Moda Feminina</Link>
            <Link href="#trajes-masculinos" className="nav-link-next">Trajes Masculinos</Link>
            <Link href="#nossa-historia" className="nav-link-next">Nossa História</Link>
          </nav>

          {/* Right: CTA (Desktop) & Hamburger Menu (Mobile) */}
          <div className="flex items-center gap-4">
            <Link 
                href="https://wa.me/5516991062118?text=Olá, gostaria de agendar um horário na Margarida Moda Festa!" 
                className="hidden md:flex bg-primary hover:bg-gold text-white text-[0.7rem] uppercase tracking-[2px] px-6 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 items-center justify-center min-h-[48px]"
                target="_blank"
            >
                Agendar
            </Link>
            <button 
              className="md:hidden text-primary p-2 w-[48px] h-[48px] flex justify-end items-center" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu size={28} />
            </button>
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

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[110] bg-white/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] flex flex-col md:hidden",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Mobile Header Inside Menu */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
           <Link href="/" className="font-serif text-3xl tracking-tighter text-primary" onClick={toggleMobileMenu}>
             Margarida
           </Link>
           <button 
             className="text-primary w-[48px] h-[48px] flex items-center justify-end" 
             onClick={toggleMobileMenu}
             aria-label="Close mobile menu"
           >
             <X size={32} />
           </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col items-center justify-start flex-1 px-8 pt-8 w-full overflow-y-auto">
          <Link href="#moda-feminina" className="w-full flex items-center justify-between py-6 border-b border-gold/20 font-sans text-lg tracking-[3px] uppercase text-primary hover:text-gold active:bg-gold/5 transition-all" onClick={toggleMobileMenu}>
            <span>Moda Feminina</span>
            <span className="text-gold/50 text-2xl">›</span>
          </Link>
          <Link href="#trajes-masculinos" className="w-full flex items-center justify-between py-6 border-b border-gold/20 font-sans text-lg tracking-[3px] uppercase text-primary hover:text-gold active:bg-gold/5 transition-all" onClick={toggleMobileMenu}>
            <span>Trajes Masculinos</span>
            <span className="text-gold/50 text-2xl">›</span>
          </Link>
          <Link href="#nossa-historia" className="w-full flex items-center justify-between py-6 border-b border-gold/20 font-sans text-lg tracking-[3px] uppercase text-primary hover:text-gold active:bg-gold/5 transition-all" onClick={toggleMobileMenu}>
            <span>Nossa História</span>
            <span className="text-gold/50 text-2xl">›</span>
          </Link>
          <Link href="#prova-social" className="w-full flex items-center justify-between py-6 border-b border-gold/10 font-sans text-lg tracking-[3px] uppercase text-primary hover:text-gold active:bg-gold/5 transition-all" onClick={toggleMobileMenu}>
            <span>Depoimentos</span>
            <span className="text-gold/50 text-2xl">›</span>
          </Link>
          
          <div className="w-full mt-10 pb-10">
            <Link 
              href="https://wa.me/5516991062118?text=Olá, gostaria de agendar um horário na Margarida Moda Festa!" 
              className="bg-primary text-white text-sm uppercase tracking-[3px] font-medium w-full flex items-center justify-center min-h-[56px] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] active:scale-95 transition-transform"
              target="_blank"
              onClick={toggleMobileMenu}
            >
              Agendar Horário
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

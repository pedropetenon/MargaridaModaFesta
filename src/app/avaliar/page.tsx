import { Star, Camera, MousePointerClick } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Reveal } from '@/components/animations/Reveal';

export const metadata: Metadata = {
  title: 'Avalie sua experiência | Margarida Moda Festa',
  description: 'Compartilhe como foi a sua experiência com a Margarida Moda Festa.',
};

export default function AvaliarPage() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 md:p-8 overflow-hidden bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm"></div>

      <Reveal y={30} duration={1} className="w-full h-full flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-full min-h-[70vh] flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-20 z-10 shadow-2xl rounded-sm">
          <div className="text-center space-y-10 w-full">
            {/* Header */}
            <div>
              <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-8">
                Faça parte da <br className="hidden md:block" />
                <span className="italic text-gold">nossa história.</span>
              </h1>
              <p className="font-sans text-white/90 font-light leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
                Ficamos imensamente felizes em vestir você para o seu evento. O nosso maior presente é saber como foi a sua experiência. Sua avaliação ajuda a Dona Margarida a continuar realizando sonhos em Santa Rosa e região.
              </p>
            </div>

            <hr className="border-t border-gold/30 w-32 mx-auto" />

            {/* Instruction List */}
            <div className="space-y-8 text-left max-w-lg mx-auto py-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-gold/30 transition-colors duration-300">
                  <MousePointerClick className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <p className="font-sans text-white text-base md:text-lg font-light">
                  Clique no botão abaixo.
                </p>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-gold/30 transition-colors duration-300">
                  <Star className="w-5 h-5 text-gold" strokeWidth={1.5} fill="currentColor" />
                </div>
                <p className="font-sans text-white text-base md:text-lg font-light">
                  Selecione as 5 estrelas.
                </p>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-gold/30 transition-colors duration-300">
                  <Camera className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <p className="font-sans text-white text-base md:text-lg font-light">
                  Se puder, anexe uma foto sua usando o nosso traje.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-10">
              <Link 
                href="https://g.page/r/CcVVeeokEPU0EBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-6 bg-gold text-primary text-[0.8rem] uppercase tracking-[5px] font-bold hover:bg-white hover:text-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 w-full md:w-auto"
              >
                Avaliar no Google
              </Link>
            </div>

            {/* Footer Text */}
            <p className="pt-12 font-serif italic text-white/50 text-base">
              Com carinho, Margarida Moda Festa.
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  );
}

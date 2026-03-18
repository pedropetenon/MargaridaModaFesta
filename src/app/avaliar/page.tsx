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
    <main className="min-h-screen bg-bg relative flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <Reveal y={30} duration={1}>
        <div className="relative w-full max-w-2xl bg-white/70 backdrop-blur-md luxury-frame !p-8 md:!p-16 z-10 shadow-2xl">
          <div className="text-center space-y-8">
            {/* Header */}
            <div>
              <h1 className="font-serif text-3xl md:text-5xl text-primary leading-tight mb-6">
                Faça parte da <br className="hidden md:block" />
                <span className="italic text-gold">nossa história.</span>
              </h1>
              <p className="font-sans text-secondary font-light leading-relaxed text-sm md:text-base max-w-xl mx-auto">
                Ficamos imensamente felizes em vestir você para o seu evento. O nosso maior presente é saber como foi a sua experiência. Sua avaliação ajuda a Dona Margarida a continuar realizando sonhos em Santa Rosa e região.
              </p>
            </div>

            <hr className="border-t border-primary/10 w-24 mx-auto" />

            {/* Instruction List */}
            <div className="space-y-6 text-left max-w-md mx-auto py-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                  <MousePointerClick className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <p className="font-sans text-secondary text-sm md:text-base mt-2 font-light">
                  Clique no botão abaixo.
                </p>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                  <Star className="w-4 h-4 text-gold" strokeWidth={1.5} fill="currentColor" />
                </div>
                <p className="font-sans text-secondary text-sm md:text-base mt-2 font-light">
                  Selecione as 5 estrelas.
                </p>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                  <Camera className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <p className="font-sans text-secondary text-sm md:text-base mt-1.5 font-light">
                  Se puder, anexe uma foto sua usando o nosso traje.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Link 
                href="https://g.page/r/CcVVeeokEPU0EBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white text-[0.75rem] uppercase tracking-[4px] font-bold hover:bg-gold transition-all duration-500 hover:shadow-lg hover:-translate-y-1 w-full md:w-auto"
              >
                Avaliar no Google
              </Link>
            </div>

            {/* Footer Text */}
            <p className="pt-6 font-serif italic text-primary/60 text-sm">
              Com carinho, Margarida Moda Festa.
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  );
}

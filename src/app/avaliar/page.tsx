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
    <main className="h-screen w-screen relative flex items-center justify-center p-4 md:p-6 overflow-hidden bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Darker overlay for extreme contrast and focus */}
      <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm"></div>

      <Reveal y={20} duration={0.8} className="w-full h-full flex items-center justify-center">
        {/* Container: Darker Glassmorphism for higher impact, tighter padding/margins */}
        <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center justify-center bg-black/40 backdrop-blur-md border border-gold/20 p-6 md:p-10 lg:p-12 z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden">
          <div className="text-center space-y-6 md:space-y-8 w-full flex flex-col items-center">
            
            {/* Header */}
            <div className="space-y-4">
              <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl text-white leading-tight drop-shadow-md">
                Faça parte da <br className="hidden sm:block" />
                <span className="italic text-gold">nossa história.</span>
              </h1>
              <p className="font-sans text-white font-medium leading-relaxed text-sm md:text-base lg:text-base max-w-2xl mx-auto drop-shadow-sm">
                Ficamos imensamente felizes em vestir você para o seu evento. O nosso maior presente é saber como foi a sua experiência. Sua avaliação ajuda a Dona Margarida a continuar realizando sonhos.
              </p>
            </div>

            {/* Visual Nudge (5 Stars) */}
            <div className="flex justify-center gap-1.5 md:gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="relative group/star">
                  <div className="absolute inset-0 bg-gold blur-md opacity-60 group-hover/star:opacity-100 transition-opacity duration-300 rounded-full" />
                  <Star className="relative w-7 h-7 md:w-9 md:h-9 text-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]" fill="currentColor" />
                </div>
              ))}
            </div>

            {/* Instruction List */}
            <div className="space-y-4 md:space-y-5 text-left max-w-lg w-full">
              <div className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <MousePointerClick className="w-5 h-5 text-gold" strokeWidth={2} />
                </div>
                <p className="font-sans text-white text-sm md:text-base font-medium">
                  Clique no botão abaixo.
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-gold/30 hover:bg-gold/10 transition-colors duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-gold drop-shadow-md" strokeWidth={2} fill="currentColor" />
                </div>
                <p className="font-sans text-white text-sm md:text-base font-semibold">
                  ✅ Toque na 5ª estrela dourada <span className="text-gold/90 font-medium">(Sua nota máxima faz toda a diferença!).</span>
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Camera className="w-5 h-5 text-gold" strokeWidth={2} />
                </div>
                <p className="font-sans text-white text-sm md:text-base font-medium">
                  Se puder, anexe uma foto sua usando o nosso traje.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 md:pt-4 w-full flex justify-center">
              <Link 
                href="https://search.google.com/local/writereview?placeid=ChIJ3W-x_saJt5QRxVV56iQQ9TQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 bg-gold text-primary text-xs md:text-sm uppercase tracking-[4px] font-extrabold hover:bg-white hover:text-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:-translate-y-1 w-full sm:w-auto rounded-sm"
              >
                Avaliar no Google
              </Link>
            </div>

            {/* Footer Text */}
            <p className="pt-2 md:pt-4 font-serif italic text-white/60 text-xs md:text-sm">
              Com carinho, Margarida Moda Festa.
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  );
}

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
    <main className="h-[100dvh] w-full relative flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Elegant dark gradient overlay for deep contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-black/90 backdrop-blur-[4px]"></div>

      <Reveal y={20} duration={0.8} className="w-full max-w-5xl relative z-10">
        {/* Luxury Card: Split layout on Desktop, Compact Stack on Mobile */}
        <div className="w-full flex flex-col md:flex-row bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
          
          {/* Left Column: Emotion & Context */}
          <div className="flex-1 p-6 md:p-10 lg:p-14 flex flex-col justify-center text-center md:text-left relative overflow-hidden">
            {/* Subtle decorative glow */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] md:leading-tight mb-4 tracking-tight drop-shadow-md relative z-10">
              Faça parte da <br className="hidden md:block" />
              <span className="italic text-gold">nossa história.</span>
            </h1>
            
            <p className="font-sans text-white/80 font-light text-xs md:text-sm lg:text-base leading-relaxed mb-6 md:mb-10 max-w-sm mx-auto md:mx-0 relative z-10">
              Ficamos imensamente felizes em vestir você para o seu evento. O nosso maior presente é saber como foi a sua experiência. Sua avaliação ajuda a Dona Margarida a continuar realizando sonhos.
            </p>

            {/* Visual Nudge (5 Stars) */}
            <div className="flex justify-center md:justify-start gap-1 mb-2 relative z-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="relative group/star">
                  <div className="absolute inset-0 bg-gold blur-md opacity-50 group-hover/star:opacity-100 transition-opacity duration-500 rounded-full" />
                  <Star className="relative w-6 h-6 md:w-8 md:h-8 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" fill="currentColor" />
                </div>
              ))}
            </div>
            <p className="font-serif italic text-white/50 text-[10px] md:text-xs mt-2 text-center md:text-left">
              Sua nota máxima é muito importante.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px md:w-px md:h-auto bg-gradient-to-r md:bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

          {/* Right Column: Instructions & Action */}
          <div className="flex-1 p-6 md:p-10 lg:p-14 flex flex-col justify-center bg-black/20">
            <div className="space-y-4 md:space-y-5 mb-8 w-full max-w-md mx-auto">
              
              {/* Step 1 */}
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                <div className="mt-0.5">
                  <MousePointerClick className="w-4 h-4 md:w-5 md:h-5 text-gold/80" strokeWidth={1.5} />
                </div>
                <p className="font-sans text-white/90 text-xs md:text-sm font-light">
                  Clique no botão de avaliação abaixo.
                </p>
              </div>

              {/* Step 2 - Highlighted */}
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gold/5 border border-gold/20 hover:border-gold/40 hover:bg-gold/10 transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.05)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="mt-0.5 relative z-10">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-gold drop-shadow-sm" strokeWidth={1.5} fill="currentColor" />
                </div>
                <p className="font-sans text-white text-xs md:text-sm font-medium relative z-10">
                  Toque na <span className="text-gold font-bold">5ª estrela dourada</span> <br className="hidden lg:block"/>
                  <span className="font-light text-white/70 text-[10px] md:text-xs leading-tight block mt-0.5">Sua satisfação total garante nosso sucesso.</span>
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                <div className="mt-0.5">
                  <Camera className="w-4 h-4 md:w-5 md:h-5 text-gold/80" strokeWidth={1.5} />
                </div>
                <p className="font-sans text-white/90 text-xs md:text-sm font-light">
                  Se possível, anexe uma linda foto sua.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="w-full max-w-md mx-auto">
              <Link 
                href="https://search.google.com/local/writereview?placeid=ChIJ3W-x_saJt5QRxVV56iQQ9TQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full py-4 md:py-5 bg-gradient-to-r from-gold to-yellow-500 text-primary text-xs md:text-[0.8rem] uppercase tracking-[3px] font-extrabold rounded-md hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Avaliar no Google</span>
                <Star className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" fill="currentColor" />
              </Link>
            </div>
            
            <div className="mt-6 text-center">
              <p className="font-serif italic text-white/40 text-[10px] md:text-xs">
                Com carinho, Margarida Moda Festa.
              </p>
            </div>
          </div>
          
        </div>
      </Reveal>
    </main>
  );
}

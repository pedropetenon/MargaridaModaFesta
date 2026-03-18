import { Header } from '@/components/ui/Header';
import { Hero } from '@/components/ui/Hero';
import { ProductCard } from '@/components/ui/ProductCard';
import { TestimonialSection } from '@/components/ui/TestimonialSection';
import { StorySection } from '@/components/ui/StorySection';
import { NewsletterSection } from '@/components/ui/NewsletterSection';
import { Location } from '@/components/ui/Location';
import { Footer } from '@/components/ui/Footer';

import { Reveal } from '@/components/animations/Reveal';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      
      <Hero />
      
      {/* Moda Feminina Section */}
      <section id="moda-feminina" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal delay={0.1}>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-3 md:mb-4">Moda Feminina</h2>
              <p className="font-sans text-secondary uppercase tracking-[2px] md:tracking-[3px] text-[10px] md:text-xs block md:inline">Vestidos de Festa Exclusivos</p>
              <span className="font-sans text-gold/60 text-[10px] italic block mt-1 md:hidden">(Deslize para ver mais)</span>
            </div>
          </Reveal>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 w-full md:grid md:grid-cols-3 md:gap-12 md:overflow-visible no-scrollbar">
            <div className="w-[85%] sm:w-[48%] snap-center shrink-0 md:w-auto h-full">
              <Reveal delay={0.2} y={50} className="h-full">
                <ProductCard 
                  name="Vestido Esmeralda Longo Plissado"
                  image="/images/vestido_esmeralda_1773431372196.png"
                  whatsappLink="https://wa.me/5516991062118?text=Olá, gostaria de verificar a disponibilidade do Vestido Esmeralda."
                />
              </Reveal>
            </div>
            
            <div className="w-[85%] sm:w-[48%] snap-center shrink-0 md:w-auto h-full">
              <Reveal delay={0.3} y={50} className="h-full">
                <ProductCard 
                  name="Vestido Sereia Vinho Fenda Lateral"
                  image="/images/vestido_vinho_1773431402801.png"
                  whatsappLink="https://wa.me/5516991062118?text=Olá, gostaria de verificar a disponibilidade do Vestido Vinho."
                />
              </Reveal>
            </div>
            
            <div className="w-[85%] sm:w-[48%] snap-center shrink-0 md:w-auto h-full">
              <Reveal delay={0.4} y={50} className="h-full">
                <ProductCard 
                  name="Vestido Terracota Fluido"
                  image="/images/vestido_terracota_1773431416939.png"
                  whatsappLink="https://wa.me/5516991062118?text=Olá, gostaria de verificar a disponibilidade do Vestido Terracota."
                />
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      {/* Trajes Masculinos Section */}
      <section id="trajes-masculinos" className="py-16 md:py-24 bg-white/50 border-y border-ph-light">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-3 md:mb-4">Trajes Masculinos</h2>
              <p className="font-sans text-secondary uppercase tracking-[2px] md:tracking-[3px] text-[10px] md:text-xs block md:inline">Exclusividade e Praticidade</p>
              <span className="font-sans text-gold/60 text-[10px] italic block mt-1 md:hidden">(Deslize para ver mais)</span>
            </div>
          </Reveal>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 w-full md:grid md:grid-cols-3 md:gap-12 md:overflow-visible no-scrollbar">
            <div className="w-[85%] sm:w-[48%] snap-center shrink-0 md:w-auto h-full">
              <Reveal delay={0.2} y={50} className="h-full">
                <ProductCard 
                  name="Terno Slim Azul Marinho"
                  image="/images/terno_azul_marinho_1773431430652.png"
                  whatsappLink="https://wa.me/5516991062118?text=Olá, gostaria de verificar a disponibilidade do Terno Azul Marinho."
                />
              </Reveal>
            </div>
            
            <div className="w-[85%] sm:w-[48%] snap-center shrink-0 md:w-auto h-full">
              <Reveal delay={0.3} y={50} className="h-full">
                <ProductCard 
                  name="Terno Clássico Cinza Chumbo"
                  image="/images/terno_cinza_chumbo_final.png"
                  whatsappLink="https://wa.me/5516991062118?text=Olá, gostaria de verificar a disponibilidade do Terno Cinza Chumbo."
                />
              </Reveal>
            </div>
            
            <div className="w-[85%] sm:w-[48%] snap-center shrink-0 md:w-auto h-full">
              <Reveal delay={0.4} y={50} className="h-full">
                <ProductCard 
                  name="Smoking Preto Tradicional"
                  image="/images/smoking_preto_1773431485725.png"
                  whatsappLink="https://wa.me/5516991062118?text=Olá, gostaria de verificar a disponibilidade do Smoking Preto."
                  badge="Linha Premium"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Social Proof) */}
      <TestimonialSection />

      {/* Brand Story */}
      <StorySection />

      {/* Location */}
      <Location />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
      
    </main>
  );
}

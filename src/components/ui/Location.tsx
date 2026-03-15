"use client";

import { Reveal } from "@/components/animations/Reveal";

export function Location() {
  // Encoded address for the map
  const address = "Rua Santo Elías, 236, Santa Rosa de Viterbo - SP, 14270-000, Brasil";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_KEY&q=${encodeURIComponent(address)}`;
  
  // Note: Using a standard embed URL without API key for demonstration if needed, 
  // but for the user I'll use a direct embed link that doesn't strictly require a personal key if possible, 
  // or a placeholder if I can't generate a stable one without a key.
  // Google Maps Embed URL for Margarida Moda Festa - Query based for maximum reliability
  const embedSrc = "https://maps.google.com/maps?q=Margarida%20Moda%20Festa,%20Rua%20Santo%20Elías,%20236,%20Santa%20Rosa%20de%20Viterbo&t=&z=17&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="localizacao" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Onde nos encontrar</h2>
            <p className="font-sans text-secondary uppercase tracking-[3px] text-xs">Atendimento exclusivo com hora marcada</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          {/* Info Card */}
          <Reveal x={-30} delay={0.2} className="h-full">
            <div className="h-full flex flex-col justify-between p-10 bg-primary text-white luxury-frame !p-2">
                <div className="bg-primary p-8 h-full flex flex-col justify-center space-y-10">
                    <div>
                        <h3 className="font-serif text-2xl mb-4 italic text-gold">Endereço</h3>
                        <p className="text-white/70 font-light leading-relaxed">
                            Rua Santo Elías, 236<br />
                            Santa Rosa de Viterbo - SP<br />
                            CEP: 14270-000
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-2xl mb-4 italic text-gold">Horário de Atendimento</h3>
                        <p className="text-white/70 font-light leading-relaxed">
                            Segunda a Sexta: 09h às 18h<br />
                            Sábado: 09h às 13h<br />
                            <span className="text-gold/60 text-xs mt-2 block italic">* Somente com agendamento prévio</span>
                        </p>
                    </div>

                    <div>
                        <a 
                            href="https://wa.me/5516991062118?text=Olá, gostaria de agendar uma visita!"
                            target="_blank"
                            className="inline-block border border-gold/30 px-8 py-4 text-[0.6rem] uppercase tracking-[3px] hover:bg-gold hover:text-white transition-all duration-500"
                        >
                            Agendar Visita
                        </a>
                    </div>
                </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal x={30} delay={0.4} className="lg:col-span-2">
            <div className="luxury-frame h-[500px] w-full group overflow-hidden">
              <div className="absolute inset-[12px] overflow-hidden transition-all duration-700">
                <iframe
                  src={embedSrc}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Margarida Moda Festa"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

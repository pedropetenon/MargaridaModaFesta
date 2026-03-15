"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

const MODELS = [
  {
    title: "VESTIDO EVASÊ EM CREPE",
    description: "O clássico absoluto que combina com qualquer celebração. Confeccionado em crepe de alta gramatura, este modelo possui uma saia em formato 'A' que valoriza todos os biotipos, proporcionando um caimento estruturado e elegante. É a escolha certeira para madrinhas e convidadas que buscam sofisticação.",
    image: "/images/vestido_esmeralda_1773431372196.png", // Reusing existing esmeralda as example
  },
  {
    title: "VESTIDO FLUIDO DE TULE",
    description: "Perfeito para casamentos ao ar livre, no campo ou na praia. Este modelo destaca-se pela leveza das camadas de tule, que garantem movimento e um ar romântico. O decote delicado e as alças finas trazem um frescor jovial, sendo ideal para eventos diurnos onde o conforto é prioridade.",
    image: "/images/vestido_terracota_1773431416939.png", // Reusing terracota as example
  },
  {
    title: "VESTIDO SEREIA COM RENDA",
    description: "Para quem busca uma silhueta marcante e detalhes ricos. Este modelo sereia esculpe o corpo com elegância, trazendo aplicações em renda que conferem textura e profundidade ao visual. É um vestido imponente, muito procurado para eventos noturnos e formaturas de gala.",
    image: "/images/vestido_vinho_1773431402801.png", // Reusing vinho as example
  },
  {
    title: "VESTIDO DE OMBRO ÚNICO",
    description: "A definição de modernidade para o cenário social. O decote assimétrico de um ombro só é uma tendência forte que traz um ponto focal interessante para o look. Confeccionado em tecidos acetinados, oferece um brilho sutil e uma estética contemporânea para convidadas que fogem do óbvio.",
    image: "/images/vestido_esmeralda_1773431372196.png", // Placeholder duplication
  }
];

export function Showcase() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal>
            <div className="text-center mb-24">
                <span className="text-[0.65rem] tracking-[5px] text-gold uppercase font-bold mb-4 block">Editorial Edition</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight">Destaques da Temporada</h2>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {MODELS.map((model, index) => (
            <Reveal key={model.title} delay={0.2 * index} y={40}>
              <div className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden mb-8 luxury-frame !p-2">
                  <div className="absolute inset-[10px] overflow-hidden">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-90"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 px-2 text-center md:text-left">
                  <h3 className="font-serif text-[1rem] lg:text-[1.1rem] tracking-[2px] font-medium text-[#1A1A1A] uppercase leading-tight">
                    {model.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#4A4A4A] font-light md:text-justify opacity-80">
                    {model.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

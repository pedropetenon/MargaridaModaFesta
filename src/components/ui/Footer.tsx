"use client";

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/margarida4183/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/margarida.silva.908347?locale=pt_BR',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5516991062118?text=Olá, gostaria de agendar um horário na Margarida Moda Festa!',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-primary text-white pt-24 pb-12 font-sans overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="space-y-8">
            <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <h2 className="font-serif text-3xl tracking-tighter text-white">Margarida</h2>
              <p className="font-serif italic text-gold text-lg -mt-1">Moda Festa</p>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
               Tradição de 30 anos transformando sonhos em realidade através da elegância e do atendimento acolhedor em Santa Rosa de Viterbo.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.url} 
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-500 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[4px] text-gold font-semibold">Navegação</h4>
            <nav className="flex flex-col gap-5">
              <Link href="#moda-feminina" className="text-white/60 hover:text-white text-sm transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-4 h-[1px] bg-gold mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                Moda Feminina
              </Link>
              <Link href="#trajes-masculinos" className="text-white/60 hover:text-white text-sm transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-4 h-[1px] bg-gold mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                Trajes Masculinos
              </Link>
              <Link href="#nossa-historia" className="text-white/60 hover:text-white text-sm transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-4 h-[1px] bg-gold mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                Nossa História
              </Link>
              <Link href="#prova-social" className="text-white/60 hover:text-white text-sm transition-colors duration-300 flex items-center group">
                <span className="w-0 group-hover:w-4 h-[1px] bg-gold mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                Depoimentos
              </Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[4px] text-gold font-semibold">Contato</h4>
            <div className="space-y-6 text-sm text-white/60 font-light">
              <div className="flex gap-4">
                <div className="text-gold mt-1 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <p>
                  Rua Santo Elías, 236<br/>
                  Santa Rosa de Viterbo - SP<br/>
                  CEP: 14270-000
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="text-gold shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <p>(16) 99106-2118</p>
              </div>
            </div>
          </div>

          {/* Quick Schedule CTA */}
          <div className="bg-white/5 p-8 rounded-lg border border-white/5 space-y-6">
             <h4 className="font-serif text-xl text-white italic">Garanta seu horário</h4>
             <p className="text-xs text-white/40 leading-relaxed font-light">
                Agende uma visita e experimente nossos trajes com exclusividade.
             </p>
             <Link 
                href="https://wa.me/5516991062118?text=Olá, gostaria de agendar um horário na Margarida Moda Festa!"
                target="_blank"
                className="block text-center bg-white text-primary py-4 text-[0.65rem] uppercase tracking-[3px] font-bold transition-all duration-500 hover:bg-gold hover:text-white"
             >
                Agendar pelo WhatsApp
             </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
           <p className="text-[0.6rem] uppercase tracking-[4px] text-white/30 font-light">
              © {currentYear} Margarida Moda Festa. Todos os direitos reservados.
           </p>
           <div className="flex gap-12 text-[0.6rem] uppercase tracking-[3px] text-white/20 font-bold">
              <span>Santa Rosa de Viterbo / SP</span>
              <span className="text-gold/40 tracking-normal">Premium Boutique</span>
           </div>
        </div>
      </div>
    </footer>
  );
}

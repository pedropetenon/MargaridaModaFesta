"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, Phone, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

export function NewsletterSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulating API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section className="py-24 bg-[#F9F9F9] border-t border-gold/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-10 md:p-16 shadow-2xl relative overflow-hidden luxury-frame !p-2">
            <div className="bg-white p-8 md:p-12 h-full w-full">
                {status === "success" ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                    >
                        <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" />
                        <h3 className="font-serif text-3xl text-primary mb-4">Inscrição Confirmada!</h3>
                        <p className="text-secondary font-light">Obrigada por se juntar à nossa lista exclusiva. Em breve você receberá nossas novidades.</p>
                        <button 
                            onClick={() => setStatus("idle")}
                            className="mt-8 text-gold text-xs uppercase tracking-widest font-bold border-b border-gold pb-1 hover:text-primary hover:border-primary transition-all"
                        >
                            Voltar
                        </button>
                    </motion.div>
                ) : (
                    <>
                    <Reveal>
                        <div className="text-center mb-12">
                        <span className="text-gold text-[0.6rem] uppercase tracking-[6px] font-bold mb-4 block">Fique por dentro</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4 tracking-tight">Newsletter Exclusiva</h2>
                        <p className="text-secondary/70 font-light max-w-md mx-auto">
                            Receba em primeira mão nossas novas coleções, editoriais de moda e convites para eventos especiais.
                        </p>
                        </div>
                    </Reveal>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Reveal delay={0.1} y={20}>
                            <div className="relative group">
                                <label className="text-[0.6rem] uppercase tracking-widest text-gold font-bold mb-2 block ml-1">Nome Completo</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 group-focus-within:text-gold transition-colors" />
                                    <input 
                                        required
                                        type="text"
                                        placeholder="Ex: Maria Silvia"
                                        className="w-full bg-[#FDFDFD] border border-gold/20 py-4 pl-12 pr-4 text-sm font-light focus:outline-none focus:border-gold transition-all"
                                    />
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2} y={20}>
                            <div className="relative group">
                                <label className="text-[0.6rem] uppercase tracking-widest text-gold font-bold mb-2 block ml-1">Celular / WhatsApp</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 group-focus-within:text-gold transition-colors" />
                                    <input 
                                        required
                                        type="tel"
                                        placeholder="(00) 00000-0000"
                                        className="w-full bg-[#FDFDFD] border border-gold/20 py-4 pl-12 pr-4 text-sm font-light focus:outline-none focus:border-gold transition-all"
                                    />
                                </div>
                            </div>
                        </Reveal>
                        </div>

                        <Reveal delay={0.3} y={20}>
                        <div className="relative group">
                            <label className="text-[0.6rem] uppercase tracking-widest text-gold font-bold mb-2 block ml-1">E-mail</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 group-focus-within:text-gold transition-colors" />
                                <input 
                                    required
                                    type="email"
                                    placeholder="seuemail@exemplo.com"
                                    className="w-full bg-[#FDFDFD] border border-gold/20 py-4 pl-12 pr-4 text-sm font-light focus:outline-none focus:border-gold transition-all"
                                />
                            </div>
                        </div>
                        </Reveal>

                        <Reveal delay={0.4} y={20}>
                        <button 
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full bg-primary text-white py-5 text-[0.7rem] uppercase tracking-[4px] font-bold hover:bg-gold transition-all duration-500 shadow-xl disabled:opacity-50 relative overflow-hidden group"
                        >
                            <span className={status === "submitting" ? "opacity-0" : "opacity-100"}>
                                Inscrever-se Agora
                            </span>
                            {status === "submitting" && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                </div>
                            )}
                        </button>
                        </Reveal>
                    </form>
                    </>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}

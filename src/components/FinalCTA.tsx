import React from 'react';
import { MessageSquare, Scissors, MapPin } from 'lucide-react';
import { createWhatsAppLink, FULL_ADDRESS } from '../data/barbeariaData';

export const FinalCTA: React.FC = () => {
  const finalWhatsAppUrl = createWhatsAppLink('Olá! Gostaria de agendar meu horário na Barbearia Friends.');

  return (
    <section className="py-24 bg-[#0b0c0e] relative overflow-hidden border-t border-white/10">
      {/* Background Ambience Layer */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="/images/hero.jpg"
          alt="Barbearia Friends"
          className="w-full h-full object-cover filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/90 to-[#0b0c0e]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center mx-auto mb-8 shadow-xl">
          <Scissors className="w-7 h-7 text-emerald-400" />
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#116928] mb-4">
          <span>Pronto para renovar o visual?</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-6 [text-wrap:balance]">
          Seu próximo corte começa aqui.
        </h2>

        <p className="text-zinc-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal [text-wrap:balance]">
          Ambiente climatizado, atendimento acolhedor e profissionais dedicados ao seu estilo em Piabetá.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={finalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-wider uppercase text-white bg-[#116928] hover:bg-[#0e5621] rounded-xl transition-all shadow-xl shadow-[#116928]/30 hover:shadow-[#116928]/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <MessageSquare className="w-5 h-5 fill-white/20" />
            <span>Agendar pelo WhatsApp</span>
          </a>

          <a
            href="#servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wider uppercase text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all active:scale-[0.98]"
          >
            Ver todos os serviços
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <MapPin className="w-3.5 h-3.5 text-[#116928]" />
          <span>Av. Roberto da Silveira, 353 · Piabetá, Magé - RJ</span>
        </div>
      </div>
    </section>
  );
};

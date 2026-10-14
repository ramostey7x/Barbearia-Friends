import React from 'react';
import { MessageSquare, ArrowDown, MapPin, Clock, Sparkles } from 'lucide-react';
import { createWhatsAppLink, FULL_ADDRESS } from '../data/barbeariaData';

export const Hero: React.FC = () => {
  const heroWhatsApp = createWhatsAppLink('Olá! Gostaria de consultar um horário na Barbearia Friends.');

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with layered cinematic contrast scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Interior sofisticado da Barbearia Friends com cadeiras clássicas de barbeiro e iluminação acolhedora"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial and gradient overlays to guarantee WCAG AA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/75 to-[#0b0c0e]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0b0c0e]/50 to-[#0b0c0e]" />
      </div>

      {/* Subtle red accent line on top honoring the brand identity */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c92a2a]/60 to-transparent z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
        {/* Quiet unboxed location & domain metadata */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-300 mb-6 tracking-wide">
          <span className="flex items-center gap-1.5 text-zinc-200">
            <MapPin className="w-3.5 h-3.5 text-[#116928]" />
            Piabetá, Magé - RJ
          </span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span>Cortes, Barba & Cuidados</span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="text-zinc-300">Ambiente Descontraído</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.1] mb-6 max-w-4xl [text-wrap:balance]">
          Seu estilo começa no cuidado com <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">cada detalhe</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal [text-wrap:balance]">
          Cortes, barba e cuidados masculinos em um ambiente sofisticado e descontraído, em Piabetá.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={heroWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-wider uppercase text-white bg-[#116928] hover:bg-[#0e5621] rounded-lg transition-all shadow-lg shadow-[#116928]/30 hover:shadow-[#116928]/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-5 h-5 fill-white/20" />
            <span>Agendar pelo WhatsApp</span>
          </a>

          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 rounded-lg transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 whitespace-nowrap shrink-0"
          >
            <span>Conhecer serviços</span>
            <ArrowDown className="w-4 h-4 text-zinc-400" />
          </a>
        </div>

        {/* Fast Value Markers Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">Cortes Especializados</div>
            <div className="text-sm font-medium text-white">Curto, Médio & Tesoura</div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">Barbaterapia</div>
            <div className="text-sm font-medium text-white">Toalha Quente & Hidratação</div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">Atendimento Infantil</div>
            <div className="text-sm font-medium text-white">De 0 a 11 anos com paciência</div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">Visagismo</div>
            <div className="text-sm font-medium text-white">Harmonização para o seu rosto</div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { SERVICES_LIST, getServiceBookingLink, ServiceItem } from '../data/barbeariaData';
import { MessageSquare, Sparkles, Check, Scissors } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'cortes' | 'barba' | 'combos'>('todos');

  const filteredServices =
    activeCategory === 'todos'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-24 bg-[#0b0c0e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#116928] mb-3">
            <span>Tabela de Atendimento</span>
            <span aria-hidden="true">·</span>
            <span>Preços Claros & Transparentes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight [text-wrap:balance]">
            Serviços e Preços
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            Cortes com precisão, rituais completos de barba e combos combinados pensados para o seu bem-estar diário.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#14161b] border border-white/10 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('todos')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'todos'
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Todos os Serviços (14)
            </button>
            <button
              onClick={() => setActiveCategory('cortes')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'cortes'
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Cortes
            </button>
            <button
              onClick={() => setActiveCategory('barba')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'barba'
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Barba & Cuidados
            </button>
            <button
              onClick={() => setActiveCategory('combos')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'combos'
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Combos
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isHighlight = service.highlight;
            const bookingUrl = getServiceBookingLink(service.name, service.price);

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-6 rounded-2xl transition-all duration-200 relative ${
                  isHighlight
                    ? 'bg-gradient-to-b from-[#181d19] to-[#121516] border-2 border-[#116928] shadow-xl shadow-[#116928]/15'
                    : 'bg-[#121418] border border-white/10 hover:border-white/20 hover:bg-[#16181e]'
                }`}
              >
                {/* Subtle top indicator for Highlight Combo */}
                {isHighlight && (
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Destaque Exclusivo</span>
                  </div>
                )}

                <div>
                  {/* Category breadcrumb metadata */}
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-2">
                    {service.category === 'cortes' && 'Cabelo & Visagismo'}
                    {service.category === 'barba' && 'Barba & Rituais'}
                    {service.category === 'combos' && 'Experiência Completa'}
                  </div>

                  {/* Title & Price Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase leading-snug">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer with Price and WhatsApp Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider">Investimento</span>
                    <span className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                      {service.price}
                    </span>
                  </div>

                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all whitespace-nowrap shrink-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 ${
                      isHighlight
                        ? 'bg-[#116928] hover:bg-[#0e5621] text-white shadow-md shadow-[#116928]/30 focus-visible:ring-emerald-400'
                        : 'bg-white/10 hover:bg-[#116928] text-white hover:text-white focus-visible:ring-[#116928]'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                    <span>Solicitar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice note for custom visagismo */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-zinc-400 max-w-2xl mx-auto">
          Valores informados para atendimento presencial na unidade de Piabetá. Horários e agendamentos sujeitos à disponibilidade da equipe via WhatsApp.
        </div>
      </div>
    </section>
  );
};

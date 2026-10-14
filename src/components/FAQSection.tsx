import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS, createWhatsAppLink } from '../data/barbeariaData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsAppGeneral = createWhatsAppLink('Olá! Gostaria de tirar uma dúvida sobre a Barbearia Friends.');

  return (
    <section id="faq" className="py-24 bg-[#0b0c0e] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#116928] mb-3">
            <span>Dúvidas Frequentes</span>
            <span aria-hidden="true">·</span>
            <span>Informações Verificadas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight [text-wrap:balance]">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            Respostas diretas e transparentes sobre os serviços, valores e localização da Barbearia Friends em Piabetá.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#14161b] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#116928]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white uppercase leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-sm text-zinc-400 mb-4">
            Ainda tem alguma dúvida específica ou gostaria de consultar horários em um dia especial?
          </p>
          <a
            href={whatsAppGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide uppercase text-white bg-white/10 hover:bg-[#116928] transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
            <span>Falar com a Barbearia no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

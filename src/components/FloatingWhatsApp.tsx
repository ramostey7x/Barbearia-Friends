import React from 'react';
import { MessageSquare } from 'lucide-react';
import { createWhatsAppLink } from '../data/barbeariaData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsAppUrl = createWhatsAppLink('Olá! Gostaria de consultar um horário na Barbearia Friends.');

  return (
    <aside aria-label="Atendimento rápido pelo WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#116928] hover:bg-[#0e5621] text-white rounded-full shadow-xl shadow-black/50 hover:shadow-[#116928]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Agendar horário no WhatsApp da Barbearia Friends"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 fill-white/20 text-white" />
        </div>
        <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider whitespace-nowrap">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
};

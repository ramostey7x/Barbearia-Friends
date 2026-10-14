import React, { useState } from 'react';
import { MessageSquare, Menu, X, Scissors } from 'lucide-react';
import { createWhatsAppLink } from '../data/barbeariaData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultWhatsAppMsg = 'Olá! Gostaria de consultar um horário na Barbearia Friends.';
  const whatsAppLink = createWhatsAppLink(defaultWhatsAppMsg);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0c0e]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#inicio"
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#116928]"
        >
          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-[#116928]/60 transition-colors">
            <Scissors className="w-5 h-5 text-white/90 group-hover:text-emerald-400 transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase">
              Barbearia <span className="text-[#116928] group-hover:text-emerald-400 transition-colors">Friends</span>
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a
            href="#inicio"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#116928] hover:after:w-full after:transition-all"
          >
            Início
          </a>
          <a
            href="#servicos"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#116928] hover:after:w-full after:transition-all"
          >
            Serviços
          </a>
          <a
            href="#diferenciais"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#116928] hover:after:w-full after:transition-all"
          >
            Diferenciais
          </a>
          <a
            href="#sobre"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#116928] hover:after:w-full after:transition-all"
          >
            Sobre
          </a>
          <a
            href="#galeria"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#116928] hover:after:w-full after:transition-all"
          >
            Galeria
          </a>
          <a
            href="#contato"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#116928] hover:after:w-full after:transition-all"
          >
            Contato
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#116928] hover:bg-[#0e5621] rounded-lg transition-all shadow-sm hover:shadow-md hover:shadow-[#116928]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 fill-white/20" />
            <span>Agendar no WhatsApp</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#116928]"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0c0e] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            Início
          </a>
          <a
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            Serviços e Preços
          </a>
          <a
            href="#diferenciais"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            Diferenciais
          </a>
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            Sobre a Barbearia
          </a>
          <a
            href="#galeria"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            Galeria
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 rounded-md"
          >
            Localização e Horários
          </a>

          <div className="pt-2">
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold tracking-wide uppercase text-white bg-[#116928] hover:bg-[#0e5621] rounded-lg transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

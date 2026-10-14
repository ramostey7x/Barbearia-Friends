import React from 'react';
import { MessageSquareQuote, Instagram, Star, ExternalLink } from 'lucide-react';
import { INSTAGRAM_URL } from '../data/barbeariaData';

export const ReviewsPlaceholder: React.FC = () => {
  return (
    <section className="py-20 bg-[#0e1014] relative border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#14161b] border border-white/10 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mx-auto mb-6">
            <MessageSquareQuote className="w-6 h-6 text-emerald-400" />
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#116928] mb-3">
            <span>Transparência & Confiança</span>
            <span aria-hidden="true">·</span>
            <span>Experiência Real</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase mb-4 [text-wrap:balance]">
            Avaliações e Depoimentos de Clientes
          </h3>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Espaço reservado para exibição das avaliações e comentários reais dos clientes da Barbearia Friends no Google e Instagram. Acompanhe também os bastidores e fotos dos atendimentos em nosso perfil oficial.
          </p>

          <div className="inline-flex items-center justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/30 transition-all active:scale-[0.98]"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Acompanhe @barbeariafriends_</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

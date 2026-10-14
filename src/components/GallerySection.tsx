import React, { useState } from 'react';
import { Camera, Instagram, ExternalLink, Info, Check } from 'lucide-react';
import { INSTAGRAM_URL } from '../data/barbeariaData';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Ambiente Sofisticado',
    category: 'Estrutura & Conforto',
    image: '/images/hero.jpg',
    aspect: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: '2',
    title: 'Corte & Visagismo',
    category: 'Precisão na Tesoura',
    image: '/images/visagismo.jpg',
    aspect: 'col-span-1 row-span-1',
  },
  {
    id: '3',
    title: 'Ritual de Barbaterapia',
    category: 'Cuidado & Toalha Quente',
    image: '/images/barbaterapia.jpg',
    aspect: 'col-span-1 row-span-1',
  },
  {
    id: '4',
    title: 'Atendimento Infantil Especializado',
    category: 'Paciência & Estilo',
    image: '/images/infantil.jpg',
    aspect: 'col-span-1 md:col-span-2 row-span-1',
  },
];

export const GallerySection: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-[#0e1014] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#116928] mb-3">
              <span>Espaço Visual & Referências</span>
              <span aria-hidden="true">·</span>
              <span>Barbearia Friends</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight [text-wrap:balance]">
              Galeria de Cortes e Ambiente
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed [text-wrap:balance]">
              Uma prévia visual do padrão estético, das técnicas de visagismo e da atmosfera que preparamos para receber você em Piabetá.
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 transition-all whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>Ver no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Transparent Demonstration Disclaimer Note */}
        <div className="mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start sm:items-center gap-3 text-xs text-zinc-400">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
          <div>
            <strong className="text-zinc-200 font-semibold">Nota para a apresentação ao proprietário:</strong> As imagens abaixo são demonstrações visuais em alta qualidade para ilustrar a composição final do website. A galeria está 100% preparada para receber as fotos oficiais e fotos de trabalhos dos barbeiros da Barbearia Friends.
          </div>
        </div>

        {/* Editorial Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Large Item: Barbershop Ambience */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 group min-h-[380px] sm:min-h-[440px]">
            <img
              src="/images/hero.jpg"
              alt="Ambiente acolhedor da barbearia com iluminação quente e poltronas confortáveis"
              className="w-full h-full object-cover object-center filter brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
                Estrutura & Conforto
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase mb-2">
                Ambiente Agradável e Sofisticado
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-lg">
                Espaço climatizado, som ambiente de bom gosto e detalhes pensados para um momento de relaxamento.
              </p>
            </div>
          </div>

          {/* Item 2: Scissor Cut & Visagismo */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group min-h-[260px]">
            <img
              src="/images/visagismo.jpg"
              alt="Barbeiro executando corte com técnica de visagismo e tesoura"
              className="w-full h-full object-cover object-center filter brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1 block">
                Cortes Curtos & Médios
              </span>
              <h3 className="font-display text-lg font-bold text-white uppercase">
                Visagismo Personalizado
              </h3>
            </div>
          </div>

          {/* Item 3: Hot Towel Barbaterapia */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group min-h-[260px]">
            <img
              src="/images/barbaterapia.jpg"
              alt="Tratamento facial com toalha quente e barbaterapia"
              className="w-full h-full object-cover object-center filter brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1 block">
                Técnicos em Barbas
              </span>
              <h3 className="font-display text-lg font-bold text-white uppercase">
                Ritual de Barbaterapia
              </h3>
            </div>
          </div>

          {/* Item 4: Kids Grooming (Span 2 cols on md) */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 group min-h-[260px]">
            <img
              src="/images/infantil.jpg"
              alt="Atendimento infantil paciente e atencioso com menino sorrindo"
              className="w-full h-full object-cover object-center filter brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1 block">
                Atendimento Infantil
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-1">
                Paciência e Cuidado com as Crianças
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Cortes de 0 a 11 anos realizados com dedicação e carinho para os pequenos ficarem sempre à vontade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

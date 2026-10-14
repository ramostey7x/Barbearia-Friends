import React from 'react';
import { Scissors, UserCheck, Sparkles, Smile, ShieldCheck, Heart } from 'lucide-react';
import { createWhatsAppLink } from '../data/barbeariaData';

export const DifferentialsSection: React.FC = () => {
  const whatsAppKids = createWhatsAppLink('Olá! Gostaria de consultar um horário para corte infantil na Barbearia Friends.');

  return (
    <section id="diferenciais" className="py-24 bg-[#0e1014] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#116928] mb-3">
            <span>Diferenciais Exclusivos</span>
            <span aria-hidden="true">·</span>
            <span>Identidade Barbearia Friends</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight [text-wrap:balance]">
            Por que escolher a Barbearia Friends em Piabetá
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            Mais do que um simples corte: uma experiência pensada para elevar sua autoestima e proporcionar conforto em cada detalhe.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Visagismo & Cortes Especializados (Span 2 cols on md) */}
          <div className="md:col-span-2 rounded-2xl bg-[#14161b] border border-white/10 overflow-hidden relative flex flex-col justify-between group">
            <div className="p-8 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-[#116928] transition-colors">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">Técnica & Proporção</div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase mb-4 [text-wrap:balance]">
                Especialização em Cortes Curtos, Médios e Visagismo
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Nossos profissionais aplicam técnicas de visagismo para identificar a simetria do seu rosto, a direção natural dos fios e o corte ideal para a sua rotina, garantindo acabamentos nítidos e caimento impecável.
              </p>
            </div>
            <div className="relative h-64 sm:h-72 w-full overflow-hidden border-t border-white/10">
              <img
                src="/images/visagismo.jpg"
                alt="Profissional realizando corte com visagismo e tesoura"
                className="w-full h-full object-cover object-center filter brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-transparent to-transparent" />
            </div>
          </div>

          {/* Card 2: Técnicos em Barbas & Barbaterapia */}
          <div className="rounded-2xl bg-[#14161b] border border-white/10 p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-[#116928] transition-colors">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">Cuidados Faciais</div>
              <h3 className="font-display text-2xl font-bold text-white uppercase mb-4">
                Técnicos em Barbas
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Tratamento profundo com barbaterapia, toalhas aquecidas para abertura dos poros, óleos emolientes e alinhamento milimétrico com navalhete esterilizado, prevenindo foliculite e irritação.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 h-44">
              <img
                src="/images/barbaterapia.jpg"
                alt="Demonstração visual do ritual de barbaterapia com toalha quente"
                className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 3: Atendimento Infantil com Paciência */}
          <div className="rounded-2xl bg-[#14161b] border border-white/10 p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-[#116928] transition-colors">
                <Heart className="w-6 h-6 text-rose-400" />
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">Paciência & Carinho</div>
              <h3 className="font-display text-2xl font-bold text-white uppercase mb-4">
                Atenção Especial ao Público Infantil
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                A Barbearia Friends gosta de atender crianças! Espaço seguro e atendimento calmo tanto para os primeiros cortes (0 a 6 anos) quanto para os jovens de 7 a 11 anos.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 h-44">
              <img
                src="/images/infantil.jpg"
                alt="Criança sorridente recebendo atendimento amigável na barbearia"
                className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 4: Ambiente Sofisticado e Descontraído (Span 2 cols on md) */}
          <div className="md:col-span-2 rounded-2xl bg-[#14161b] border border-white/10 p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-[#116928] transition-colors">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">Experiência do Cliente</div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase mb-4 [text-wrap:balance]">
                Ambiente Agradável, Sofisticado e Descontraído
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                Estrutura pensada para oferecer o máximo de comodidade enquanto você cuida do visual. Climatização confortável, iluminação planejada, poltronas confortáveis e aquele clima amistoso que faz jus ao nome da casa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#116928]" />
                <span>Localização central em Piabetá</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#116928]" />
                <span>Horários de terça a sábado</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#116928]" />
                <span>Agendamento facilitado via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

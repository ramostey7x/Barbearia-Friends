import React from 'react';
import { Scissors, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { FULL_ADDRESS } from '../data/barbeariaData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0b0c0e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official Logo Space & Visual Stamp */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="w-full max-w-md p-8 sm:p-12 rounded-2xl bg-[#14161b] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center">
              {/* Subtle top indicator border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#116928]" />

              {/* Logo Area */}
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mb-6 shadow-inner">
                <Scissors className="w-10 h-10 text-white" />
              </div>

              <div className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider text-white uppercase mb-2">
                Barbearia <span className="text-[#116928]">Friends</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-6 font-semibold">
                Piabetá · Magé · Rio de Janeiro
              </p>

              <div className="w-16 h-[1px] bg-white/20 mb-6" />

              <p className="text-xs text-zinc-400 leading-relaxed italic">
                “Mais do que uma barbearia: alta qualidade, sofisticação e conforto para o público masculino.”
              </p>

              <div className="mt-8 pt-4 border-t border-white/10 w-full text-[11px] text-zinc-400 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-600" />
                <span>Espaço preparado para inserção da logo oficial</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Brand Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#116928] mb-3">
              <span>Nossa Identidade & Propósito</span>
              <span aria-hidden="true">·</span>
              <span>Barbearia Friends</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-8 [text-wrap:balance]">
              Mais do que uma barbearia, um ponto de encontro e cuidado pessoal
            </h2>

            <div className="space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                A <strong className="text-white font-semibold">Barbearia Friends</strong> nasceu com a missão de ir além do conceito tradicional de barbearia: proporcionamos ao público masculino um atendimento de alta qualidade em um ambiente verdadeiramente agradável, sofisticado e descontraído.
              </p>

              <p>
                Localizada na principal via de acesso de Piabetá, a nossa barbearia reúne profissionais especializados em cortes curtos e médios, técnicas avançadas de visagismo facial e cuidados detalhados com a barba, oferecendo rituais completos de barbaterapia.
              </p>

              <p>
                Além disso, temos uma atenção especial e muito carinho pelo público infantil. Sabemos o quanto a paciência e a empatia são essenciais para transformar o momento do corte em uma experiência leve e divertida para as crianças e suas famílias.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Padrão de Higiene & Conforto</h4>
                  <p className="text-xs text-zinc-400 mt-1">Instrumentos esterilizados e toalhas higienizadas a cada atendimento.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-[#116928]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Localização Privilegiada</h4>
                  <p className="text-xs text-zinc-400 mt-1">Av. Roberto da Silveira, 353 — fácil acesso no coração de Piabetá.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

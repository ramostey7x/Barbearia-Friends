import React, { useState } from 'react';
import { MessageSquare, Calendar, Clock, CheckCircle2, User, Sparkles } from 'lucide-react';
import { SERVICES_LIST, createWhatsAppLink, WHATSAPP_PHONE_FORMATTED } from '../data/barbeariaData';

export const HowToBookSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0].id);
  const [selectedDay, setSelectedDay] = useState<string>('Qualquer dia disponível');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Manhã ou tarde');
  const [clientName, setClientName] = useState<string>('');

  const selectedService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  // Build tailored WhatsApp message
  const personalizedMessage = `Olá! Gostaria de consultar um horário na Barbearia Friends.${
    clientName.trim() ? ` Me chamo ${clientName.trim()}.` : ''
  } Tenho interesse no serviço: ${selectedService.name} (${selectedService.price}). Preferência de dia: ${selectedDay} (${selectedPeriod}).`;

  const dynamicWhatsAppUrl = createWhatsAppLink(personalizedMessage);

  return (
    <section id="agendamento" className="py-24 bg-[#0b0c0e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#116928] mb-3">
            <span>Passo a Passo Simples</span>
            <span aria-hidden="true">·</span>
            <span>Sem Burocracia</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight [text-wrap:balance]">
            Como Solicitar seu Horário
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            O atendimento na Barbearia Friends é humanizado e direto. Combine seu horário de forma rápida pelo WhatsApp com a nossa equipe.
          </p>
        </div>

        {/* 3 Simple Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="p-8 rounded-2xl bg-[#14161b] border border-white/10 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono font-bold text-lg mb-6">
                01
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-3">
                Escolha o Serviço Desejado
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Consulte nossa lista completa de cortes, rituais de barbaterapia ou combos para escolher o cuidado ideal para o seu dia.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-zinc-400">
              14 opções com preços transparentes
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-2xl bg-[#14161b] border border-white/10 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#116928] font-mono font-bold text-lg mb-6">
                02
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-3">
                Envie Mensagem no WhatsApp
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Clique nos botões do site para iniciar a conversa com uma mensagem já formatada com o serviço que você quer fazer.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-zinc-400">
              Número oficial: {WHATSAPP_PHONE_FORMATTED}
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-2xl bg-[#14161b] border border-white/10 relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono font-bold text-lg mb-6">
                03
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase mb-3">
                Combine o Dia e Horário
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Nossa equipe responde verificando os horários vagos de terça a sábado para encaixar o melhor momento na sua rotina.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-zinc-400">
              Atendimento de terça a sábado
            </div>
          </div>
        </div>

        {/* Direct WhatsApp Generator Box */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#14161b] border-2 border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-[#116928]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agendamento Prático</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white uppercase">
              Monte sua Mensagem de Agendamento
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Personalize o serviço e a preferência de dia para enviar diretamente no WhatsApp da barbearia.
            </p>
          </div>

          <div className="space-y-4">
            {/* Service selector */}
            <div>
              <label htmlFor="service-select" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Selecione o Serviço
              </label>
              <select
                id="service-select"
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full bg-[#0b0c0e] border border-white/15 focus:border-[#116928] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#116928] transition-colors"
              >
                {SERVICES_LIST.map((srv) => (
                  <option key={srv.id} value={srv.id} className="bg-[#14161b] text-white">
                    {srv.name} — {srv.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Grid with Day & Period */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="day-select" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Preferência de Dia (Terça a Sábado)
                </label>
                <select
                  id="day-select"
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full bg-[#0b0c0e] border border-white/15 focus:border-[#116928] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#116928] transition-colors"
                >
                  <option value="Qualquer dia disponível">Qualquer dia disponível</option>
                  <option value="Terça-feira (10h às 20h)">Terça-feira (10h às 20h)</option>
                  <option value="Quarta-feira (10h às 20h)">Quarta-feira (10h às 20h)</option>
                  <option value="Quinta-feira (9h às 20h)">Quinta-feira (9h às 20h)</option>
                  <option value="Sexta-feira (9h às 20h)">Sexta-feira (9h às 20h)</option>
                  <option value="Sábado (9h às 20h)">Sábado (9h às 20h)</option>
                </select>
              </div>

              <div>
                <label htmlFor="period-select" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Preferência de Horário
                </label>
                <select
                  id="period-select"
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="w-full bg-[#0b0c0e] border border-white/15 focus:border-[#116928] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#116928] transition-colors"
                >
                  <option value="Pela manhã">Pela manhã</option>
                  <option value="À tarde">À tarde</option>
                  <option value="No final do dia (após 18h)">No final do dia (após 18h)</option>
                  <option value="Horário flexível">Horário flexível</option>
                </select>
              </div>
            </div>

            {/* Client name (optional) */}
            <div>
              <label htmlFor="client-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Seu Nome (opcional)
              </label>
              <input
                id="client-name"
                type="text"
                placeholder="Ex: Carlos Santos"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-[#0b0c0e] border border-white/15 focus:border-[#116928] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#116928] transition-colors"
              />
            </div>

            {/* Preview of the message */}
            <div className="p-3 rounded-lg bg-[#0b0c0e] border border-white/10 text-xs text-zinc-400">
              <span className="text-zinc-500 font-semibold block mb-1">Prévia da mensagem que será enviada:</span>
              <p className="italic text-zinc-300 font-mono text-[11px] leading-relaxed">
                "{personalizedMessage}"
              </p>
            </div>

            {/* Direct WhatsApp Call Button */}
            <div className="pt-2">
              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold tracking-wider uppercase text-white bg-[#116928] hover:bg-[#0e5621] rounded-xl transition-all shadow-lg shadow-[#116928]/30 hover:shadow-[#116928]/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageSquare className="w-5 h-5 fill-white/20" />
                <span>Enviar Solicitação no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

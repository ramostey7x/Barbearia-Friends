import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  ExternalLink,
  Copy,
  Check,
  MessageSquare,
  Navigation,
} from 'lucide-react';
import {
  FULL_ADDRESS,
  WHATSAPP_PHONE_FORMATTED,
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  GOOGLE_MAPS_URL,
  BUSINESS_HOURS,
  createWhatsAppLink,
} from '../data/barbeariaData';

export const ContactLocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(FULL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactWhatsApp = createWhatsAppLink('Olá! Gostaria de consultar um horário na Barbearia Friends.');

  return (
    <section id="contato" className="py-24 bg-[#0e1014] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#116928] mb-3">
            <span>Onde nos Encontrar</span>
            <span aria-hidden="true">·</span>
            <span>Atendimento Presencial</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight [text-wrap:balance]">
            Contato & Localização
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            Visite a Barbearia Friends no centro de Piabetá ou chame nossa equipe diretamente pelo WhatsApp para agendar seu corte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14161b] border border-white/10 flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
                  <MapPin className="w-6 h-6 text-[#116928]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                    Endereço Oficial
                  </div>
                  <h3 className="font-display text-xl font-bold text-white uppercase mb-2">
                    Piabetá, Magé - Rio de Janeiro
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed break-words">
                    {FULL_ADDRESS}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Endereço copiado!' : 'Copiar endereço'}</span>
                </button>
              </div>
            </div>

            {/* Contacts & Social Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* WhatsApp */}
              <a
                href={contactWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#14161b] border border-white/10 hover:border-[#116928]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                    WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-white break-words">
                    {WHATSAPP_PHONE_FORMATTED}
                  </span>
                </div>
                <div className="mt-4 pt-2 border-t border-white/5 text-[11px] text-[#116928] group-hover:text-emerald-400 font-medium flex items-center gap-1">
                  <span>Chamar agora</span>
                  <span>→</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#14161b] border border-white/10 hover:border-pink-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-pink-950/40 border border-pink-800/40 flex items-center justify-center text-pink-400 mb-3 group-hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                    Instagram
                  </span>
                  <span className="text-sm font-semibold text-white break-words">
                    @barbeariafriends_
                  </span>
                </div>
                <div className="mt-4 pt-2 border-t border-white/5 text-[11px] text-pink-400 font-medium flex items-center gap-1">
                  <span>Ver perfil</span>
                  <span>→</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="p-5 rounded-xl bg-[#14161b] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-3 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                    E-mail
                  </span>
                  <span className="text-xs font-semibold text-zinc-200 break-all leading-tight">
                    {EMAIL_ADDRESS}
                  </span>
                </div>
                <div className="mt-4 pt-2 border-t border-white/5 text-[11px] text-zinc-400 group-hover:text-white font-medium flex items-center gap-1">
                  <span>Enviar mensagem</span>
                  <span>→</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Working Hours Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14161b] border border-white/10 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Clock className="w-5 h-5 text-[#116928]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    Atendimento Semanal
                  </div>
                  <h3 className="font-display text-xl font-bold text-white uppercase">
                    Horário de Funcionamento
                  </h3>
                </div>
              </div>

              {/* Verified Days Only */}
              <div className="divide-y divide-white/5">
                {BUSINESS_HOURS.map((item, idx) => (
                  <div key={idx} className="py-3.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-300">{item.day}</span>
                    <span className="font-mono text-white font-semibold tabular-nums">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-400 leading-relaxed">
                <span className="text-zinc-300 font-medium">Observação:</span> Atendimento de terça a sábado nos horários listados acima. Horários para feriados sob consulta via WhatsApp.
              </div>

              <div className="mt-6">
                <a
                  href={contactWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-[#116928] hover:bg-[#0e5621] transition-all shadow-md shadow-[#116928]/20"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Consultar Disponibilidade</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

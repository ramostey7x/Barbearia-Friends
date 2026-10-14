import React from 'react';
import { Scissors, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import {
  FULL_ADDRESS,
  WHATSAPP_PHONE_FORMATTED,
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  BUSINESS_HOURS,
  createWhatsAppLink,
} from '../data/barbeariaData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsAppLink = createWhatsAppLink('Olá! Gostaria de consultar um horário na Barbearia Friends.');

  return (
    <footer className="bg-[#08090b] text-zinc-400 text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <Scissors className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-display text-lg font-bold tracking-wider text-white uppercase">
                Barbearia <span className="text-[#116928]">Friends</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Mais do que uma barbearia, proporcionando ao público masculino um serviço de alta qualidade, em um ambiente agradável, sofisticado e descontraído.
            </p>

            <div className="pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@barbeariafriends_</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços e Preços
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Barbearia
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-white transition-colors">
                  Como Agendar
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Horários de Atendimento (Terça a Sábado) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#116928]" />
              <span>Horários</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {BUSINESS_HOURS.map((h, i) => (
                <li key={i} className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-zinc-400">{h.day}</span>
                  <span className="text-zinc-200 font-mono tabular-nums">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Endereço & Contato */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Unidade Piabetá
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#116928] shrink-0 mt-0.5" />
                <span className="text-zinc-300">{FULL_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#116928] shrink-0" />
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {WHATSAPP_PHONE_FORMATTED}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#116928] shrink-0" />
                <span className="text-zinc-300 break-all">{EMAIL_ADDRESS}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#116928] hover:bg-[#0e5621] rounded-lg transition-colors"
              >
                <span>Agendar Horário</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {currentYear} Barbearia Friends. Todos os direitos reservados.
          </div>
          <div>
            Piabetá, Magé - RJ
          </div>
        </div>
      </div>
    </footer>
  );
};

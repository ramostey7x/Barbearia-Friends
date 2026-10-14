export interface ServiceItem {
  id: string;
  name: string;
  category: 'cortes' | 'barba' | 'combos';
  price: string;
  priceNumeric: number | null;
  description: string;
  highlight?: boolean;
}

export const WHATSAPP_PHONE_RAW = '021976821108';
export const WHATSAPP_PHONE_CLEAN = '5521976821108'; // 55 + 21 + 976821108
export const WHATSAPP_PHONE_FORMATTED = '(21) 97682-1108';
export const INSTAGRAM_URL = 'https://www.instagram.com/barbeariafriends_/';
export const EMAIL_ADDRESS = 'barbeariafriends.contato@gmail.com';
export const FULL_ADDRESS = 'Av. Roberto da Silveira, 353 - Piabetá, Magé - RJ, 25903-587';
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Roberto+da+Silveira,+353+-+Piabet%C3%A1,+Mag%C3%A9+-+RJ,+25903-587';

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_CLEAN}?text=${encodeURIComponent(message)}`;
}

export function getServiceBookingLink(serviceName: string, price: string): string {
  return createWhatsAppLink(
    `Olá! Gostaria de consultar um horário na Barbearia Friends para o serviço: ${serviceName} (${price}).`
  );
}

export const SERVICES_LIST: ServiceItem[] = [
  // CORTES
  {
    id: 'corte-cabelo',
    name: 'Corte de cabelo',
    category: 'cortes',
    price: 'R$ 55',
    priceNumeric: 55,
    description: 'Corte masculino personalizado, com acabamento alinhado ao seu estilo e textura dos fios.',
  },
  {
    id: 'corte-tesoura',
    name: 'Corte de cabelo com tesoura',
    category: 'cortes',
    price: 'R$ 55',
    priceNumeric: 55,
    description: 'Executado inteiramente na tesoura para caimento orgânico, movimento e precisão nos fios médios e longos.',
  },
  {
    id: 'corte-visagismo',
    name: 'Corte com visagismo',
    category: 'cortes',
    price: 'Valor a consultar',
    priceNumeric: null,
    description: 'Avaliação personalizada das proporções faciais e perfil individual para definir o formato de corte mais harmônico.',
  },
  {
    id: 'corte-infantil-0-6',
    name: 'Corte infantil (0 a 6 anos)',
    category: 'cortes',
    price: 'R$ 55',
    priceNumeric: 55,
    description: 'Atendimento com paciência e cuidado para que os primeiros cortes das crianças sejam uma experiência agradável e tranquila.',
  },
  {
    id: 'corte-infantil-7-11',
    name: 'Corte infantil (7 a 11 anos)',
    category: 'cortes',
    price: 'R$ 55',
    priceNumeric: 55,
    description: 'Cortes modernos e adaptados à rotina escolar e ao estilo próprio de crianças e pré-adolescentes.',
  },
  {
    id: 'corte-sobrancelha',
    name: 'Corte de cabelo + Sobrancelha',
    category: 'cortes',
    price: 'R$ 65',
    priceNumeric: 65,
    description: 'Corte de cabelo completo acompanhado da limpeza e alinhamento das sobrancelhas para um visual harmonizado.',
  },

  // BARBA E CUIDADOS
  {
    id: 'barbaterapia',
    name: 'Barbaterapia',
    category: 'barba',
    price: 'R$ 50',
    priceNumeric: 50,
    description: 'Tratamento clássico com aplicação de toalha quente, hidratação da pele e desenho preciso da barba.',
  },
  {
    id: 'barbaterapia-pezinho',
    name: 'Barbaterapia + Pezinho',
    category: 'barba',
    price: 'R$ 60',
    priceNumeric: 60,
    description: 'Sessão de barbaterapia completa combinada com a definição e alinhamento do contorno do pezinho do cabelo.',
  },
  {
    id: 'ritual-barbaterapia-esfoliacao',
    name: 'Ritual de Cuidado: Barbaterapia + Esfoliação',
    category: 'barba',
    price: 'R$ 90',
    priceNumeric: 90,
    description: 'Higienização e esfoliação cutânea para desobstrução dos poros aliada ao conforto da barbaterapia.',
  },

  // COMBOS
  {
    id: 'combo-corte-barbaterapia',
    name: 'Combo: Corte de cabelo + Barbaterapia',
    category: 'combos',
    price: 'R$ 85',
    priceNumeric: 85,
    description: 'Cuidado integrado de corte de cabelo e barbaterapia completa em uma única visita.',
  },
  {
    id: 'combo-corte-barbaterapia-sobrancelha',
    name: 'Combo: Corte de cabelo + Barbaterapia + Sobrancelha',
    category: 'combos',
    price: 'R$ 90',
    priceNumeric: 90,
    description: 'Alinhamento integral do corte, barba tratada e sobrancelhas aparadas com naturalidade.',
  },
  {
    id: 'combo-premium',
    name: 'Combo Premium: Corte + Barbaterapia + Esfoliamento + Máscara Negra',
    category: 'combos',
    price: 'R$ 125',
    priceNumeric: 125,
    highlight: true,
    description: 'Experiência mais completa de autocuidado com corte, barbaterapia, esfoliamento facial e aplicação de máscara negra.',
  },
  {
    id: 'combo-corte-barba-esfoliacao-sobrancelha',
    name: 'Combo: Corte de cabelo + Barbaterapia + Esfoliação + Sobrancelha',
    category: 'combos',
    price: 'R$ 100',
    priceNumeric: 100,
    description: 'Cuidado facial e capilar amplo reunindo corte, barbaterapia, renovação esfoliante e sobrancelhas.',
  },
  {
    id: 'ritual-cabelo-barbaterapia-esfoliacao',
    name: 'Ritual de Cuidado: Cabelo + Barbaterapia + Esfoliação',
    category: 'combos',
    price: 'R$ 95',
    priceNumeric: 95,
    description: 'Combinação balanceada de corte de cabelo, toalha quente com barbaterapia e esfoliação.',
  },
];

export const BUSINESS_HOURS = [
  { day: 'Terça-feira', hours: '10h às 20h' },
  { day: 'Quarta-feira', hours: '10h às 20h' },
  { day: 'Quinta-feira', hours: '9h às 20h' },
  { day: 'Sexta-feira', hours: '9h às 20h' },
  { day: 'Sábado', hours: '9h às 20h' },
];

export const DIFFERENTIALS = [
  {
    title: 'Cortes Curtos e Médios',
    subtitle: 'Precisão em cada linha',
    description: 'Especialização técnica em fades, degrades limpos, tesoura estruturada e texturizações sob medida.',
  },
  {
    title: 'Profissionais Visagistas',
    subtitle: 'Harmonia facial',
    description: 'Avaliação dos traços do seu rosto e formato craniano para valorizar sua imagem de forma única.',
  },
  {
    title: 'Técnicos em Barbas',
    subtitle: 'Cuidado e Barbaterapia',
    description: 'Técnicas com toalha quente, navalhete e produtos emolientes para conforto sem irritações na pele.',
  },
  {
    title: 'Atendimento Infantil',
    subtitle: 'Ambiente acolhedor',
    description: 'A barbearia gosta e se dedica ao atendimento de crianças de 0 a 11 anos com tranquilidade e paciência.',
  },
  {
    title: 'Ambiente Sofisticado',
    subtitle: 'Conforto e descontração',
    description: 'Um espaço pensado para o público masculino desacelerar, desfrutar de boa música e receber um atendimento atencioso.',
  },
];

export const FAQS = [
  {
    question: 'Quais serviços a Barbearia Friends oferece?',
    answer:
      'Oferecemos cortes de cabelo masculinos (máquina e tesoura), visagismo, atendimento infantil (0 a 11 anos), barbaterapia, esfoliação facial, máscara negra e combos combinados de cuidados.',
  },
  {
    question: 'Quanto custa um corte de cabelo?',
    answer:
      'O corte de cabelo tradicional custa R$ 55, e o corte feito inteiramente com tesoura também custa R$ 55. Para o corte com visagismo, o valor é sob consulta diretamente com a barbearia.',
  },
  {
    question: 'A barbearia atende crianças?',
    answer:
      'Sim! A Barbearia Friends gosta e tem dedicação especial ao atendimento infantil, oferecendo corte de 0 a 6 anos por R$ 55 e corte de 7 a 11 anos por R$ 55.',
  },
  {
    question: 'Como posso solicitar um horário?',
    answer:
      'Para solicitar um horário, basta clicar em qualquer um dos botões do WhatsApp no site ou chamar diretamente no número (21) 97682-1108 para verificar a disponibilidade de agenda.',
  },
  {
    question: 'Onde a barbearia está localizada?',
    answer:
      'Estamos localizados na Av. Roberto da Silveira, 353 - Piabetá, Magé - RJ, CEP 25903-587, em ponto de fácil acesso no centro de Piabetá.',
  },
  {
    question: 'Quais são os horários de funcionamento?',
    answer:
      'Atendemos de terça a sábado nos seguintes horários: Terça e Quarta das 10h às 20h; Quinta, Sexta e Sábado das 9h às 20h. Não abrimos aos domingos e segundas.',
  },
];

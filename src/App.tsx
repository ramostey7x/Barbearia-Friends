import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { HowToBookSection } from './components/HowToBookSection';
import { ReviewsPlaceholder } from './components/ReviewsPlaceholder';
import { FAQSection } from './components/FAQSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f2f2f3] font-sans selection:bg-[#116928] selection:text-white flex flex-col">
      {/* Top Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Dobra Principal */}
        <Hero />

        {/* 2. Serviços e Preços Transparentes */}
        <ServicesSection />

        {/* 3. Diferenciais Exclusivos (Visagismo, Cortes, Barba, Infantil, Ambiente) */}
        <DifferentialsSection />

        {/* 4. Sobre a Barbearia & Missão */}
        <AboutSection />

        {/* 5. Galeria de Cortes e Ambiente (Demonstração Editorial) */}
        <GallerySection />

        {/* 6. Como Solicitar Agendamento no WhatsApp */}
        <HowToBookSection />

        {/* 7. Avaliações (Espaço Reservado para o Google/Instagram) */}
        <ReviewsPlaceholder />

        {/* 8. Perguntas Frequentes (FAQ) */}
        <FAQSection />

        {/* 9. Localização em Piabetá & Contatos */}
        <ContactLocationSection />

        {/* 10. Chamada Final de Conversão */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}

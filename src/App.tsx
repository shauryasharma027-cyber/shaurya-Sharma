/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeaturedProject from './components/FeaturedProject';
import SocialMediaSection from './components/SocialMediaSection';
import WebDevSection from './components/WebDevSection';
import AIMarketingSection from './components/AIMarketingSection';
import ProcessSection from './components/ProcessSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CaseStudyModal from './components/CaseStudyModal';
import AdminPortal from './components/AdminPortal';
import { FEATURED_CASE_STUDY } from './data/agencyData';
import { ProjectItem } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [adminPortalOpen, setAdminPortalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [preselectedPlan, setPreselectedPlan] = useState<string | undefined>(undefined);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

  // Check URL hash or param for direct admin access e.g. #admin
  useEffect(() => {
    const checkAdminHash = () => {
      if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
        setAdminPortalOpen(true);
      }
    };
    checkAdminHash();
    window.addEventListener('hashchange', checkAdminHash);
    return () => window.removeEventListener('hashchange', checkAdminHash);
  }, []);

  const handleOpenProjectModal = (service?: string, plan?: string) => {
    setPreselectedService(service);
    setPreselectedPlan(plan);
    setProjectModalOpen(true);
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 noise-overlay selection:bg-cyan-500/20 selection:text-cyan-900">
      {/* Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Initial Page Loading Sequence */}
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}

      {/* Sticky Navigation Bar */}
      <Navbar onOpenProjectModal={() => handleOpenProjectModal()} />

      <main className="relative">
        {/* Hero Section */}
        <HeroSection
          onStartProject={() => handleOpenProjectModal()}
          onExploreWork={scrollToWork}
        />

        {/* Services Section */}
        <ServicesSection
          onSelectServiceForProject={(serviceName) => handleOpenProjectModal(serviceName)}
        />

        {/* Featured Case Study Showcase */}
        <FeaturedProject
          onOpenCaseStudy={() => setSelectedCaseStudy(FEATURED_CASE_STUDY)}
        />

        {/* Social Media Marketing Section */}
        <SocialMediaSection
          onGrowSocial={() => handleOpenProjectModal('Social Media Marketing')}
        />

        {/* High-Performance Web Development Section */}
        <WebDevSection
          onStartWebProject={() => handleOpenProjectModal('Web Development')}
        />

        {/* AI Marketing & Autonomous Systems Section */}
        <AIMarketingSection
          onExploreAI={() => handleOpenProjectModal('AI Marketing & Automations')}
        />

        {/* 5-Step Sprint Process Section */}
        <ProcessSection
          onStartProject={() => handleOpenProjectModal()}
        />

        {/* Selected Portfolio Archives */}
        <PortfolioSection
          onSelectProject={(project) => setSelectedCaseStudy(project)}
        />

        {/* Testimonials Carousel Section */}
        <TestimonialsSection />

        {/* Transparent Investment & Pricing Section */}
        <PricingSection
          onSelectPlan={(planName) => handleOpenProjectModal(undefined, planName)}
        />

        {/* FAQ Accordion Section */}
        <FaqSection
          onAskQuestion={() => handleOpenProjectModal()}
        />

        {/* Dramatic Final Full-Screen CTA */}
        <FinalCtaSection
          onStartProject={() => handleOpenProjectModal()}
        />
      </main>

      {/* Global Agency Footer */}
      <Footer
        onOpenProjectModal={() => handleOpenProjectModal()}
        onOpenAdmin={() => setAdminPortalOpen(true)}
      />

      {/* Interactive Project Initiation Brief Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        initialService={preselectedService}
        initialPlan={preselectedPlan}
      />

      {/* Case Study Detail Inspection Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartSimilarProject={(serviceName) => handleOpenProjectModal(serviceName)}
      />

      {/* Nove Social 2-Seat Admin Command Center Portal */}
      <AdminPortal
        isOpen={adminPortalOpen}
        onClose={() => {
          setAdminPortalOpen(false);
          if (window.location.hash === '#admin') {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }}
      />

      {/* Floating WhatsApp Action Widget (9413340605) */}
      <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center">
        <a
          href="https://wa.me/919413340605?text=Hi%20Nove%20Social%2C%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-700/30 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp with Nove Social on 9413340605"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full border-2 border-white animate-pulse" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-100 font-semibold leading-tight">
              Chat on WhatsApp
            </span>
            <span className="text-xs font-bold leading-tight">
              +91 9413340605
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
}

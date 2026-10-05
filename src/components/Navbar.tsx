import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';
import NoveLogo from './NoveLogo';

interface NavbarProps {
  onOpenProjectModal: () => void;
}

export default function Navbar({ onOpenProjectModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Social', href: '#social' },
    { label: 'AI Growth', href: '#ai-marketing' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing (INR)', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = 'https://wa.me/919413340605?text=Hi%20Nove%20Social%2C%20I%20would%20like%20to%20discuss%20a%20project.';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3.5 shadow-sm shadow-slate-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Zone with Nove Social logo and Jaipur mark */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded">
          <NoveLogo size="md" glow={true} showJaipur={true} />
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 text-slate-600 hover:text-slate-900 transition-colors duration-200 group focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 rounded"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-2.5">
          {/* Direct WhatsApp CTA Button replacing Let's Talk */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-all shadow-sm shadow-emerald-600/20 active:scale-95 whitespace-nowrap"
            aria-label="Chat with Nove Social on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenProjectModal}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-colors active:scale-95 whitespace-nowrap"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-white/95 backdrop-blur-2xl border-b border-slate-200 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-medium text-slate-800 hover:text-cyan-700 py-2 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp: +91 9413340605</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjectModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

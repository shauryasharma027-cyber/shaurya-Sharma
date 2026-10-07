import { useState, useEffect } from 'react';
import { ArrowUpRight, Send, CheckCircle2, MapPin, MessageCircle, Phone, Mail, Lock } from 'lucide-react';
import NoveLogo from './NoveLogo';
import { subscribeNewsletter } from '../lib/supabase';

interface FooterProps {
  onOpenProjectModal: () => void;
  onOpenAdmin?: () => void;
}

export default function Footer({ onOpenProjectModal, onOpenAdmin }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [jaipurTime, setJaipurTime] = useState('');
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setJaipurTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
      setUtcTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      const emailToSubmit = email.trim();
      setSubscribed(true);
      setEmail('');
      try {
        await subscribeNewsletter(emailToSubmit);
      } catch (err) {
        console.warn('Newsletter sync note:', err);
      }
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 relative overflow-hidden text-slate-600">
      {/* Subtle top accent divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <NoveLogo size="lg" glow={true} showJaipur={true} />
            </a>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-6 font-normal">
              Jaipur's premier creative technology and digital growth agency. We engineer high-converting digital flagships, viral social media campaigns, and data-driven AI systems for ambitious Indian and global brands.
            </p>

            {/* Live Jaipur & Global Clock */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span className="font-bold">JAIPUR HQ (IST):</span>
                <span className="text-cyan-700 font-extrabold tabular-nums">{jaipurTime || '02:00 PM'}</span>
              </div>
              <div className="text-[11px] font-mono text-slate-500 pl-1 font-medium">
                Global Operations Sync / UTC: <span className="text-slate-800 tabular-nums">{utcTime}</span>
              </div>
            </div>

            {/* Direct WhatsApp Quick Connect */}
            <div className="space-y-2">
              <a
                href="https://wa.me/919413340605?text=Hello%20Nove%20Social%2C%20we%20want%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>WhatsApp: +91 9413340605</span>
              </a>
              <div className="text-[11px] font-mono text-slate-500 pl-1">
                Direct Line: <a href="tel:+919413340605" className="text-slate-800 hover:text-cyan-700 font-semibold">+91 9413340605</a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><a href="#services" className="hover:text-slate-900 transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-slate-900 transition-colors">Case Studies</a></li>
              <li><a href="#social" className="hover:text-slate-900 transition-colors">Social Performance</a></li>
              <li><a href="#ai-marketing" className="hover:text-slate-900 transition-colors">AI Systems</a></li>
              <li><a href="#process" className="hover:text-slate-900 transition-colors">Sprint Methodology</a></li>
              <li><a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing & Scope (INR)</a></li>
              <li><a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Core Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><span className="hover:text-slate-900 transition-colors cursor-pointer" onClick={onOpenProjectModal}>Social Media Growth</span></li>
              <li><span className="hover:text-slate-900 transition-colors cursor-pointer" onClick={onOpenProjectModal}>High-Converting Web Dev</span></li>
              <li><span className="hover:text-slate-900 transition-colors cursor-pointer" onClick={onOpenProjectModal}>Technical SEO & Pan-India</span></li>
              <li><span className="hover:text-slate-900 transition-colors cursor-pointer" onClick={onOpenProjectModal}>Google & Meta Ads (ROAS)</span></li>
              <li><span className="hover:text-slate-900 transition-colors cursor-pointer" onClick={onOpenProjectModal}>Luxury & D2C Branding</span></li>
              <li><span className="hover:text-slate-900 transition-colors cursor-pointer" onClick={onOpenProjectModal}>Headless E-commerce</span></li>
              <li><span className="hover:text-slate-900 transition-colors cursor-pointer" onClick={onOpenProjectModal}>Autonomous AI Marketing</span></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold mb-4">
              Growth Dispatch
            </h4>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed font-normal">
              Curated bi-weekly breakdowns on high-velocity social virality, paid ad unit economics, and AI-assisted campaigns for Indian brands.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@brand.in"
                  required
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 transition-colors shadow-2xs"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors flex items-center justify-center"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </form>

            {subscribed && (
              <div className="mt-2 text-[11px] font-mono text-emerald-700 flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Confirmed. Welcome to Nove Social dispatch.</span>
              </div>
            )}

            {/* Hubs */}
            <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
              <div className="text-slate-900 font-bold">Jaipur Creative Studio:</div>
              <div className="text-slate-700 font-medium">C-Scheme, Jaipur, Rajasthan 302001</div>
              <div className="text-slate-500 mt-1">Client Desks: Mumbai · Delhi NCR · Bengaluru · Dubai</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Nove Social. All rights reserved. Registered Indian Agency, Jaipur, Rajasthan.
          </div>

          <div className="flex items-center gap-6 font-semibold">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="hover:text-cyan-700 transition-colors flex items-center gap-1.5 text-slate-500 hover:text-slate-800"
                title="Admin Command Center"
              >
                <Lock className="w-3 h-3 text-cyan-600" />
                <span>Admin Portal</span>
              </button>
            )}

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <span>YouTube</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

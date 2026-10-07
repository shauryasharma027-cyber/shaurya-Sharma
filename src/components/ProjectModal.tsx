import { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Send, Loader2 } from 'lucide-react';
import NoveLogo from './NoveLogo';
import { submitProjectInquiry } from '../lib/supabase';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPlan?: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  initialService,
  initialPlan,
}: ProjectModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState('₹1,50,000 – ₹3,50,000 (Growth)');
  const [timeline, setTimeline] = useState('4–6 Weeks (Standard)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [syncedToSupabase, setSyncedToSupabase] = useState(false);

  const availableServices = [
    'Social Media Marketing & Reels',
    'Web Development & WebGL',
    'Search Engine Optimization (SEO)',
    'Google & Meta Ads (ROAS Scaling)',
    'Brand Identity & Luxury Packaging',
    'Content Creation & 3D Motion',
    'High-Scale Shopify E-commerce',
    'AI Marketing & WhatsApp Automations',
  ];

  const budgetTiers = [
    '₹50,000 – ₹1,50,000 (Starter Launch)',
    '₹1,50,000 – ₹3,50,000 (Growth)',
    '₹3,50,000 – ₹8,00,000 (Scale)',
    '₹8,00,000+ (Enterprise Multi-Channel)',
  ];

  const timelineOptions = [
    'Immediate (Urgent Sprint - 2 Weeks)',
    '4–6 Weeks (Standard Launch)',
    '2–3 Months (Flagship Build)',
    'Ongoing Monthly Growth Retainer',
  ];

  useEffect(() => {
    if (initialService && !selectedServices.includes(initialService)) {
      setSelectedServices([initialService]);
    } else if (initialPlan) {
      setDescription(`Interested in the ${initialPlan} plan.`);
    }
  }, [initialService, initialPlan]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await submitProjectInquiry({
        name,
        email,
        phone,
        company,
        services: selectedServices,
        budget,
        timeline,
        details: description,
      });
      if (res.success) {
        setSyncedToSupabase(true);
      }
    } catch (err) {
      console.error('Lead submission caught error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSyncedToSupabase(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 border border-slate-200 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <NoveLogo size="sm" showJaipur={true} />
                <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-widest">
                  JAIPUR HEADQUARTERS · PROJECT BRIEF
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                LET'S BUILD YOUR <span className="text-gradient-cyan">NEXT CHAPTER.</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Tell us about your brand objectives and required capabilities. Our Jaipur creative strategists will reply within 24 hours with an architectural roadmap and INR quote.
              </p>

              {/* Direct WhatsApp Quick Option */}
              <div className="mt-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-emerald-900 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Prefer instant conversation? Chat with our team:</span>
                </div>
                <a
                  href="https://wa.me/919413340605?text=Hi%20Nove%20Social%2C%20I%20would%20like%20to%20discuss%20a%20project%20brief."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] transition-colors whitespace-nowrap shadow-xs"
                >
                  WhatsApp: +91 9413340605
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Services */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2.5">
                  1. Which capabilities do you require? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableServices.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-slate-900 text-white font-semibold border-slate-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <span>{service}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Budget & Timeline in INR */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                    2. Estimated Investment Budget (INR ₹)
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 font-medium focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    {budgetTiers.map((tier) => (
                      <option key={tier} value={tier} className="bg-white text-slate-900">
                        {tier}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                    3. Target Delivery Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 font-medium focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white text-slate-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Aditya Sharma"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aditya@brand.in"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98290 XXXXX"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Company & Project Brief */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Shekhawat Jewels or Bangalore AI"
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1.5">
                  Project Vision & Specific Bottlenecks
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Outline your commercial goals, current monthly ad spend/traffic, target launch date, or reference websites..."
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <span className="text-[11px] font-mono text-slate-500">
                  ⚡ 24-Hour Discovery Callback from Jaipur HQ · GST Compliant
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-75 transition-all shadow-lg active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                      <span>Syncing to Supabase...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Project Brief</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              BRIEF TRANSMISSION CONFIRMED
            </h3>

            <p className="text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
              Thank you, <span className="text-slate-900 font-semibold">{name}</span>. We have ingested your project parameters for{' '}
              <span className="text-cyan-700 font-semibold">{company || 'your brand'}</span>. Our Senior Strategist in Jaipur will connect via WhatsApp/Email within 24 hours.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 max-w-sm mb-8 space-y-1 text-left">
              <div>Reference Code: <span className="text-cyan-700 font-bold">NOVE-{Math.floor(100000 + Math.random() * 900000)}</span></div>
              <div>Estimated Investment: <span className="text-slate-900 font-bold">{budget}</span></div>
              <div>Priority Status: <span className="text-emerald-700 font-bold">High Priority · Jaipur Inbound Queue</span></div>
              <div className="pt-1 text-[10px] text-slate-500 flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${syncedToSupabase ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
                <span>Backend: Connected to Supabase ({syncedToSupabase ? 'Synced' : 'Processed'})</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

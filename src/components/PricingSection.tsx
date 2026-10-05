import { useState } from 'react';
import { PRICING_PLANS } from '../data/agencyData';
import { Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="text-xs font-mono tracking-widest text-cyan-700 font-bold uppercase mb-3">
            INVESTMENT & SCOPE · INR (₹)
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-3xl text-balance">
            TRANSPARENT VALUE. <span className="text-gradient-cyan">ZERO HIDDEN FEES.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-xl font-normal">
            Choose an engagement calibrated to your scale. Every tier includes dedicated technical leadership in Jaipur, clear milestone deliverables, and 100% compliant Indian GST invoices.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 shadow-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Quarterly Sprints</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'quarterly'
              ? Math.round(plan.monthlyPrice * 0.85)
              : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'gradient-border-box bg-white shadow-2xl shadow-cyan-900/10 lg:-translate-y-2 ring-1 ring-cyan-500/30'
                    : 'bg-slate-50 border border-slate-200/90 shadow-md hover:border-slate-300'
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 text-white text-[11px] font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>MOST POPULAR FOR INDIAN D2C</span>
                  </div>
                )}

                <div>
                  {/* Plan Top Info */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white text-slate-700 font-semibold border border-slate-200 shadow-2xs">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 min-h-[36px] font-normal">
                    {plan.description}
                  </p>

                  {/* Price in INR */}
                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <div className="flex items-baseline">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-mono text-slate-500 ml-2">/ month + GST</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">
                      {billingCycle === 'quarterly' ? 'Quarterly commitment · 15% discount applied' : 'Flexible month-to-month commitment'}
                    </div>
                  </div>

                  {/* Ideal for statement */}
                  <div className="mb-6 p-3.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-700 leading-relaxed shadow-2xs">
                    <span className="font-bold text-slate-900">Best for: </span>
                    {plan.bestFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                      Included Scope & Guarantees:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 px-6 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md ${
                    plan.popular
                      ? 'bg-slate-900 hover:bg-slate-800 text-white'
                      : 'bg-white hover:bg-slate-100 text-slate-900 border border-slate-300'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom enterprise inquiry notice */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-cyan-600 shrink-0" />
            <span className="text-slate-700">
              Need custom enterprise media buying, equity/revenue-share models, or annual retainer contracts with Nove Social?
            </span>
          </div>
          <button
            onClick={() => onSelectPlan('Bespoke Enterprise')}
            className="text-cyan-700 hover:text-cyan-800 font-semibold font-mono whitespace-nowrap self-start sm:self-auto"
          >
            Request Custom INR Proposal →
          </button>
        </div>
      </div>
    </section>
  );
}

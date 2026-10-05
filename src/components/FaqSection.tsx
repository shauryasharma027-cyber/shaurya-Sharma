import { useState } from 'react';
import { FAQ_DATA } from '../data/agencyData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onAskQuestion: () => void;
}

export default function FaqSection({ onAskQuestion }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-slate-50/60 relative overflow-hidden border-t border-slate-200/80">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 uppercase tracking-widest mb-4 font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARENCY & CLARITY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight max-w-2xl text-balance">
            FREQUENTLY ASKED <span className="text-gradient-cyan">QUESTIONS.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm max-w-lg font-normal">
            Direct answers regarding our technical stack, sprint timelines, performance guarantees, GST invoicing, and Jaipur studio communication rhythms.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all duration-300 hover:border-slate-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-cyan-700 font-bold shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold text-slate-900 hover:text-cyan-800 transition-colors">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-slate-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-normal animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-cyan-700 font-semibold">
                      <span>Category:</span>
                      <span>{item.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
              <MessageSquare className="w-5 h-5 text-cyan-700" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Have a specific project question?</div>
              <div className="text-xs text-slate-500">Our Jaipur team usually responds within 2 business hours.</div>
            </div>
          </div>

          <button
            onClick={onAskQuestion}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs shrink-0 active:scale-95"
          >
            Ask Our Strategy Team
          </button>
        </div>
      </div>
    </section>
  );
}

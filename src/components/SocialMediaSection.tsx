import { useState } from 'react';
import { 
  ArrowRight, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  TrendingUp, 
  Play, 
  ThumbsUp, 
  Phone,
  Sparkles
} from 'lucide-react';

interface SocialMediaSectionProps {
  onGrowSocial: () => void;
}

export default function SocialMediaSection({ onGrowSocial }: SocialMediaSectionProps) {
  const whatsappNumber = '9413340605';
  const whatsappUrl = `https://wa.me/919413340605?text=${encodeURIComponent(
    'Hi Nove Social, I want to discuss growing our social media, reels & marketing campaigns.'
  )}`;

  return (
    <section id="social" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background illumination */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-mono text-pink-700 uppercase tracking-widest mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIRAL REVENUE & SOCIAL ENGINE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-3xl text-balance">
            MAKE YOUR BRAND <span className="text-gradient-purple">IMPOSSIBLE TO IGNORE.</span>
          </h2>
          <p className="mt-5 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
            We architect cinematic, high-retention social content from our Jaipur production studio that commands organic attention, builds undeniable brand authority, and converts engagement into compounding revenue and qualified customer pipeline.
          </p>
        </div>

        {/* Floating Social Media Showcase Stage */}
        <div className="relative rounded-3xl p-6 sm:p-12 bg-slate-50 border border-slate-200 shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Card 1: Instagram Reel (Jaipur Luxury Crafts) */}
            <div className="rounded-2xl p-5 bg-white border border-slate-200 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-[1.5px]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-slate-900">
                      NS
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">novesocial.in</div>
                    <div className="text-[10px] text-slate-500">Jaipur, India · Original Audio</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded border border-pink-200">
                  REEL
                </span>
              </div>

              {/* Video Mockup Area */}
              <div className="h-48 rounded-xl bg-slate-100 border border-slate-200 relative overflow-hidden flex items-center justify-center group mb-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-cyan-500/10" />
                <div className="text-center p-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-slate-900/90 text-white flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 block">
                    Heritage Jewelry Crafting: Behind The Scenes
                  </span>
                  <span className="text-[10px] font-mono text-cyan-700 font-semibold">
                    1.4M Organic Views · High Intent
                  </span>
                </div>
              </div>

              {/* Action Buttons & Metrics */}
              <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-semibold text-rose-600">
                    <Heart className="w-4 h-4 fill-rose-600" /> 38.4K
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <MessageCircle className="w-4 h-4" /> 1,240
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Share2 className="w-4 h-4" /> 6.8K
                  </span>
                </div>
                <Bookmark className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Card 2: LinkedIn B2B Thought Leadership */}
            <div className="rounded-2xl p-5 bg-white border border-slate-200 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                      in
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Founders of Nove Social</div>
                      <div className="text-[10px] text-slate-500">32,000+ Monthly Executive Impressions · 2h</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    B2B GROWTH
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed mb-4 font-normal">
                  "Why Indian D2C brands wasting ₹5 Lakh+/month on generic performance agencies are switching to full-funnel creative engineering in 2026..."
                </p>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 space-y-1 mb-4">
                  <div className="text-cyan-700 font-bold">CASE RESULT:</div>
                  <div>• Blended ROAS scaled from 2.2x → 6.4x</div>
                  <div>• CAC reduced by 44% via UGC reel scripts</div>
                  <div>• 100% WhatsApp recovery automations</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1 font-semibold text-blue-700">
                  <ThumbsUp className="w-4 h-4 fill-blue-600" /> 1,480 Likes
                </span>
                <span className="font-mono text-[11px] text-slate-500">248 Reposts</span>
              </div>
            </div>

            {/* Card 3: Meta & YouTube Ads Performance Engine */}
            <div className="rounded-2xl p-5 bg-white border border-slate-200 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Meta CAPI Telemetry</div>
                      <div className="text-[10px] text-slate-500">Live Indian Inbound Campaign</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ROAS: 8.4x
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-600">Spend vs Inbound Revenue</span>
                      <span className="text-emerald-600">+₹34.8 Lakh</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 w-[84%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-600">Hook Rate (First 3s)</span>
                      <span className="text-cyan-700">68.2%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 w-[68%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Attribution: 100% CAPI Server</span>
                <span className="text-emerald-600 font-bold">Active Flight</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROMINENT DIRECT WHATSAPP OPTION (9413340605) */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-300 shadow-lg shadow-emerald-500/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ONLINE NOW · JAIPUR STRATEGY DESK</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                Chat Directly on WhatsApp: <span className="text-emerald-700 font-mono">+91 {whatsappNumber}</span>
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-xl font-normal">
                Skip form delays. Connect directly with our lead growth strategist in Jaipur to discuss your social media reels, paid ads, or complete brand revamp.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/20 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Message on WhatsApp</span>
            </a>

            <a
              href={`tel:+91${whatsappNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-all shadow-2xs active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              <span>Call: +91 {whatsappNumber}</span>
            </a>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={onGrowSocial}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg active:scale-95"
          >
            <span>Grow My Social Media & Paid Ads</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all shadow-xs active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Quick Chat on WhatsApp (+91 {whatsappNumber})</span>
          </a>
        </div>
      </div>
    </section>
  );
}

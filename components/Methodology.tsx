import React from 'react';
import { Search, Settings, Shield, ArrowRight } from 'lucide-react';

const Card: React.FC<{ icon: React.ElementType; title: string; text: string; step: string }> = ({ icon: Icon, title, text, step }) => (
  <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
    <div className="absolute top-0 right-0 p-6 opacity-10 font-serif text-6xl font-bold text-slate-300 group-hover:scale-110 transition-transform">
      {step}
    </div>
    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors duration-300">
      <Icon className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{text}</p>
    <div className="mt-6 w-8 h-1 bg-slate-200 group-hover:w-full group-hover:bg-accent transition-all duration-500"></div>
  </div>
);

const Methodology: React.FC = () => {
  const scrollToKB = () => {
    document.getElementById('knowledge-base')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="methodology" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 mb-4">The Architectural Restoration Method™</h2>
          <p className="text-slate-600">We don't just treat symptoms. We engineer a structural recovery.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <Card 
            step="01"
            icon={Search}
            title="Investigate"
            text="We don't guess. We use decision trees to identify if your root cause is Low Acid, Bile Insufficiency, or Motility Dysfunction."
          />
          <Card 
            step="02"
            icon={Settings}
            title="Restore Function"
            text="Before killing bacteria, we restart the 'Migrating Motor Complex' (MMC)—the body’s natural sweeper system."
          />
          <Card 
            step="03"
            icon={Shield}
            title="Rebuild"
            text="We reintroduce specific strains to secure the lining and prevent the overgrowth from returning."
          />
        </div>

        {/* Core Philosophy Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-900 to-slate-700"></div>
          
          <div className="text-center mb-10">
             <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-bold tracking-widest text-slate-500 mb-4 uppercase">Core Philosophy</div>
             <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
               We don’t treat symptoms. <br/>
               <span className="text-accent">We engineer structural recovery.</span>
             </h3>
          </div>

          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              Your gut is not a checklist. It’s not <span className="font-semibold text-slate-800">“kill bacteria → take probiotics → hope for the best”.</span>
            </p>
            
            <p>
              It’s a living system made of:
              <span className="block mt-2 italic text-slate-800 font-medium">
                motility, immune signaling, bile flow, enzyme output, nervous system tone, nutrient absorption, microbial ecology, and feedback loops that reinforce each other.
              </span>
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-accent">
              <p className="font-bold text-slate-900 mb-2">Every gut is a different building.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">🔹 Some need reinforcement.</li>
                <li className="flex items-center gap-2">🔹 Some need debris removal.</li>
                <li className="flex items-center gap-2">🔹 Some are structurally sound — but built on unstable ground.</li>
              </ul>
            </div>

            <p>
              Most approaches attack symptoms without understanding the structure underneath:
            </p>
            <ul className="grid md:grid-cols-3 gap-4 text-center text-sm font-medium">
               <li className="bg-slate-100 p-3 rounded-lg text-slate-500 decoration-slate-400 line-through">bloating → low FODMAP</li>
               <li className="bg-slate-100 p-3 rounded-lg text-slate-500 decoration-slate-400 line-through">constipation → magnesium</li>
               <li className="bg-slate-100 p-3 rounded-lg text-slate-500 decoration-slate-400 line-through">diarrhea → antimicrobials</li>
            </ul>

            <p className="text-center font-bold text-slate-900 text-xl">
              That’s not healing. That’s maintenance mode.
            </p>
            
            <p className="text-center">
              Gut Architect starts by understanding how your system works, where it broke, and why it stayed broken — before touching interventions.
            </p>

            <div className="pt-8 text-center">
              <button 
                onClick={scrollToKB}
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all hover:shadow-xl hover:-translate-y-1 group"
              >
                If you want to explore by yourself
                <span className="group-hover:translate-x-1 transition-transform">👉</span>
                Explore the Knowledge Base
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
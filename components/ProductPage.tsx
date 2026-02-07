import React, { useState } from 'react';
import { ShoppingBag, ChevronRight, CheckCircle2, Lock, ArrowRight, Play } from 'lucide-react';

const phases = [
  {
    id: 1,
    title: "The Root Cause Audit",
    subtitle: "PHASE 1: THE MAP",
    desc: "Before you treat, you must investigate. This section teaches you how to be your own health detective.",
    details: [
      {
        head: "The Diagnostic Decision Tree",
        body: "A step-by-step logic flow to determine if your issue is Low Stomach Acid, Vagus Nerve Dysfunction, or Structural (Ileocecal Valve)."
      },
      {
        head: "The Lab Interpretation Matrix",
        body: "A 'Cheat Sheet' to decode your own Breath Tests and Stool Tests. Know exactly what a 'Methane Climb' or 'Hydrogen Spike' means for your specific protocol."
      },
      {
        head: "The 'Symptom Link' Analysis",
        body: "Learn why your Acne, Reflux, and Brain Fog are interconnected nodes of the same loop."
      }
    ]
  },
  {
    id: 2,
    title: "The Functional Primer",
    subtitle: "PHASE 2: THE FOUNDATION",
    desc: "Fixing the 'Engine' before the 'Extermination'.",
    details: [
      {
        head: "The MMC Activation Protocol",
        body: "Specific daily habits and 'Meal Spacing' rules to restart your Migrating Motor Complex (the body's natural sweeper)."
      },
      {
        head: "Vagal Tone Resets",
        body: "Non-invasive exercises to switch your body from 'Fight or Flight' to 'Rest and Digest,' allowing acid production to return."
      },
      {
        head: "Bile Flow Optimization",
        body: "How to ensure your body's natural detergent is killing bacteria 24/7."
      }
    ]
  },
  {
    id: 3,
    title: "The Precision Strike",
    subtitle: "PHASE 3: THE KILL PHASE",
    desc: "How to execute a strategic cleanup without destroying your microbiome.",
    details: [
      {
        head: "The Antimicrobial Guide",
        body: "A comparative breakdown of the most effective herbal and pharmaceutical options (Oregano, Neem, Berberine, Rifaximin)."
      },
      {
        head: "The Biofilm Protocol",
        body: "Why bacteria 'hide' and how to use enzymatic disruptors to expose them for treatment."
      },
      {
        head: "Die-Off (Herxheimer) Management",
        body: "A list of specific binders (Charcoal, Clay, Zeolite) to stop the headaches and fatigue during the 'Kill Phase'."
      }
    ]
  },
  {
    id: 4,
    title: "The Relapse Moat",
    subtitle: "PHASE 4: THE FUTURE",
    desc: "Securing the perimeter so SIBO never returns.",
    details: [
      {
        head: "The Reintroduction Ladder",
        body: "A 3-week systematic plan to bring back FODMAPs without triggering a flare-up."
      },
      {
        head: "Maintenance Prokinetics",
        body: "A guide to natural 'Motility Triggers' to keep the engine running long-term."
      },
      {
        head: "The 'Never-Again' Lifestyle Rules",
        body: "5 non-negotiable rules to maintain your gut architecture for life."
      }
    ]
  }
];

const ProductPage: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(1);

  return (
    <section id="blueprint" className="bg-slate-900 text-white py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-accent rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-accent text-sm font-bold tracking-widest mb-6">
            <Lock className="w-4 h-4" />
            THE ARCHITECT'S VAULT
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none mb-6">
            The 4-Step <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">Recovery Framework.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Stop chasing symptoms. This is the complete architectural blueprint for rebuilding your gut system from the ground up.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The Interactive List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {phases.map((phase) => {
              const isActive = activePhase === phase.id;
              
              return (
                <div 
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`relative group cursor-pointer transition-all duration-500 ease-out border rounded-xl overflow-hidden ${
                    isActive 
                      ? 'bg-slate-800 border-accent shadow-2xl shadow-accent/10' 
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {/* Progress Bar for Active State */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-accent transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-center mb-2">
                      <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${isActive ? 'text-accent' : 'text-slate-500'}`}>
                        {phase.subtitle}
                      </div>
                      {isActive && <div className="text-xs text-accent font-mono animate-pulse">Now Viewing</div>}
                    </div>
                    
                    <h3 className={`text-2xl md:text-3xl font-serif font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                      {phase.title}
                    </h3>
                    
                    {/* Collapsible Content */}
                    <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-slate-300 italic mb-8 border-l-2 border-slate-700 pl-4">
                          "{phase.desc}"
                        </p>
                        
                        <div className="space-y-6">
                          {phase.details.map((detail, idx) => (
                            <div key={idx} className="flex gap-4">
                              <div className="mt-1">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                              </div>
                              <div>
                                <h4 className="font-bold text-white text-lg">{detail.head}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mt-1">{detail.body}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {!isActive && (
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <ChevronRight className="w-6 h-6 text-slate-500" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: The Offer Card (Sticky) */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-1 border border-slate-700 shadow-2xl">
              <div className="bg-slate-900 rounded-xl p-8 relative overflow-hidden">
                {/* Decorative BG */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Total Access</h3>
                      <p className="text-slate-400 text-sm">Instant Digital Download</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500 line-through decoration-slate-500">$197</div>
                      <div className="text-3xl font-bold text-white">$47</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700">
                      <Play className="w-5 h-5 text-accent fill-current" />
                      <span className="text-sm font-medium">Full 4-Phase Protocol PDF</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700">
                      <Play className="w-5 h-5 text-accent fill-current" />
                      <span className="text-sm font-medium">Supplement Timing Grid</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700">
                      <Play className="w-5 h-5 text-accent fill-current" />
                      <span className="text-sm font-medium">Doctor's Brief Template</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700">
                      <Play className="w-5 h-5 text-accent fill-current" />
                      <span className="text-sm font-medium">Safe-Start Shopping List</span>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-accent hover:bg-amber-600 text-white font-bold rounded-lg text-lg transition-all shadow-lg shadow-amber-900/40 flex items-center justify-center gap-2 group">
                    <ShoppingBag className="w-5 h-5" />
                    Unlock The Vault
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
                    <div className="h-4 w-8 bg-white/20 rounded"></div>
                    <div className="h-4 w-8 bg-white/20 rounded"></div>
                    <div className="h-4 w-8 bg-white/20 rounded"></div>
                  </div>
                  <p className="text-center text-xs text-slate-500 mt-4">Secure SSL Encrypted Checkout</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-slate-800 backdrop-blur-sm">
               <div className="flex gap-4">
                 <div className="text-4xl">❝</div>
                 <p className="text-slate-300 italic text-sm">
                   Phase 2 changed everything for me. I didn't realize I was killing the bacteria but never fixing the sweeping motion. No wonder it kept coming back.
                   <br/><br/>
                   <span className="text-white not-italic font-bold">– Sarah J., Recovered after 4 years.</span>
                 </p>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
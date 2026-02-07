import React from 'react';
import Ecosystem from './Ecosystem';
import Articles from './Articles';

const KnowledgeBase: React.FC = () => {
  return (
    <section id="knowledge-base" className="bg-white pb-24 pt-12">
      
      {/* Intro Section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8">
             Why real recovery is complex <br/>
             <span className="text-slate-400 italic font-serif text-2xl md:text-4xl">(and why that’s good news)</span>
           </h2>
           
           <div className="grid md:grid-cols-2 gap-12 text-left bg-slate-50 p-8 rounded-3xl border border-slate-100">
             <div>
               <p className="font-bold text-slate-900 mb-4">If you’ve tried multiple protocols and felt:</p>
               <ul className="space-y-2 text-slate-600 mb-6">
                 <li>• temporary improvement</li>
                 <li>• confusing reactions</li>
                 <li>• progress that suddenly stalled</li>
               </ul>
               <p className="text-lg font-medium text-slate-800">
                 You’re not resistant. You’re not broken. <br/>
                 <span className="text-accent">You’re dealing with interconnected loops.</span>
               </p>
             </div>
             <div>
               <p className="font-bold text-slate-900 mb-4">A real SIBO or gut imbalance case often involves:</p>
               <ul className="space-y-2 text-slate-600 text-sm">
                 <li>• impaired migrating motor complex</li>
                 <li>• bile insufficiency or poor fat digestion</li>
                 <li>• low stomach acid masking upstream dysfunction</li>
                 <li>• stress-driven vagal inhibition</li>
                 <li>• nutrient deficiencies feeding dysbiosis</li>
                 <li>• immune activation reinforcing motility issues</li>
               </ul>
             </div>
           </div>

           <div className="mt-8">
             <p className="text-xl text-slate-600">
               These factors create each other. That’s why isolated fixes don’t last. <br/>
               <span className="font-bold text-slate-900">Gut recovery isn’t linear. It’s systemic.</span>
             </p>
             <p className="mt-4 text-slate-500 text-sm">
               Once you see the system clearly, the path forward becomes obvious — and far less frustrating.
             </p>
           </div>
        </div>
      </div>

      {/* The Ecosystem / Gut Feedback Loop (Imported from Ecosystem.tsx) */}
      <div className="border-t border-b border-slate-100 bg-stone-50/50">
        <Ecosystem /> 
      </div>

      {/* Article Hub */}
      <div className="container mx-auto px-6 py-24">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-slate-900 text-white rounded-md text-xs font-bold tracking-widest mb-4">CONTENT HUB</div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Learn how the system actually works</h2>
          <p className="text-slate-600 max-w-2xl text-lg">
            Before you ever buy anything, you deserve clarity. Inside Gut Architect you’ll find deep-dive articles, case studies, and evidence-based breakdowns.
          </p>
        </div>
        
        <Articles />
        
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">External research curated and translated into practical insight.</p>
        </div>
      </div>

    </section>
  );
};

export default KnowledgeBase;
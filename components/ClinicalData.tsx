import React from 'react';

const ClinicalData: React.FC = () => {
  return (
    <section id="clinical-data" className="py-16 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Clinical References & Data</h3>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm text-slate-600 font-mono">
          <div className="border-l-2 border-slate-200 pl-4">
            <p className="font-bold text-slate-900">Pimentel, M. et al. (2020)</p>
            <p>"Bacterial Overgrowth and IBS links." New England Journal of Medicine.</p>
          </div>
          <div className="border-l-2 border-slate-200 pl-4">
            <p className="font-bold text-slate-900">Rezaie, A. (2018)</p>
            <p>"The pathophysiology of the Migrating Motor Complex." Journal of Neurogastroenterology.</p>
          </div>
          <div className="border-l-2 border-slate-200 pl-4">
            <p className="font-bold text-slate-900">Siebecker, A.</p>
            <p>"Hydrogen Sulfide SIBO: Diagnostic Challenges." SIBO Symposium 2024.</p>
          </div>
          <div className="border-l-2 border-slate-200 pl-4">
            <p className="font-bold text-slate-900">Satish, S. C. et al.</p>
            <p>"Small Intestinal Bacterial Overgrowth: Clinical Features and Therapeutic Management."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalData;

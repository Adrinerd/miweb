import React, { useState } from 'react';
import { Activity, Wind, Droplets, Brain, ArrowRight } from 'lucide-react';
import { NodeContent } from '../types';

const nodes: NodeContent[] = [
  {
    id: 'A',
    title: 'Microbial Dysbiosis',
    subtitle: 'The Imbalance',
    icon: Activity,
    content: "In a balanced gut, fiber is fuel. In a dysbiotic gut, fiber is a weapon. When you have an overgrowth (SIBO), high-quality prebiotic foods act as 'gasoline' for the wrong bacteria. This produces gases (H2 or CH4) that paralyze the intestinal wall.",
    connection: 'Click to see how this paralyzes your motility.'
  },
  {
    id: 'B',
    title: 'Impaired Motility',
    subtitle: 'The Stagnation',
    icon: Wind,
    content: "Motility isn't just 'going to the bathroom.' It’s the microscopic electrical wave that sweeps the small intestine every 90 minutes. When bacteria produce methane, they act as a local anesthetic, slowing this wave. If the wave stops, the bacteria stay.",
    connection: 'Click to see how stagnation leads to Leaky Gut.'
  },
  {
    id: 'C',
    title: 'Intestinal Permeability',
    subtitle: 'Leaky Gut',
    icon: Droplets,
    content: "Chronic overgrowth wears down the mucosal lining. This creates gaps in the 'tight junctions.' Large protein molecules and bacterial toxins (Lipopolysaccharides) leak into your bloodstream. Your immune system goes into a state of permanent red-alert.",
    connection: 'Click to see how this triggers external symptoms.'
  },
  {
    id: 'D',
    title: 'Systemic Outflow',
    subtitle: 'Acne, Reflux, Fog',
    icon: Brain,
    content: "Acne is the Gut-Skin Axis expelling toxins. Reflux is 'Low Acid' + 'High Pressure' pushing upwards. Brain Fog is ammonia bypassing the blood-brain barrier. The loop repeats until all nodes are addressed.",
    connection: 'This loop repeats until all three core nodes are addressed simultaneously.'
  },
];

const Ecosystem: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState('A');
  const activeContent = nodes.find(n => n.id === activeNodeId)!;

  return (
    <section id="problem-map" className="py-24 bg-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 mb-4">The Gut Feedback Loop</h2>
          <p className="text-slate-600 max-w-xl">Why "Eating Healthy" Isn't Enough. Visualize the Vicious Cycle.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Graphic */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
             {/* Central Connector Lines */}
             <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                <div className="w-64 h-64 rounded-full border border-dashed border-slate-300"></div>
             </div>
             
             {/* Nodes */}
             <div className="relative w-full h-full">
               {nodes.map((node, index) => {
                 // Calculate positions for a circle
                 const angle = (index * 90) * (Math.PI / 180) - (Math.PI / 4);
                 const radius = 140; // Desktop radius
                 const x = Math.cos(angle) * radius;
                 const y = Math.sin(angle) * radius;
                 
                 const isActive = activeNodeId === node.id;
                 const Icon = node.icon;

                 return (
                   <button
                     key={node.id}
                     onClick={() => setActiveNodeId(node.id)}
                     className={`absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${isActive ? 'bg-slate-900 text-white scale-110 z-20' : 'bg-white text-slate-400 border border-slate-200 hover:border-slate-900 hover:text-slate-900 z-10'}`}
                     style={{ transform: `translate(${x}px, ${y}px) ${isActive ? 'scale(1.2)' : 'scale(1)'}` }}
                   >
                     <Icon className="w-8 h-8" />
                   </button>
                 );
               })}
             </div>
          </div>

          {/* Content Panel */}
          <div className="bg-stone-50 rounded-2xl p-8 md:p-12 border border-slate-100 shadow-xl transition-all duration-300">
             <div className="flex items-center gap-4 mb-6">
               <div className="text-5xl font-serif font-bold text-slate-200">{activeNodeId}</div>
               <div>
                 <h3 className="text-xl font-bold text-slate-900">{activeContent.title}</h3>
                 <p className="text-accent font-medium text-sm uppercase tracking-wider">{activeContent.subtitle}</p>
               </div>
             </div>
             
             <div className="prose prose-slate mb-8">
               <p className="text-slate-600 text-lg leading-relaxed">
                 {activeContent.content}
               </p>
             </div>
             
             <div className="flex items-center gap-2 text-sm font-medium text-slate-900 bg-white p-4 rounded-lg border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors"
                  onClick={() => {
                    const nextIndex = (nodes.findIndex(n => n.id === activeNodeId) + 1) % nodes.length;
                    setActiveNodeId(nodes[nextIndex].id);
                  }}>
               <span className="text-slate-500">Next Node:</span>
               <span>{activeContent.connection}</span>
               <ArrowRight className="w-4 h-4 ml-auto" />
             </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="font-bold text-slate-900">Identify Your Entry Point</h4>
            <p className="text-slate-600 text-sm">Did you start with antibiotics, food poisoning, or stress?</p>
          </div>
          <div className="flex gap-4">
             <button id="assessment" className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">Take Root Cause Assessment</button>
             <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-white transition-colors">Download Systems Map PDF</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;

import React from 'react';
import { Link } from 'react-router-dom';
import DigestiveSystem from './DigestiveSystem';
import { ArrowRight, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-12 overflow-hidden flex items-center">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-100 to-transparent -z-10 opacity-50"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">GutArchitect v2.0</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif font-medium text-slate-900 leading-[1.1]">
            Precision Restoration for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 italic">Modern Microbiome.</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Stop guessing. Start building. An architectural approach to SIBO recovery that focuses on structural integrity, not just symptom management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 py-4 bg-slate-900 text-white font-medium rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                Get The Blueprint
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <Link
              to="/knowledge-base"
              className="group px-8 py-4 bg-transparent border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-white hover:border-slate-400 transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Explore Knowledge Base
            </Link>
          </div>
        </div>

        {/* Right: Interactive Viz */}
        <div className="relative">
          <DigestiveSystem />
        </div>
      </div>
    </section>
  );
};

export default Hero;
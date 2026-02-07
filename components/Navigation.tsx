import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-serif">GutArchitect</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('methodology')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Methodology</button>
          <Link to="/knowledge-base" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Knowledge Base</Link>
          <button onClick={() => scrollTo('blueprint')} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">SIBO Recovery Framework</button>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button onClick={() => scrollTo('assessment')} className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5 border border-transparent">
            Start Root Cause Assessment
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          <button onClick={() => scrollTo('methodology')} className="text-left text-slate-700 py-2">Methodology</button>
          <Link to="/knowledge-base" onClick={() => setMobileMenuOpen(false)} className="text-left text-slate-700 py-2">Knowledge Base</Link>
          <button onClick={() => scrollTo('blueprint')} className="text-left text-slate-700 py-2 font-bold">SIBO Recovery Framework</button>
          <button onClick={() => scrollTo('assessment')} className="w-full text-center py-3 bg-slate-900 text-white rounded-lg">Start Assessment</button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="text-xl font-bold tracking-tight text-white font-serif">GutArchitect</span>
        </div>
        <div className="flex justify-center gap-8 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a>
        </div>
        <p className="text-xs max-w-2xl mx-auto opacity-60">
          Disclaimer: The content on this website is for educational purposes only and is not intended to diagnose, treat, or cure any disease. Always consult with a qualified healthcare professional before beginning any new health protocol.
        </p>
        <p className="text-xs mt-8">© {new Date().getFullYear()} GutArchitect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

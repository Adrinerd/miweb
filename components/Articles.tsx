import React from 'react';
import { ArrowUpRight, BookOpen, FileText, FlaskConical } from 'lucide-react';

const articles = [
  {
    category: "Deep Dive",
    title: "Why Protocols Fail: The MMC Connection",
    excerpt: "Antibiotics kill bacteria, but they don't fix the pump. Understanding the Migrating Motor Complex is the key to stopping relapse.",
    icon: FileText
  },
  {
    category: "Case Study",
    title: "Recovery Path: The 'Methane' Archetype",
    excerpt: "Anatomy of a stubborn IMO (Intestinal Methanogen Overgrowth) case. From constipation to clearance in 12 weeks.",
    icon: BookOpen
  },
  {
    category: "Science",
    title: "Bile as a Detergent",
    excerpt: "Your liver produces the most powerful antimicrobial you can get. Here is why it stops flowing and how to restart it.",
    icon: FlaskConical
  },
];

const Articles: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {articles.map((article, i) => (
        <a 
          key={i} 
          href="#" 
          onClick={(e) => e.preventDefault()}
          className="group block bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
              <article.icon className="w-6 h-6 text-slate-700" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-accent transition-colors" />
          </div>
          
          <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{article.category}</div>
          <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:underline decoration-2 underline-offset-4">{article.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {article.excerpt}
          </p>
          <div className="text-xs font-medium text-slate-900 flex items-center gap-1">
            Read Article <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Articles;
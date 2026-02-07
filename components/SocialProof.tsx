import React, { useEffect, useState, useRef } from 'react';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Extract number and suffix (e.g., "39M+" -> 39 and "M+")
  const numberValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out quart: 1 - (1-t)^4
      const ease = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(numberValue * ease));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(numberValue); // Ensure we land exactly on the number
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numberValue]);

  return (
    <div ref={ref} className="text-center group cursor-default">
      <h3 className={`text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        {isVisible ? count : 0}{suffix}
      </h3>
      <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">{label}</p>
    </div>
  );
};

const SocialProof: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 border-t border-slate-800 pt-12">
          <StatItem value="39M+" label="Affected Globally" />
          <StatItem value="80%" label="IBS Cases are actually SIBO" />
          <StatItem value="45%" label="Relapse Rate w/ Antibiotics Alone" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ExitPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/request-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || data.error || 'Failed to submit');
      }

      setStatus('success');
      setEmail('');
      setTimeout(() => setShow(false), 3000); // Close after 3 seconds on success
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShow(false)}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-float">
        <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900">
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Checklist Sent!</h3>
              <p className="text-slate-600">Check your inbox for the download link.</p>
            </div>
          ) : (
            <>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Wait—don't leave empty-handed.</h3>
              <p className="text-slate-600 mb-6">
                Treating SIBO requires precise timing. Download our free <span className="font-semibold text-slate-900">"Post-Antibiotic Motility Checklist"</span> to ensure you don't miss the critical window for preventing relapse.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-0 outline-none transition-colors"
                  disabled={loading}
                />
                {status === 'error' && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-70"
                >
                  {loading ? 'Sending...' : 'Send Me The Checklist'}
                </button>
              </form>

              <p className="text-center text-xs text-slate-400 mt-4">No spam. Unsubscribe anytime.</p>
            </>
          )}
        </div>
        <div className="bg-slate-50 p-4 border-t border-slate-100 text-center text-xs text-slate-500">
          Rated 4.9/5 by 2,000+ Recovered Patients
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;

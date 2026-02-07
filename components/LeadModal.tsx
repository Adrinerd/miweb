import React, { useState } from 'react';
import { X, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/request-assessment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (e) {
                console.error('Failed to parse JSON response:', text);
                throw new Error(`Server error (${response.status}): ${text.substring(0, 200)}...`);
            }

            if (!response.ok) {
                throw new Error(data.message || data.error || 'Something went wrong');
            }

            setSuccess(true);
            setEmail('');

            // Auto close after success? Maybe keep it open to show success message.
        } catch (err: any) {
            console.error('Error submitting form:', err);
            // If it's a known server error (like 500 HTML), show a friendly message but log the details
            if (err.message && err.message.includes('Server error')) {
                setError(`Our server is having a moment. Please try again later. (Debug: ${err.message})`);
            } else {
                setError(err.message || 'Failed to submit request. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8">
                    {success ? (
                        <div className="text-center py-8 space-y-4">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-medium text-slate-900">Blueprint Sent!</h3>
                            <p className="text-slate-600">
                                Check your email inbox for the full Root Cause Analysis PDF. It should arrive within moments.
                            </p>
                            <button
                                onClick={onClose}
                                className="mt-6 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors w-full"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
                                    Free Assessment
                                </div>
                                <h3 className="text-2xl font-serif font-medium text-slate-900 mb-2">
                                    Get Your Recovery Blueprint
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Enter your email to receive our comprehensive Root Cause Analysis guide directly to your inbox.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                {error && (
                                    <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                                        <span>{error}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Me The Blueprint
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-slate-400 mt-4">
                                    We respect your privacy. No spam, ever.
                                </p>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadModal;

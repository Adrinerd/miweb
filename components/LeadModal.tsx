
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, Mail, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!isOpen || !mounted) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/request-assessment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            // Check content type or try to parse text first if not ok
            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch (e) {
                console.error('Failed to parse JSON response:', text);
                // Throw the raw text so we can see if it is 404 HTML or 500 HTML
                throw new Error(`Server error (${response.status}): ${text.substring(0, 200)}...`);
            }

            if (!response.ok) {
                throw new Error(data.error || `Error ${response.status}: ${data.message || 'Something went wrong'}`);
            }

            setStatus('success');
        } catch (error: any) {
            console.error('Submission error:', error);
            setStatus('error');
            // Show a cleaner error message to the user
            setErrorMessage(error.message || 'Failed to send request. Please try again.');
        }
    };

    const handleClose = () => {
        if (status === 'success') {
            setStatus('idle');
            setEmail('');
        }
        onClose();
    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-8 overflow-hidden transform transition-all scale-100">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {status === 'success' ? (
                    <div className="text-center py-8">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-serif text-slate-900 mb-2">Check Your Inbox!</h3>
                        <p className="text-slate-600 mb-8">
                            We've sent the <strong>Root Cause Assessment PDF</strong> to <span className="font-semibold text-slate-800">{email}</span>.
                        </p>
                        <button
                            onClick={handleClose}
                            className="w-full py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-slate-900 mb-2">Get The Free Assessment</h3>
                            <p className="text-slate-600">
                                Enter your email to receive the comprehensive <strong>GutArchitect Root Cause Analysis</strong> PDF directly in your inbox.
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    required
                                />
                            </div>

                            {status === 'error' && (
                                <div className="flex items-start gap-3 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <p>{errorMessage}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <RefreshCw className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    'Send Me The PDF'
                                )}
                            </button>

                            <p className="text-center text-xs text-slate-400 mt-4">
                                We respect your privacy. No spam, ever.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
};

export default LeadModal;

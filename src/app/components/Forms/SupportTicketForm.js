// components/SupportTicketForm.jsx
"use client";

import { useState, useEffect } from "react";

const SupportTicketForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        heading: "",
        description: "",
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log("Support Ticket Submitted:", formData);
            setShowSuccess(true);
            setIsSubmitting(false);
            setFormData({ name: "", email: "", heading: "", description: "" });
            
            // Auto-hide success message after 4 seconds
            setTimeout(() => setShowSuccess(false), 4000);
        }, 600);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12 px-4">
            <style>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes fadeInSuccess {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeOutSuccess {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                }

                .form-container {
                    animation: slideInUp 0.6s ease-out;
                }

                .form-field {
                    animation: slideInUp 0.6s ease-out backwards;
                }

                .form-field:nth-child(1) { animation-delay: 0.1s; }
                .form-field:nth-child(2) { animation-delay: 0.2s; }
                .form-field:nth-child(3) { animation-delay: 0.3s; }
                .form-field:nth-child(4) { animation-delay: 0.4s; }

                .submit-btn {
                    animation: slideInUp 0.6s ease-out backwards;
                    animation-delay: 0.5s;
                }

                .success-message {
                    animation: ${showSuccess ? 'fadeInSuccess' : 'fadeOutSuccess'} 0.5s ease-out forwards;
                }

                input:focus, textarea:focus {
                    outline: none;
                }

                input::placeholder, textarea::placeholder {
                    color: rgba(148, 163, 184, 0.5);
                }
            `}</style>

            <div className="form-container max-w-md w-full">
                {/* Success Message */}
                {showSuccess && (
                    <div className="success-message mb-6 p-4 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg flex items-center gap-3">
                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">Ticket submitted successfully!</span>
                    </div>
                )}

                {/* Main Form Container */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-white mb-2 text-center">Help & Support</h2>
                        <p className="text-center text-gray-300 text-sm">We're here to help. Tell us what's wrong.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Field */}
                        <div className="form-field">
                            <label className="block text-white font-semibold mb-2 text-sm">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 transition duration-200"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-field">
                            <label className="block text-white font-semibold mb-2 text-sm">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 transition duration-200"
                                required
                            />
                        </div>

                        {/* Issue Heading Field */}
                        <div className="form-field">
                            <label className="block text-white font-semibold mb-2 text-sm">Issue Heading</label>
                            <input
                                type="text"
                                name="heading"
                                value={formData.heading}
                                onChange={handleChange}
                                placeholder="Brief issue summary"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 transition duration-200"
                                required
                            />
                        </div>

                        {/* Description Field */}
                        <div className="form-field">
                            <label className="block text-white font-semibold mb-2 text-sm">Detailed Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Please describe your issue in detail..."
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 transition duration-200 resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="submit-btn pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-70 disabled:cursor-not-allowed transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    "Submit Support Ticket"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SupportTicketForm;

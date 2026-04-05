// components/DeletionRequestForm.jsx
"use client";

import { useState } from "react";

const DeletionRequestForm = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpSuccess, setShowOtpSuccess] = useState(false);
  const [showSubmitSuccess, setShowSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    phone: "",
    userId: "",
  });
  const [otpVerified, setOtpVerified] = useState(false);

  // Generate OTP (simulate)
  const sendOtp = () => {
    setIsSendingOtp(true);
    setTimeout(() => {
      const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(newOtp);
      setOtpSent(true);
      setIsSendingOtp(false);
      // Show temporary alert with OTP for demo
      setShowOtpSuccess(true);
      setTimeout(() => setShowOtpSuccess(false), 4000);
      console.log(`OTP sent: ${newOtp} (for demo only)`);
    }, 600);
  };

  // Verify OTP
  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setOtpVerified(true);
      setShowOtpSuccess(true);
      setTimeout(() => setShowOtpSuccess(false), 4000);
    } else {
      setShowOtpSuccess(false);
      alert("Invalid OTP, try again.");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpVerified) {
      alert("Please verify OTP first!");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form data submitted:", formData);
      setShowSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        username: "",
        phone: "",
        userId: "",
      });
      setOtpVerified(false);
      setOtpSent(false);
      setOtp("");
      setTimeout(() => setShowSubmitSuccess(false), 4000);
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
        .form-field:nth-child(5) { animation-delay: 0.5s; }

        .otp-section {
          animation: slideInUp 0.5s ease-out;
        }

        .extra-fields {
          animation: slideInUp 0.5s ease-out;
        }

        .success-message {
          animation: ${showOtpSuccess || showSubmitSuccess ? 'fadeInSuccess' : 'fadeOutSuccess'} 0.5s ease-out forwards;
        }

        input:focus, textarea:focus {
          outline: none;
        }

        input::placeholder, textarea::placeholder {
          color: rgba(148, 163, 184, 0.5);
        }
      `}</style>

      <div className="form-container max-w-md w-full">
        {/* Success Messages */}
        {(showOtpSuccess || showSubmitSuccess) && (
          <div className="success-message mb-6 p-4 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg flex items-center gap-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">
              {showOtpSuccess && otpVerified ? "OTP verified successfully!" : showOtpSuccess ? "OTP sent to your email!" : "Request submitted successfully!"}
            </span>
          </div>
        )}

        {/* Main Form Container */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Account Request</h2>
            <p className="text-center text-gray-300 text-sm">Request account deletion or disable</p>
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

            {/* Send OTP Button */}
            <div className="form-field">
              <button
                type="button"
                onClick={sendOtp}
                disabled={isSendingOtp}
                className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-70 disabled:cursor-not-allowed transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
              >
                {isSendingOtp ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>

            {/* OTP Section */}
            {otpSent && (
              <div className="otp-section space-y-4 p-5 rounded-lg bg-white/5 border border-white/10">
                <div className="form-field">
                  <label className="block text-white font-semibold mb-2 text-sm">Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 transition duration-200"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="w-full py-2 rounded-lg font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition duration-200 transform hover:scale-105 active:scale-95"
                >
                  Verify OTP
                </button>
              </div>
            )}

            {/* Additional Fields - Show after OTP verification */}
            {otpVerified && (
              <div className="extra-fields space-y-5 pt-6 border-t border-white/10">
                <div className="form-field">
                  <label className="block text-white font-semibold mb-2 text-sm">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 transition duration-200"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="block text-white font-semibold mb-2 text-sm">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="john_doe"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 transition duration-200"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="block text-white font-semibold mb-2 text-sm">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 3XX XXXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 transition duration-200"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="block text-white font-semibold mb-2 text-sm">User ID</label>
                  <input
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    placeholder="Your user ID"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:border-purple-400 transition duration-200"
                    required
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 disabled:opacity-70 disabled:cursor-not-allowed transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Delete Account"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Account disabled!")}
                    className="flex-1 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
                  >
                    Disable Account
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeletionRequestForm;

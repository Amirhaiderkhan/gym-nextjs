// app/privacy-policy/page.jsx (Next.js 13+ App Router)
"use client";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-6 md:px-24">
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

                .policy-container {
                    animation: slideInUp 0.6s ease-out;
                }

                .policy-section {
                    animation: slideInUp 0.6s ease-out backwards;
                }

                .section-1 { animation-delay: 0.1s; }
                .section-2 { animation-delay: 0.2s; }
                .section-3 { animation-delay: 0.3s; }
                .section-4 { animation-delay: 0.4s; }
                .section-5 { animation-delay: 0.5s; }
                .section-6 { animation-delay: 0.6s; }
                .section-7 { animation-delay: 0.7s; }
                .section-8 { animation-delay: 0.8s; }
                .section-9 { animation-delay: 0.9s; }
                .section-10 { animation-delay: 1s; }
            `}</style>
            <div className="policy-container max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">Privacy Policy</h1>
                <p className="text-center text-gray-300 mb-12 text-lg">Inovetta Fitness</p>

                <section className="policy-section section-1 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">1. Information We Collect</h2>
                    <p className="mb-4 text-gray-200 leading-relaxed">
                        We may collect the following types of information to improve your experience:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, and login credentials.</li>
                        <li><strong>Health and Fitness Data:</strong> Fitness activity logs and workout data.</li>
                        <li><strong>Device Information:</strong> Device model, operating system, IP address, and app usage statistics.</li>
                        <li><strong>Crash Reports:</strong> Error logs and crash reports via Firebase Crashlytics.</li>
                        <li><strong>Biometric Data:</strong> Fingerprint data used for gym access.</li>
                        <li><strong>Third-Party Services Data:</strong> Data collected by Google Play Services, Google Analytics for Firebase, and Firebase Crashlytics.</li>
                    </ul>
                </section>

                <section className="policy-section section-2 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">2. How We Use Your Information</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Provide, personalize, and improve the App’s functionality.</li>
                        <li>Monitor performance and fix issues using Firebase Crashlytics.</li>
                        <li>Analyze user behavior using Google Analytics for Firebase.</li>
                        <li>Enable gym access through biometric systems.</li>
                        <li>Notify you about updates, promotions, and features.</li>
                    </ul>
                </section>

                <section className="policy-section section-3 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">3. Third-Party Services</h2>
                    <p className="mb-4 text-gray-200 leading-relaxed">
                        The App integrates third-party services which may collect and process data according to their respective privacy policies:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Google Play Services:</strong> Provides essential app functionality.</li>
                        <li><strong>Google Analytics for Firebase:</strong> Tracks user interactions. Learn more.</li>
                        <li><strong>Firebase Crashlytics:</strong> Helps identify and fix crashes. Learn more.</li>
                    </ul>
                </section>

                <section className="policy-section section-4 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">4. Sharing Your Information</h2>
                    <p className="mb-4 text-gray-200 leading-relaxed">
                        We do not sell your data to third parties. However, we may share your information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>With service providers to integrate third-party tools like Firebase.</li>
                        <li>To comply with legal obligations.</li>
                    </ul>
                </section>

                <section className="policy-section section-5 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">5. Data Security</h2>
                    <p className="text-gray-200 leading-relaxed">
                        We take appropriate measures to protect your data, including encryption, secure storage, and regular audits. However, no system can guarantee complete security.
                    </p>
                </section>

                <section className="policy-section section-6 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">6. Your Rights</h2>
                    <p className="text-gray-200 leading-relaxed">
                        You may have the right to access, correct, delete, or opt out of your data collection. To exercise these rights, contact us at <a href="mailto:inovettafitness@gmail.com" className="text-purple-300 hover:text-pink-300 underline transition duration-200">inovettafitness@gmail.com</a>.
                    </p>
                </section>

                <section className="policy-section section-7 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">7. Data Retention</h2>
                    <p className="text-gray-200 leading-relaxed">
                        We retain your data only for as long as necessary to provide the App’s services or comply with legal requirements.
                    </p>
                </section>

                <section className="policy-section section-8 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">8. Children's Privacy</h2>
                    <p className="text-gray-200 leading-relaxed">
                        The App is not intended for children under 13. If we collect data from a child under 13, we will delete it promptly.
                    </p>
                </section>

                <section className="policy-section section-9 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">9. Changes to This Privacy Policy</h2>
                    <p className="text-gray-200 leading-relaxed">
                        We may update this policy to reflect changes. Updates will be posted in the App and on our website with the revised effective date.
                    </p>
                </section>

                <section className="policy-section section-10 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">10. Contact Us</h2>
                    <p className="mb-4 text-gray-200 leading-relaxed">
                        If you have questions or concerns about this Privacy Policy, please contact us:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Email: <a href="mailto:inovettafitness@gmail.com" className="text-purple-300 hover:text-pink-300 underline transition duration-200">inovettafitness@gmail.com</a></li>
                        <li>Address: Mir Afzaal Plaza, Ring Road, near MMC Hospital, Peshawar, Pakistan</li>
                    </ul>
                </section>

                <p className="text-center text-sm text-gray-400 mt-8 pt-8 border-t border-white/10">
                    © 2024 Inovetta Fitness. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

// app/terms-and-conditions/page.jsx
"use client";

const TermsAndConditions = () => {
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

                .terms-container {
                    animation: slideInUp 0.6s ease-out;
                }

                .terms-section {
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
                .section-11 { animation-delay: 1.1s; }
                .section-12 { animation-delay: 1.2s; }
                .section-13 { animation-delay: 1.3s; }
                .section-14 { animation-delay: 1.4s; }
            `}</style>
            <div className="terms-container max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Terms and Conditions
                </h1>
                <p className="text-center text-gray-300 mb-12 text-lg">Inovetta Fitness</p>

                <section className="terms-section section-1 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">1. Agreement to Terms</h2>
                    <p className="text-gray-200 leading-relaxed">
                        By downloading, accessing, or using the <strong>Inovetta Fitness App</strong>, you agree to these
                        Terms and Conditions. If you do not agree, you must stop using the App immediately.
                    </p>
                </section>

                <section className="terms-section section-2 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">2. App Features and Usage</h2>
                    <p className="mb-4 text-gray-200 leading-relaxed">The Inovetta Fitness App provides services including but not limited to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Tracking fitness activities and progress.</li>
                        <li>Managing gym memberships and schedules.</li>
                        <li>Biometric gym access using ZKTeco fingerprint devices.</li>
                        <li>Notifications for updates, reminders, and promotions via Firebase.</li>
                        <li>Integration with third-party services such as Firebase and Google Play Services.</li>
                    </ul>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        You are responsible for ensuring your device meets the technical requirements to use the App.
                    </p>
                </section>

                <section className="terms-section section-3 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">3. Account Registration</h2>
                    <p className="mb-4 text-gray-200 leading-relaxed">To access certain features of the App, you must register an account by providing accurate information. You agree to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Maintain the confidentiality of your login credentials.</li>
                        <li>Provide valid and up-to-date information.</li>
                        <li>Notify us immediately if you suspect unauthorized use of your account.</li>
                    </ul>
                </section>

                <section className="terms-section section-4 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">4. Biometric Access</h2>
                    <p className="text-gray-200 leading-relaxed">
                        The App integrates with ZKTeco fingerprint devices for gym access. By using this feature, you consent
                        to the collection and storage of your biometric data for authentication purposes. Biometric data is
                        securely handled and not shared with third parties, except as required by law.
                    </p>
                </section>

                <section className="terms-section section-5 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">5. User Responsibilities</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Use the App in a lawful manner and only for its intended purposes.</li>
                        <li>Not attempt to access restricted areas of the App or backend systems.</li>
                        <li>Refrain from fraudulent or malicious activities.</li>
                    </ul>
                </section>

                <section className="terms-section section-6 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">6. Payment and Memberships</h2>
                    <p className="text-gray-200 leading-relaxed">
                        The App supports gym membership management but does not currently support online payments.
                        Payments must be made directly at the gym or as instructed by gym staff.
                        Future updates may introduce online payment features subject to additional terms.
                    </p>
                </section>

                <section className="terms-section section-7 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">7. Notifications</h2>
                    <p className="text-gray-200 leading-relaxed">
                        The App uses Firebase Cloud Messaging (FCM) to send notifications about updates, reminders,
                        and promotions. You can manage notification preferences through your device settings.
                    </p>
                </section>

                <section className="terms-section section-8 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">8. Third-Party Services</h2>
                    <p className="mb-4 text-gray-200 leading-relaxed">The App integrates with third-party services, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Google Play Services</strong> for app functionality and updates.</li>
                        <li><strong>Google Analytics for Firebase</strong> for performance monitoring.</li>
                        <li><strong>Firebase Crashlytics</strong> for identifying and fixing errors.</li>
                    </ul>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        These services are governed by their respective terms and privacy policies.
                    </p>
                </section>

                <section className="terms-section section-9 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">9. Data Privacy</h2>
                    <p className="text-gray-200 leading-relaxed">
                        Your personal and biometric data is securely stored and used only as outlined in our Privacy Policy.
                    </p>
                </section>

                <section className="terms-section section-10 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">10. Termination</h2>
                    <p className="text-gray-200 leading-relaxed">
                        We may terminate or suspend your access if you violate these Terms, engage in fraudulent activity,
                        or misuse the App.
                    </p>
                </section>

                <section className="terms-section section-11 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">11. Disclaimer of Warranties</h2>
                    <p className="text-gray-200 leading-relaxed">
                        The App is provided on an "as is" and "as available" basis without warranties of any kind.
                    </p>
                </section>

                <section className="terms-section section-12 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">12. Limitation of Liability</h2>
                    <p className="text-gray-200 leading-relaxed">
                        To the extent permitted by law, Inovetta Fitness is not liable for any indirect or consequential damages.
                    </p>
                </section>

                <section className="terms-section section-13 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">13. Governing Law</h2>
                    <p className="text-gray-200 leading-relaxed">
                        These Terms are governed by the laws of Pakistan. Disputes will be subject to the courts of
                        Peshawar, Pakistan.
                    </p>
                </section>

                <section className="terms-section section-14 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">14. Contact Us</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Email: <a href="mailto:inovettafitness@gmail.com" className="text-purple-300 hover:text-pink-300 underline transition duration-200">
                            inovettafitness@gmail.com
                        </a></li>
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

export default TermsAndConditions;

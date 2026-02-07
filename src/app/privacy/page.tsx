import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Privacy Policy — Reminders+',
    description: 'Privacy Policy for Reminders+ iOS app and website',
};

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#F7F7F7] pt-24">
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-semibold mb-2">Privacy Policy</h1>
                    <p className="text-gray-500 mb-12">Last updated: February 8, 2025</p>

                    <div className="prose prose-gray max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Reminders+ ("we", "our", "us", or the "Company") operates the Reminders+ mobile application and this website (collectively, the "Services"). This Privacy Policy describes how we may collect, use, store, and share information in connection with our Services. By using our Services, you acknowledge that you have read and understood this Privacy Policy.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                <strong>We reserve the right to modify this Privacy Policy at any time.</strong> Changes will be effective immediately upon posting. Your continued use of the Services after any changes constitutes acceptance of the modified policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Data Controller</h2>
                            <p className="text-gray-700 leading-relaxed">
                                For users in the European Economic Area (EEA), the data controller is Reminders+. Contact information is available in our <a href="/impressum" className="text-[#0070E1] hover:underline">Impressum</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Information We May Collect</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may collect various types of information in connection with the Services, including but not limited to:
                            </p>

                            <h3 className="text-xl font-medium mb-2 mt-6">3.1 Information You Provide</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Account information (if we implement accounts in the future)</li>
                                <li>Content you create within the App (tasks, routines, settings)</li>
                                <li>Communications with us (support requests, feedback)</li>
                                <li>Any other information you choose to provide</li>
                            </ul>

                            <h3 className="text-xl font-medium mb-2 mt-6">3.2 Information Collected Automatically</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may automatically collect certain information when you use our Services, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Device information (device type, operating system, unique device identifiers)</li>
                                <li>Usage data (features used, time spent, actions taken)</li>
                                <li>Log data (access times, pages viewed, app crashes, other system activity)</li>
                                <li>Location information (with your consent, where required by law)</li>
                                <li>Analytics data through third-party analytics tools</li>
                                <li>Advertising identifiers (IDFA) if applicable</li>
                            </ul>

                            <h3 className="text-xl font-medium mb-2 mt-6">3.3 Information from Third Parties</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We may receive information about you from third parties, including business partners, marketing partners, social media platforms, and data providers.
                            </p>

                            <h3 className="text-xl font-medium mb-2 mt-6">3.4 Current Data Practices</h3>
                            <p className="text-gray-700 leading-relaxed">
                                As of the date of this policy, the App primarily stores data locally on your device. However, we reserve the right to implement additional data collection, cloud synchronization, analytics, or other features at any time. We will update this policy accordingly when such features are implemented.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. How We May Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may use the information we collect for various purposes, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Providing, maintaining, and improving our Services</li>
                                <li>Developing new features, products, and services</li>
                                <li>Processing transactions and sending related information</li>
                                <li>Sending promotional communications (with your consent where required)</li>
                                <li>Responding to your comments, questions, and requests</li>
                                <li>Monitoring and analyzing trends, usage, and activities</li>
                                <li>Detecting, investigating, and preventing fraudulent or unauthorized activity</li>
                                <li>Personalizing and improving your experience</li>
                                <li>Carrying out any other purpose described to you at the time of collection</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Legal Basis for Processing (GDPR)</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you are in the EEA, we process your personal data based on the following legal grounds:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Consent:</strong> Where you have given consent for specific processing activities</li>
                                <li><strong>Contract:</strong> Where processing is necessary to perform our contract with you</li>
                                <li><strong>Legal Obligation:</strong> Where processing is necessary to comply with legal requirements</li>
                                <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate interests and does not override your rights</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Sharing of Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong>Service Providers:</strong> With vendors, consultants, and service providers who need access to perform services on our behalf</li>
                                <li><strong>Business Transfers:</strong> In connection with any merger, sale, acquisition, or transfer of assets</li>
                                <li><strong>Legal Requirements:</strong> If required by law, regulation, legal process, or governmental request</li>
                                <li><strong>Protection:</strong> To protect the rights, privacy, safety, or property of ourselves or others</li>
                                <li><strong>With Consent:</strong> With your consent or at your direction</li>
                                <li><strong>Aggregated Data:</strong> We may share aggregated or anonymized information that cannot reasonably identify you</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our Services may contain links to third-party websites or services, or integrate with third-party platforms including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                                <li>Apple App Store and related Apple services</li>
                                <li>Analytics providers (e.g., Firebase, Amplitude, Mixpanel)</li>
                                <li>Advertising networks</li>
                                <li>Cloud storage providers</li>
                                <li>Customer support tools</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                These third parties have their own privacy policies. We are not responsible for their privacy practices and encourage you to review their policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We retain information for as long as necessary for the purposes described in this policy, or as required by law. This may include retaining information after you stop using our Services. Locally stored data on your device is deleted when you uninstall the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your information may be transferred to, stored, and processed in countries other than your own. By using our Services, you consent to the transfer of your information to countries that may have different data protection laws than your country of residence.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">10. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We implement reasonable technical and organizational measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security. You are responsible for maintaining the security of your device.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our Services are not directed to children under 13 (or other age as required by local law). We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child, we will take steps to delete it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">12. Your Rights and Choices</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Depending on your location, you may have certain rights regarding your personal information:
                            </p>

                            <h3 className="text-xl font-medium mb-2 mt-4">EEA Residents (GDPR)</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Right of access to your personal data</li>
                                <li>Right to rectification of inaccurate data</li>
                                <li>Right to erasure ("right to be forgotten")</li>
                                <li>Right to restriction of processing</li>
                                <li>Right to data portability</li>
                                <li>Right to object to processing</li>
                                <li>Right to withdraw consent</li>
                                <li>Right to lodge a complaint with a supervisory authority</li>
                            </ul>

                            <h3 className="text-xl font-medium mb-2 mt-4">California Residents (CCPA/CPRA)</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Right to know what personal information is collected, used, shared, or sold</li>
                                <li>Right to delete personal information</li>
                                <li>Right to opt-out of the sale or sharing of personal information</li>
                                <li>Right to limit use of sensitive personal information</li>
                                <li>Right to non-discrimination for exercising your rights</li>
                            </ul>

                            <p className="text-gray-700 leading-relaxed mt-4">
                                To exercise these rights, please contact us using the information in our <a href="/contact" className="text-[#0070E1] hover:underline">Contact page</a>. We may verify your identity before processing your request.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">13. Do Not Track</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Some browsers have a "Do Not Track" feature. We may or may not respond to Do Not Track signals.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">14. Changes to This Policy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may update this Privacy Policy at any time. Changes are effective immediately upon posting. We encourage you to review this policy periodically. Your continued use of the Services after changes indicates acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">15. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have questions about this Privacy Policy, please contact us via our <a href="/contact" className="text-[#0070E1] hover:underline">Contact page</a> or the information in our <a href="/impressum" className="text-[#0070E1] hover:underline">Impressum</a>.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}

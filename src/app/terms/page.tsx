import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Terms of Use — Reminders+',
    description: 'Terms of Use for Reminders+ iOS app and website',
};

export default function TermsOfUse() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#F7F7F7] pt-24">
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-semibold mb-2">Terms of Use</h1>
                    <p className="text-gray-500 mb-12">Last updated: February 8, 2025</p>

                    <div className="prose prose-gray max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                By downloading, installing, accessing, or using Reminders+ ("the App") or accessing this website (collectively, "the Services"), you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Use ("Terms") and our Privacy Policy. If you do not agree to these Terms, you must immediately discontinue use of the Services.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                <strong>We reserve the right to modify these Terms at any time without prior notice.</strong> Changes are effective immediately upon posting. Your continued use of the Services constitutes acceptance of all modifications. It is your responsibility to review these Terms periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Reminders+ is a task and habit tracking application. The features, functionality, and availability of the Services may change at any time without notice. We reserve the right to modify, suspend, discontinue, or terminate the Services, in whole or in part, at any time, with or without notice, for any reason.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
                            <p className="text-gray-700 leading-relaxed">
                                You must be at least 13 years of age (or the minimum age in your jurisdiction) to use the Services. If you are under 18 (or the age of majority in your jurisdiction), you represent that your parent or legal guardian has reviewed and agreed to these Terms. By using the Services, you represent and warrant that you have the legal capacity to enter into this agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. License and Restrictions</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Subject to your strict compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to use the App solely for your personal, non-commercial purposes. This license may be revoked at any time for any reason.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4 font-medium">You expressly agree NOT to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                <li>Copy, reproduce, modify, adapt, translate, or create derivative works of the Services</li>
                                <li>Reverse engineer, decompile, disassemble, or attempt to derive source code or underlying algorithms</li>
                                <li>Rent, lease, lend, sell, redistribute, sublicense, or transfer the Services to any third party</li>
                                <li>Remove, alter, or obscure any proprietary notices, labels, or markings</li>
                                <li>Use the Services for any unlawful, unauthorized, or fraudulent purpose</li>
                                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                                <li>Circumvent any technological measures we use to protect the Services</li>
                                <li>Use the Services to transmit any malicious code, viruses, or harmful data</li>
                                <li>Use automated systems to access the Services without our express written permission</li>
                                <li>Violate any applicable local, state, national, or international law or regulation</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. User Content and Responsibilities</h2>
                            <p className="text-gray-700 leading-relaxed">You are solely responsible for:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                <li>All data, content, and information you enter into or transmit through the Services</li>
                                <li>Maintaining the security and confidentiality of your device and any account credentials</li>
                                <li>Regularly backing up your data (we have no obligation to maintain or recover your data)</li>
                                <li>Ensuring your use complies with all applicable laws, regulations, and third-party rights</li>
                                <li>Any consequences arising from your use of the Services</li>
                                <li>All activities that occur under your account or on your device</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                <strong>WE HAVE NO OBLIGATION TO STORE, MAINTAIN, OR PROVIDE BACKUPS OF YOUR DATA.</strong> Any data loss is your sole responsibility.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Your use of the Services is governed by our <Link href="/privacy" className="text-[#0070E1] hover:underline">Privacy Policy</Link>, which is incorporated by reference. By using the Services, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
                            <p className="text-gray-700 leading-relaxed">
                                The Services and all content, features, functionality, including but not limited to software, text, graphics, logos, icons, images, audio clips, and the compilation thereof, are the exclusive property of Reminders+ or its licensors and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws worldwide. All rights not expressly granted are reserved. Unauthorized use may violate applicable laws and result in legal action.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. Fees and Payments</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to charge fees for the Services or any features thereof at any time. If fees are implemented, your continued use of the paid features constitutes agreement to pay such fees. All fees are non-refundable except as expressly stated or required by applicable law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">9. DISCLAIMER OF WARRANTIES</h2>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4 font-medium">
                                <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT</li>
                                <li>WARRANTIES THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE</li>
                                <li>WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY CONTENT</li>
                                <li>WARRANTIES THAT DEFECTS WILL BE CORRECTED OR THAT THE SERVICES ARE FREE OF VIRUSES OR HARMFUL COMPONENTS</li>
                                <li>WARRANTIES ARISING FROM COURSE OF DEALING, USAGE, OR TRADE PRACTICE</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                YOU USE THE SERVICES AT YOUR OWN RISK. WE DO NOT GUARANTEE ANY SPECIFIC RESULTS FROM USE OF THE SERVICES.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">10. LIMITATION OF LIABILITY</h2>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL REMINDERS+, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, OR SUPPLIERS BE LIABLE FOR:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4 font-medium">
                                <li>ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES</li>
                                <li>LOSS OF PROFITS, REVENUE, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
                                <li>DAMAGES ARISING FROM YOUR USE OR INABILITY TO USE THE SERVICES</li>
                                <li>DAMAGES ARISING FROM ANY CONTENT OR CONDUCT OF THIRD PARTIES</li>
                                <li>DAMAGES ARISING FROM UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR DATA</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                                IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED EUROS (€100).
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                THESE LIMITATIONS APPLY REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE) AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN SUCH CASES, THESE LIMITATIONS APPLY TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
                            <p className="text-gray-700 leading-relaxed">
                                You agree to indemnify, defend, and hold harmless Reminders+, its affiliates, and their respective officers, directors, employees, agents, licensors, and suppliers from and against any and all claims, damages, obligations, losses, liabilities, costs, expenses (including reasonable attorneys' fees), and settlements arising from or related to: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any third-party rights; (d) your negligence or willful misconduct; or (e) any content you submit, post, or transmit through the Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including but not limited to breach of these Terms. Upon termination, your right to use the Services will immediately cease. All provisions that by their nature should survive termination shall survive, including ownership, warranty disclaimers, indemnification, limitations of liability, and dispute resolution provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">13. Dispute Resolution and Arbitration</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>PLEASE READ THIS SECTION CAREFULLY – IT AFFECTS YOUR LEGAL RIGHTS.</strong>
                            </p>
                            <h3 className="text-xl font-medium mb-2 mt-4">Binding Arbitration</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Except as otherwise provided herein, any dispute, controversy, or claim arising out of or relating to these Terms or the Services shall be resolved by binding arbitration. Arbitration shall be conducted on an individual basis; class arbitrations and class actions are not permitted.
                            </p>

                            <h3 className="text-xl font-medium mb-2 mt-4">Class Action Waiver</h3>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                TO THE FULLEST EXTENT PERMITTED BY LAW, YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION AGAINST US.
                            </p>

                            <h3 className="text-xl font-medium mb-2 mt-4">Governing Law</h3>
                            <p className="text-gray-700 leading-relaxed">
                                <strong>For EU Users:</strong> These Terms are governed by German law. Mandatory consumer protection laws of your country of residence may apply. The European Commission's Online Dispute Resolution platform is available at <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#0070E1] hover:underline">https://ec.europa.eu/consumers/odr/</a>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-2">
                                <strong>For US Users:</strong> These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-2">
                                <strong>For All Other Users:</strong> These Terms are governed by German law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">14. Severability</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the parties' original intent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">15. Waiver</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">16. Entire Agreement</h2>
                            <p className="text-gray-700 leading-relaxed">
                                These Terms, together with the Privacy Policy and any other legal notices published on the Services, constitute the entire agreement between you and Reminders+ regarding the Services and supersede all prior agreements, understandings, and communications, whether written or oral.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">17. Contact</h2>
                            <p className="text-gray-700 leading-relaxed">
                                For questions about these Terms, please visit our <Link href="/contact" className="text-[#0070E1] hover:underline">Contact page</Link> or see our <Link href="/impressum" className="text-[#0070E1] hover:underline">Impressum</Link>.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}

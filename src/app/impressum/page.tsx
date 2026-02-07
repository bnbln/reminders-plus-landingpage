import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Impressum — Reminders+',
    description: 'Legal Notice (Impressum) for Reminders+ iOS app and website',
};

export default function Impressum() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#F7F7F7] pt-24">
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-semibold mb-2">Impressum</h1>
                    <p className="text-gray-500 mb-12">Legal Notice according to § 5 TMG</p>

                    <div className="prose prose-gray max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Information according to § 5 TMG</h2>
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>Reminders+</strong><br />
                                    Benedikt Schnupp<br />
                                    {/* TODO: Replace with your actual address */}
                                    [Street Address]<br />
                                    [Postal Code] [City]<br />
                                    Germany
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <p className="text-gray-700 leading-relaxed">
                                    {/* TODO: Replace with your actual email */}
                                    Email: [your-email@example.com]
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">VAT Identification Number</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {/* TODO: Add VAT ID if applicable, or adjust text */}
                                Not applicable – Small business according to § 19 UStG
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Responsible for Content</h2>
                            <p className="text-gray-700 leading-relaxed">
                                According to § 55 Abs. 2 RStV:<br /><br />
                                Benedikt Schnupp<br />
                                [Street Address]<br />
                                [Postal Code] [City]<br />
                                Germany
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">EU Online Dispute Resolution</h2>
                            <p className="text-gray-700 leading-relaxed">
                                The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#0070E1] hover:underline">https://ec.europa.eu/consumers/odr/</a>
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>

                            <h3 className="text-xl font-medium mb-2 mt-6">Liability for Content</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness, or topicality. According to § 7 Abs. 1 TMG, we as service providers are responsible for our own content on these pages under general law. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected. Liability in this regard, however, is only possible from the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove this content immediately.
                            </p>

                            <h3 className="text-xl font-medium mb-2 mt-6">Liability for Links</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our services may contain links to external third-party websites, over which we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, a permanent content control of the linked pages is not reasonable without concrete evidence of an infringement. We expressly disclaim any responsibility for the content of linked websites. Upon becoming aware of legal violations, we will remove such links immediately.
                            </p>

                            <h3 className="text-xl font-medium mb-2 mt-6">Copyright</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the prior written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
                            </p>

                            <h3 className="text-xl font-medium mb-2 mt-6">General Limitation of Liability</h3>
                            <p className="text-gray-700 leading-relaxed">
                                All information on this website is provided without any express or implied warranty as to accuracy, quality, performance, completeness, or fitness for any particular purpose. We shall not be liable for any damages whatsoever, including but not limited to direct, indirect, incidental, special, consequential, or punitive damages, arising out of access to, use of, or inability to use this website or any content contained herein.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Related Pages</h2>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/privacy" className="text-[#0070E1] hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-[#0070E1] hover:underline">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-[#0070E1] hover:underline">Contact</Link>
                                </li>
                            </ul>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}

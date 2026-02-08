import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Contact — Reminders+',
    description: 'Contact Reminders+ for support, feedback, or inquiries',
};

export default function Contact() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#F7F7F7] pt-24">
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-semibold mb-2">Contact Us</h1>
                    <p className="text-gray-500 mb-12">We'd love to hear from you</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Support */}
                        <div className="bg-white rounded-xl p-8 border border-gray-200">
                            <div className="w-12 h-12 bg-[#0070E1]/10 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-[#0070E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">Support</h2>
                            <p className="text-gray-600 mb-4">
                                Having issues with the app? We're here to help.
                            </p>
                            <a
                                href="mailto:support@reminders.plus"
                                className="text-[#0070E1] hover:underline font-medium"
                            >
                                support@benediktschnupp.com
                            </a>
                        </div>

                        {/* Feedback */}
                        <div className="bg-white rounded-xl p-8 border border-gray-200">
                            <div className="w-12 h-12 bg-[#0070E1]/10 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-[#0070E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">Feedback</h2>
                            <p className="text-gray-600 mb-4">
                                Have a suggestion or feature request? Let us know!
                            </p>
                            <a
                                href="mailto:feedback@benediktschnupp.com"
                                className="text-[#0070E1] hover:underline font-medium"
                            >
                                feedback@benediktschnupp.com
                            </a>
                        </div>

                        {/* General Inquiries */}
                        <div className="bg-white rounded-xl p-8 border border-gray-200">
                            <div className="w-12 h-12 bg-[#0070E1]/10 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-[#0070E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">General Inquiries</h2>
                            <p className="text-gray-600 mb-4">
                                For all other questions and inquiries.
                            </p>
                            <a
                                href="mailto:hello@benediktschnupp.com"
                                className="text-[#0070E1] hover:underline font-medium"
                            >
                                hello@benediktschnupp.com
                            </a>
                        </div>

                        {/* App Store */}
                        <div className="bg-white rounded-xl p-8 border border-gray-200">
                            <div className="w-12 h-12 bg-[#0070E1]/10 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-[#0070E1]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">Rate the App</h2>
                            <p className="text-gray-600 mb-4">
                                Enjoying Reminders+? Leave us a review!
                            </p>
                            <a
                                href="https://apps.apple.com/us/app/reminders/id6758573672"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0070E1] hover:underline font-medium"
                            >
                                Open in App Store →
                            </a>
                        </div>
                    </div>

                    {/* Response Time */}
                    <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-[#0070E1]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-[#0070E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                                <p className="text-gray-600">
                                    We typically respond within 24-48 hours during business days. For urgent issues, please include "URGENT" in your email subject line.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-gray-500 text-sm">
                            For legal information, please visit our <Link href="/impressum" className="text-[#0070E1] hover:underline">Impressum</Link>, <Link href="/privacy" className="text-[#0070E1] hover:underline">Privacy Policy</Link>, or <Link href="/terms" className="text-[#0070E1] hover:underline">Terms of Use</Link>.
                        </p>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}

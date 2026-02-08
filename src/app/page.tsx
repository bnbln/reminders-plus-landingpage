import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureIcons from '@/components/FeatureIcons';
import FeatureCards from '@/components/FeatureCards';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { promises as fs } from 'fs';
import path from 'path';

interface FAQItem {
    question: string;
    answer: string;
}

async function loadFAQItems(): Promise<FAQItem[]> {
    const filePath = path.join(process.cwd(), 'content', 'faq.md');
    const content = await fs.readFile(filePath, 'utf8');
    
    // Remove frontmatter if present
    const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');
    
    // Parse markdown: each H2 (##) is a question, followed by the answer
    const items: FAQItem[] = [];
    const sections = contentWithoutFrontmatter.split(/^## /m).filter(section => section.trim());
    
    for (const section of sections) {
        const lines = section.split('\n');
        const question = lines[0].trim();
        const answer = lines.slice(1).join('\n').trim();
        
        if (question && answer) {
            items.push({ question, answer });
        }
    }
    
    return items;
}

export default async function Home() {
    const faqItems = await loadFAQItems();
    
    return (
        <main className="min-h-screen bg-[#F7F7F7]">
            <Header />
            <Hero />
            <FeatureIcons />
            <FeatureCards />
            <Testimonials />
            <FAQ faqItems={faqItems} />
            <CTASection />
            <Footer />
        </main>
    );
}

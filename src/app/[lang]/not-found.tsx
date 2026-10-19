import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
            <h1 className="large-title text-5xl">404</h1>
            <Link href="/" className="btn-primary text-[15px]">Reminders+</Link>
        </main>
    );
}

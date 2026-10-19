import { notFound } from 'next/navigation';

// Unknown paths below a language render that language's 404 page.
export default function Missing() {
    notFound();
}

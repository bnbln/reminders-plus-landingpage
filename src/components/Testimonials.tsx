import type { Dictionary } from '@/i18n/types';

const testimonials = (t: Dictionary['testimonials']) => [
    {
        quote: t.quote1,
        author: "Sarah K.",
        role: t.role1
    },
    {
        quote: t.quote2,
        author: "Chris H.",
        role: t.role2
    },
    {
        quote: t.quote3,
        author: "Maria W.",
        role: t.role3
    }
];

function StarRating({ label }: { label: string }) {
    return (
        <div className="flex gap-1 mb-4" role="img" aria-label={label}>
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    aria-hidden="true"
                    className="w-4 h-4 text-ios-orange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials({ t, a11y }: { t: Dictionary['testimonials']; a11y: Dictionary['a11y'] }) {
    return (
        <section className="py-20 px-5" aria-labelledby="testimonials-title">
            <div className="max-w-5xl mx-auto">
                <h2 id="testimonials-title" className="large-title text-4xl md:text-6xl text-center mb-14">
                    {t.title}
                </h2>

                <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {testimonials(t).map((testimonial, index) => (
                        <li key={index}>
                            <figure className="panel p-6 h-full">
                                <StarRating label={a11y.rating} />
                                <blockquote className="text-xl font-bold tracking-tight mb-4">
                                    <p>&ldquo;{testimonial.quote}&rdquo;</p>
                                </blockquote>
                                <figcaption className="text-sm text-label-secondary">
                                    <span className="font-medium">{testimonial.author}</span>
                                    <span className="mx-2" aria-hidden="true">·</span>
                                    <span className="sr-only">, </span>
                                    <span>{testimonial.role}</span>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

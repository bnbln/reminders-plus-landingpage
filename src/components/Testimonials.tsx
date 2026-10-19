'use client';

const testimonials = [
    {
        quote: "Finally an app that keeps me consistent",
        author: "Sarah K.",
        role: "Productivity Enthusiast"
    },
    {
        quote: "The streak system is incredibly motivating",
        author: "Chris H.",
        role: "Daily User"
    },
    {
        quote: "Simple, beautiful, and it just works",
        author: "Maria W.",
        role: "Habit Builder"
    }
];

function StarRating() {
    return (
        <div className="flex gap-1 mb-4" role="img" aria-label="5 out of 5 stars">
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

export default function Testimonials() {
    return (
        <section className="py-20 px-5" aria-labelledby="testimonials-title">
            <div className="max-w-5xl mx-auto">
                <h2 id="testimonials-title" className="large-title text-4xl md:text-6xl text-center mb-14">
                    They love it, so will you
                </h2>

                <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {testimonials.map((testimonial, index) => (
                        <li key={index}>
                            <figure className="panel p-6 h-full">
                                <StarRating />
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

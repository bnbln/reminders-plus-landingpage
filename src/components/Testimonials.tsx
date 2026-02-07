'use client';

const testimonials = [
    {
        quote: "Finally an app that keeps me consistent",
        author: "Sarah K.",
        role: "Productivity Enthusiast"
    },
    {
        quote: "The streak system is incredibly motivating",
        author: "Michael T.",
        role: "Daily User"
    },
    {
        quote: "Simple, beautiful, and it just works",
        author: "Emma L.",
        role: "Habit Builder"
    }
];

function StarRating() {
    return (
        <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className="w-4 h-4 text-[#0070E1]"
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
        <section className="py-20 px-6 bg-[#F0F0F0]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
                    They love it, so will you
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card bg-white">
                            <StarRating />
                            <h3 className="text-xl font-serif mb-4">"{testimonial.quote}"</h3>
                            <div className="text-sm text-gray-600">
                                <span className="font-medium">{testimonial.author}</span>
                                <span className="mx-2">·</span>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

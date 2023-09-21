import React from 'react';
import Image from 'next/image';

type Testimonial = {
    id: number;
    name: string;
    quote: string;
    image: string;
};

const TestimonialsWidget: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Felicia Jones',
            quote: 'This service is amazing. Highly recommended!',
            image: '/5el4aenqzg061.jpg',
        },
        {
            id: 2,
            name: 'Judy White',
            quote: 'Absolutely fantastic experience.',
            image: '/25345e8510eeaab262dcaf3c56c57f30.jpg',
        }, {
            id: 3,
            name: 'Oscar Cooper',
            quote: 'Never going anywhere else!',
            image: '/25345e8510eeaab262dcaf3c56c57f30.jpg',
        },
        // ... more testimonials ...
    ];

    return (
        <div className="bg-black p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-white text-center">Trusted by the community!</h2>
            <div className="md:flex-row flex-col flex md:space-x-4 justify-center">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="my-4 p-4 w-full bg-black border-2 border-white flex flex-col items-center">
                        <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4" />
                        <p className="italic mb-2 text-center text-white">{`"${testimonial.quote}"`}</p>
                        <p className="font-bold text-center text-white">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsWidget;

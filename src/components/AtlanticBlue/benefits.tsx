import React, { useState } from 'react';
type BenefitId = 'costSavings' | 'convenience'; // add other IDs as needed
import Image from "next/image";

type Benefit = {
    id: BenefitId;
    title: string;
    description: string;
    imagePath: string;
};

const AutoWashBenefits = () => {
    const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);
    const benefitsData: Benefit[] = [
        {
            id: 'costSavings',
            title: 'Cost Savings',
            description: 'Subscribers often save money compared to non-subscribers.',
            imagePath: 'atlantic-icon kopyası.png'
        },
        {
            id: 'convenience',
            title: 'Convenience',
            description: 'Subscriptions offer a hassle-free car wash experience.',
            imagePath: 'atlantic-icon kopyası.png'
        }
        // ... Add more benefits as needed ...
    ];

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-black font-bold text-center mb-8">Benefits of Blue</h1>
            <div className="overflow-x-scroll whitespace-nowrap py-4 rounded shadow">
                {benefitsData.map(benefit => (
                    <div
                        key={benefit.id}
                        className="inline-block w-32 h-32 p-5 bg-atlantic-red m-2 rounded-full relative group overflow-hidden cursor-pointer"
                        onClick={() => setSelectedBenefit(benefit)}
                    >
                        {/* Benefit Image */}
                        <Image src={benefit.imagePath} alt={benefit.title} className="object-cover w-full h-full" />
                    </div>
                ))}
            </div>

            {/* Benefit Details Modal */}
            {selectedBenefit && (
                <div className="fixed   top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-black p-6 border-2 border-white   mx-4 shadow-lg md:w-1/2">
                        <h2 className="text-2xl font-bold mb-4">{selectedBenefit.title}</h2>
                        <p>{selectedBenefit.description}</p>
                        <button className="mt-4 px-5 py-2 uppercase font-mono font-semibold tracking-wider border-2 border-white hover:bg-atlantic-blue2 text-white inline-block" onClick={() => setSelectedBenefit(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AutoWashBenefits;
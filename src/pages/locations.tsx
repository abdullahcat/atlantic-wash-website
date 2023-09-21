
import Head from 'next/head';
import React, { useState } from 'react';

const stores = [
    {
        id: 1,
        city: "Antalya",
        name: 'Atlantic Store - Main St.',
        location: 'Tahılpazarı, Kazım Özalp Cd. No:84, 07040 Muratpaşa/Antalya',
        features: ['24/7 Service', 'High-Pressure Wash', 'Luxury Detailing']
    },
    {
        id: 2,
        city: "Antalya",

        name: 'Atlantic Store - Elm St.',
        location: '456 Elm St, City, Country',
        features: ['Eco-Friendly Wash', 'Luxury Detailing']
    }
    // ...add more stores as needed
];
type Store = {
    id: number;
    name: string;
    city: string;
    location: string;
    features: string[];  // assuming features is an array of strings
};

const Locations: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStores = stores.filter(store =>
        store.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex space-y-4 flex-col min-h-screen p-4">
            <Head>
                <title>Locations</title>
            </Head>
            <h1 className="text-2xl font-bold mt-16">Our Locations</h1> {/* added mt-16 here */}

            <div className="mb-4">
                <input
                    type="text"
                    className="p-2 w-full border-2 border-white text-white bg-black"
                    placeholder="Search by city..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="md:grid md:grid-cols-3 md:gap-4">
                {filteredStores.map((store: Store) => (
                    <a key={store.id} target='_blank' href={`https://www.google.com/maps/search/?api=1&query=${store.location}`}
                        className="p-4 border-2 cursor-pointer   mb-4  hover:bg-atlantic-blue2 ">
                        <h2 className="text-xl font-semibold">{store.name}</h2>
                        <p>{store.location}</p>
                        <ul className="mt-2 space-y-1">
                            {store.features.map((feature: string, index: number) => (
                                <li key={index} className="text-sm  ">{feature}</li>
                            ))}
                        </ul>
                    </a>
                ))}
            </div>



        </div>
    );
}

export default Locations;

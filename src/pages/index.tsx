import Slider from '@/components/Types';
import React, { useRef } from 'react';
import types from "@/data/stationtypes.json";
import AutoWashCard from '@/components/Types/typecards';
import Features from '@/components/Features';
import AtlanticBlue from '@/components/AtlanticBlue';
import AppShowcase from '@/components/Mobile';
import Head from 'next/head';
import TestimonialsWidget from '@/components/Testimonials';
import Link from 'next/link';


function HomePage() {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div>
            <Head>
                <title>Atlantic Wash</title>
                <link rel='shortcut icon' href='/favicon.ico' />

            </Head>
            <div className="relative flex justify-right items-end h-screen">
                <div className="absolute space-y-4 mx-auto px-4 py-20 z-10"> {/* Added z-10 here */}
                    <p className="text-4xl text-white">Drive into the Future with Advanced Auto Wash.</p>
                    <p className="text-xl text-white">Harnessing the power of tech to deliver unparalleled cleanliness.</p>
                    <Link
                        href="/locations"
                        rel="noopener noreferrer"
                        className="px-5 py-2 uppercase font-mono font-semibold tracking-wider border-2 border-white hover:bg-atlantic-blue2 text-white inline-block">Experience Now</Link>
                </div>
                <video ref={videoRef} src="pexels-yaroslav-shuraev-5418124 (2160p).mp4" className="w-full h-screen object-cover rounded shadow-lg z-0" autoPlay muted loop playsInline /> {/* Added z-0 here */}
            </div>            <Features />

            <AppShowcase />
            <TestimonialsWidget />

            <AtlanticBlue />
            <Slider options={{ align: "center" }}>
                {types.map((types, i) => (
                    <div key={i} className="flex-[0_0_90%] md:flex-[0_0_30%]">
                        <AutoWashCard {...types} />
                    </div>
                ))}

            </Slider>
        </div>
    );
}

export default HomePage;

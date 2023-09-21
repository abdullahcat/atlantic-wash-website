import Link from 'next/link';
import React from 'react';
import Wavify from 'react-wavify';

function AtlanticBlue() {
    return (
        <div className="relative h-screen bg-atlantic-blue2">
            <div className=" transform rotate-180 absolute top-0 w-full">
                <Wavify fill='#000'
                    paused={false}
                    style={{ display: 'flex' }}

                    options={{
                        height: 30,
                        amplitude: 40,
                        speed: 0.15,
                        points: 4
                    }}
                />
            </div>
            {/* Large Text */}
            <h1 className=" pb-5 font-freshman z-20 text-6xl text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                ATLANTIC BLUE
            </h1>

            {/* Explanation */}
            <p className=" z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 text-center">
                Atlantic Blue is a special service offering from our company. Dive in to explore the depths of our expertise.
            </p>

            {/* Button */}
            <Link
                href="/atlanticblue"
                rel="noopener noreferrer"
                className="z-20 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 py-2 uppercase font-mono font-semibold tracking-wider border-2 border-white hover:bg-black text-white inline-block">More Information</Link>

            {/* Wave Illustration at the bottom */}
            <div className="absolute bottom-0 w-full">
                <Wavify fill='#f1faee'
                    paused={false}
                    style={{ display: 'flex' }}

                    options={{
                        height: 30,
                        amplitude: 40,
                        speed: 0.15,
                        points: 4
                    }}
                />
            </div>
        </div>
    );
}

export default AtlanticBlue;

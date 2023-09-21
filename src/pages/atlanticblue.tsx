
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faShieldAlt, faSync, faPhone, faLifeRing, faStar } from '@fortawesome/free-solid-svg-icons';
import Wavify from 'react-wavify';
import Head from 'next/head';
import AutoWashBenefits from '@/components/AtlanticBlue/benefits';
import WhyUs from '@/components/Testimonials';

function AtlanticBlue() {
    return (
        <div className=" bg-white min-h-screen py-12">
            <Head>
                <title>Atlantic Blue</title>
            </Head>
            <div className="relative h-screen bg-atlantic-blue2">
                <div className=" transform rotate-180 absolute top-0 w-full">
                    <Wavify fill='#000'
                        paused={false}
                        style={{ display: 'flex' }}

                        options={{
                            height: 40,
                            amplitude: 40,
                            speed: 0.15,
                            points: 4
                        }}
                    />
                </div>
                {/* Large Text */}
                <h1 className=" font-freshman pb-5 z-20 text-6xl text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    ATLANTIC BLUE
                </h1>

                {/* Explanation */}
                <p className=" z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 text-center">
                    Atlantic Blue is a special service offering from our company. Dive in to explore the depths of our expertise.
                </p>

                <h1 className=" z-20 text-3xl text-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    10$/Month                </h1>
                {/* Wave Illustration at the bottom */}
                <div className="absolute bottom-0 w-full">
                    <Wavify fill='#fff'
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

            <AutoWashBenefits />

        </div>
    );
}

export default AtlanticBlue;

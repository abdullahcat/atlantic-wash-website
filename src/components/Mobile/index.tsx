import React from 'react';
import Image from 'next/image';


function AppShowcase() {


    return (
        <div className="bg-black px-4 py-10 shadow-md   w-full    ">
            <div className="flex  flex-col md:flex-row items-center">

                {/* App Image */}
                <div className="flex-2 md:mr-8">
                    <Image src="https://standyroutes.com/images/standy_iphones_official.png" alt="App Preview" className="w-full max-w-md rounded-md" />
                </div>

                {/* App Details */}
                <div className="flex-1 md:ml-8 mt-6 md:mt-0">
                    {/* App Description */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Discover Atlantic App</h2>
                        <p  >The ultimate one-stop app for all your car washing needs. Say goodbye to long queues and inconvenient timings! With Atlantic App, your car cleanliness is just a tap away.
                        </p>
                    </div>

                    {/* Features Section */}
                    <div className="mb-6">
                        <ul className="list space-y-5">
                            <li className='space-y-1'>
                                <a href="#feature1" className="text-atlantic-blue1    hover:underline">Instant Booking</a>
                                <p className="text-sm">Secure your car wash slot anytime, anywhere.</p>
                            </li>
                            <li className='space-y-1'>
                                <a href="#feature1" className="text-atlantic-blue1 hover:underline">Wash Selection</a>
                                <p className="text-sm">Choose from a variety of washes: quick rinse, full detail, waxing, or go eco-friendly. Customizable to your car’s needs.</p>
                            </li>
                            <li className='space-y-1'>
                                <a href="#feature1" className="text-atlantic-blue1  hover:underline">Real-time Tracking</a>
                                <p className="text-sm">Watch the washing process of your car in real-time through our integrated cameras.</p>
                            </li>
                            <li className='space-y-1'>
                                <a href="#feature1" className="text-atlantic-blue1  hover:underline">Mobile Payment</a>
                                <p className="text-sm">Cashless and hassle-free! Pay via the app using your preferred method: credit card, e-wallets, or bank transfer.</p>
                            </li>





                        </ul>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-col md:flex-row justify-start md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                        <a
                            href="https://ios.atlanticwash.com"
                            rel="noopener noreferrer"
                            className="  tracking-wider   px-5 py-2 uppercase font-mono font-semibold tracking-wider border-2 border-white hover:bg-atlantic-blue2 text-white inline-block">iOS</a>

                        <a
                            href="https://android.atlanticwash.com"
                            rel="noopener noreferrer"
                            className="  tracking-wider   px-5 py-2 uppercase font-mono font-semibold tracking-wider border-2 border-white hover:bg-atlantic-blue2 text-white inline-block">Android</a>


                    </div>
                </div>

            </div>
        </div>
    );
}

export default AppShowcase;

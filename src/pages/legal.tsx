// pages/legal.tsx
import Head from 'next/head';
import { useState } from 'react';

export default function Legal() {
    const [activeTab, setActiveTab] = useState('tos');

    return (
        <div className="flex flex-col min-h-screen bg-black">

            <Head>
                <title>Legal</title>
            </Head>
            <main className="flex-grow flex   items-start mt-16">
                <div className="w-full   bg-black px-4 py-10  ">
                    <div className="mb-4">
                        <button
                            className={`mb-2 mr-4 px-4 py-2 ${activeTab === 'tos' ? 'hover:bg-white bg-atlantic-blue2 text-white hover:text-black border-2 border-white   ' : 'border-2 border-white hover:bg-white hover:text-black '}`}
                            onClick={() => setActiveTab('tos')}
                        >
                            Terms of Service
                        </button>
                        <button
                            className={`px-4 py-2 ${activeTab === 'privacy' ? 'hover:bg-white bg-atlantic-blue2 text-white hover:text-black border-2 border-white   ' : 'border-2 border-white hover:bg-white hover:text-black '}`}
                            onClick={() => setActiveTab('privacy')}
                        >
                            Privacy Policy
                        </button>


                    </div>
                    <hr className='pb-5' />
                    {activeTab === 'tos' && (
                        <div className="prose text-white space-y-6  ">

                            <h1 className='text-2xl font-bold mb-2'>Terms of Service for Atlantic Wash</h1>
                            <p>Effective date: [Date]</p>

                            <h2 className='text-2xl text-atlantic-blue1 font-bold mb-2'>1. Acceptance of Terms</h2>
                            <p>By using our services, you agree to these terms. If you disagree with any part of the terms, then you may not access our service.</p>

                            <h2 className='text-2xl text-atlantic-blue1 font-bold mb-2'>2. Changes to Terms</h2>
                            <p>Atlantic Wash reserves the right to change, modify, or replace these terms at any time.</p>

                            <h2 className='text-2xl text-atlantic-blue1 font-bold mb-2'>3. Use of Service</h2>
                            <p>Users are responsible for their use of the service and any content they provide, including compliance with applicable laws, rules, and regulations.</p>

                            <h2 className='text-2xl text-atlantic-blue1 font-bold mb-2'>4. Termination</h2>
                            <p>We may terminate or suspend your access to our service immediately, without prior notice or liability, if you breach these terms.</p>

                        </div>
                    )}
                    {activeTab === 'privacy' && (
                        <div className="prose text-white space-y-6">
                            <h1 className='text-2xl font-bold mb-2'>Privacy Policy for Atlantic Wash</h1>
                            <p  >Effective date: [Date]</p>

                            <h2 className='text-2xl text-atlantic-blue1 font-bold mb-2'>1. Introduction</h2>
                            <p>Welcome to Atlantic Wash. We respect your privacy and want to protect your personal information.</p>

                            <h2 className='text-2xl text-atlantic-blue1 font-bold mb-2'>2. Information Collection</h2>
                            <p>We collect various types of information:</p>
                            <ul className='list-disc pl-4'>
                                <li>Personal data you provide to us.</li>
                                <li>Data about your use of our site and services.</li>
                                <li>Information from third-party sites.</li>
                            </ul>

                            <h2 className='text-2xl text-atlantic-blue1 font-bold mb-2'>3. Use of Your Data</h2>
                            <p>We use information to:</p>
                            <ul className='list-disc pl-4'>

                                <li>Provide and manage our services.</li>
                                <li>Respond to your requests or questions.</li>
                                <li>Improve our services and products.</li>
                            </ul>

                            <h2 className='text-2xl text-atlantic-blue1 font-bold mb-2'>4. Sharing of Data</h2>
                            <p>We may share information:</p>
                            <ul>
                                <li>With third parties that perform services for us.</li>
                                <li>When legally required.</li>
                            </ul>


                        </div>
                    )}
                </div>
            </main>


        </div>
    );
}

import Head from 'next/head';
import React, { useRef } from 'react';

const About: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <div className="relative flex justify-start items-end h-screen">
                <div className="absolute space-y-6 mx-auto px-4 py-20 z-10">
                    <h1 className="text-4xl font-bold text-white">Revolutionizing Auto Care for Every Ride</h1>
                    <p className="text-xl text-white">Atlantic Wash: Catering to the modern commuter&apos;s desires, supporting the luxury car aficionados, and everyone in between. It&apos;s not just a wash; it&apos;s a revolution in auto care.</p>
                    <a
                        href="https://story.atlanticwash.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 uppercase font-mono font-semibold tracking-wider border-2 border-white hover:bg-atlantic-blue2 text-white inline-block"
                    >
                        Watch the Atlantic Wash story
                    </a>

                </div>
                <video ref={videoRef} className="blur-md absolute top-0 left-0 w-full h-full object-cover" playsInline
                    muted
                    autoPlay
                    loop>
                    <source src="pexels-kindel-media-6773878 (2160p).mp4" type="video/mp4" />
                </video>

            </div >
            <div className="p-4 space-y-6 my-10">
                <h1 className="text-2xl font-bold mb-2">About Atlantic Wash</h1>
                <h1 className="text-2xl text-atlantic-blue1 font-bold mb-2">Abdullah Çat</h1>
                <p>
                    Abdullah Çat is not just a software engineer, but also a visionary entrepreneur. With a passion for innovation and the drive to revolutionize mundane tasks, Abdullah laid the foundation for the <strong>Atlantic Wash Company</strong>.
                </p>
                <h2 className="text-xl text-atlantic-blue1 font-semibold mb-2">Our Journey</h2>
                <p>
                    Atlantic Wash isn&apos;t just any auto wash service. It&apos;s the future. Rooted in the belief that even the simplest tasks, like car washing, deserve the touch of technology, Atlantic Wash emerged. Harnessing the power of reservation technologies and other advanced digital solutions, we&apos;re not just cleaning vehicles; we&apos;re reshaping the auto wash experience.
                </p>
                <h2 className="text-xl text-atlantic-blue1 font-semibold mb-2">Our Mission</h2>
                <p>
                    To redefine auto washing. Gone are the days of waiting in queues or wondering about the quality of service. With Atlantic Wash, every user dives into the realm of convenience, futuristic technology, and unmatched service quality.
                </p>

                <h2 className="text-xl text-atlantic-blue1 font-semibold mb-2">Looking Ahead</h2>
                <p >
                    As we progress, our commitment remains unwavering - to transform and elevate every aspect of auto washing. With Abdullah at the helm, Atlantic Wash is set to redefine standards and lead the industry towards a tech-driven future.
                </p>

                <p className="italic">
                    &ldquo;Innovation isn&apos;t just about doing new things. It&apos;s about reshaping and optimizing the present for a brighter, more efficient future.&rdquo; - Abdullah Çat
                </p>
            </div>
        </div>
    );
}

export default About;

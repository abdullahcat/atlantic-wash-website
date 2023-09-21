const Features: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="py-16">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                        <div className="flex items-center">
                            <div className="w-20 h-12 rounded-full bg-indigo-100 mr-4 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 576 512">
                                    <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg text-gray-800 font-medium mb-1">Dynamic Pricing</h4>
                                <p className="text-gray-600 leading-relaxed">Peak hours? Off hours? Our dynamic pricing ensures you always get the best deal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                        <div className="flex items-center">
                            <div className="w-20 h-12 rounded-full bg-indigo-100 mr-4 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512">
                                    <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg text-gray-800 font-medium mb-1">Eco-friendly Focus</h4>
                                <p className="text-gray-600 leading-relaxed">We care about the environment. Our green options use less water and eco-friendly products.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                        <div className="flex items-center">
                            <div className="w-20 h-12 rounded-full bg-indigo-100 mr-4 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512">
                                    <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg text-gray-800 font-medium mb-1">Feedback &amp; Ratings</h4>
                                <p className="text-gray-600 leading-relaxed">Rate your wash experience and leave feedback. We're always eager to improve.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;

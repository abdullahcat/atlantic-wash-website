function Footer() {
    return (

        <footer className="bg-black">
            <div className="   w-full   p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src="atlanticlogo.png" className="h-10 mr-3" alt="Atlantic Logo" />
                        </a>
                        <div className="mt-4 text-gray-500 hover:underline cursor-pointer dark:text-gray-400">
                            <a href="mailto: help@atlanticwash.com">help@atlanticwash.com
                            </a>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Atlantic Wash™</a>. All Rights Reserved.
                        </span>

                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Atlantic Wash</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/about" className="hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/locations" className="hover:underline">Locations</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/atlanticblue" className="hover:underline">Atlantic Blue</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/legal" className="hover:underline">Legal</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://instagram.com/atlanticwash" className="hover:underline ">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/atlanticwash" className="hover:underline">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://ios.atlanticwash.com" className="hover:underline">iOS</a>
                                </li>                                <li className="mb-4">
                                    <a href="https://android.atlanticwash.com" className="hover:underline">Android</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>

    );
}

export default Footer;
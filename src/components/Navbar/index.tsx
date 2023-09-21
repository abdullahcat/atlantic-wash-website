import Link from 'next/link';
import React, { useState, Dispatch, SetStateAction } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


interface DropdownProps {
    title: string;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);


    return (
        <div className="bg-black fixed text-white w-full z-50">
            <div className="mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/">
                    <img src="atlanticlogo.png" alt="Atlantic Logo" className="h-10" />
                </Link>
                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                            <path fill="#ffffff" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </div>
                {/* Classic view for Desktop */}
                <div className="hidden lg:flex space-x-4 items-center">
                    <Link href="/locations" className="hover:text-gray-400">Locations</Link>
                    <Dropdown title="About" isOpen={showDropdown} setIsOpen={setShowDropdown} />
                    <Link href="/franchise" className="hover:text-gray-400">Franchise</Link>
                    <Link
                        href="/atlanticblue"
                        rel="noopener noreferrer"
                        className="px-5 py-2 uppercase font-mono font-semibold tracking-wider   text-white inline-block hover:bg-atlantic-blue2  border-2 border-white     ">Atlantic Blue</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {showMenu && (
                <div className={`slideInDown transition-transform duration-500 ease-in-out h-screen w-full bg-black absolute top-full left-0 ${showMenu ? 'translate-y-0' : '-translate-y-full'} lg:hidden`}>
                    <div className="text-start px-4 pt-6 pb-8 space-y-6">
                        <Link href="/locations" className="block py-2 hover:underline">Locations</Link>

                        <div className="relative">
                            <div onClick={() => setAboutDropdown(!aboutDropdown)} className="flex justify-between cursor-pointer py-2 hover:underline">
                                <span>About</span>
                                <span>{aboutDropdown ? '▲' : '▼'}</span>
                            </div>

                            {aboutDropdown && (
                                <div className="space-y-4 mt-6">
                                    <Link href="/about" className="block py-2 text-sm hover:underline">About Company</Link>
                                    <Link href="/faq" className="block py-2 text-sm hover:underline">FAQ</Link>
                                    <Link target='_blank' href="http://careers.atlanticwash.com" className="block py-2 text-sm hover:underline">Careers</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/franchise" className="block py-2 hover:underline">Franchise</Link>
                        <Link
                            href="/atlanticblue"
                            rel="noopener noreferrer"
                            className="px-5 py-2 uppercase font-mono font-semibold tracking-wider   hover:bg-atlantic-blue2  border-2 border-white   text-white inline-block">Atlantic Blue</Link>                    </div>
                </div>
            )}


        </div>
    );
}

function Dropdown({ title, isOpen, setIsOpen }: DropdownProps) {
    return (
        <div className="group relative hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <span className="flex items-center space-x-2">
                <span>{title}</span>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </span>
            {isOpen && (
                <div className="absolute mt-2 w-48 bg-white text-black shadow-lg rounded transition-opacity duration-200">
                    <Link href="/about" className="block px-4 py-2 hover:bg-gray-300">About Company</Link>
                    <Link href="/faq" className="block px-4 py-2 hover:bg-gray-300">FAQ</Link>
                    <Link href="http://careers.atlanticwash.com" target='_blank' className="block px-4 py-2 hover:bg-gray-300">Careers</Link>

                </div>
            )}
        </div>
    );
}

export default Navbar;

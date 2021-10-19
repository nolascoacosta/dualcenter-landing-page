import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {SearchIcon} from "@heroicons/react/outline";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>

            <nav className="relative  bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div>
                                <a href="/#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                    <div className="relative lg:inline-grid w-36 cursor-pointer">
                                        <img src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1"
                                             width="160"
                                             height="32"
                                             alt=""
                                        />
                                    </div>
                                </a>
                            </div>

                            <ul className="hidden md:flex items-center space-x-1 mb-1 ">
                                <li className="hoverable hover:text-black">
                                    <a href="/#" className="block font-semibold py-3 px-2 text-gray-700 border-transparent border-b-2 hover:border-blue-700 hover:text-blue-700">Products</a>
                                    <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl absolute z-0 bg-gray-50">
                                        <div className=" grid grid-cols-3 gap-1 ml-28 " >

                                            <div>1</div>
                                            <div>1</div>
                                            <div>1</div>
                                            <div>1</div>
                                            <div>1</div>
                                            <div>1</div>
                                            <div>1</div>
                                            <div>1</div>
                                            <div>1</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="hoverable hover:text-black">
                                    <a href="/#" className="block font-semibold py-3 px-2 text-gray-700 border-transparent border-b-2 hover:border-blue-700 hover:text-blue-700">Solutions</a>
                                    <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl absolute z-0 bg-gray-50 ">
                                        <div className="grid grid-cols-2 gap-1 ml-28 max-w-6xl">
                                            <div>Solutions</div>
                                            <div>1Solutions</div>
                                            <div>1Solutions</div>
                                            <div>1Solutions</div>
                                        </div>
                                    </div>
                                </li>
                                <li className=" hover:text-black">
                                    <a href="/#" className="block font-semibold py-3 px-2 text-gray-700 border-transparent border-b-2 hover:border-blue-700 hover:text-blue-700">Pricing</a>
                                </li>
                                <li className="hoverable hover:text-black">
                                    <a href="/#" className="block font-semibold py-3 px-2 text-gray-700 border-transparent border-b-2 hover:border-blue-700 hover:text-blue-700">Learn</a>
                                    <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl absolute z-0 bg-gray-50">
                                        <div className="grid grid-cols-2 gap-4 ml-28">
                                            <div>Solutions</div>
                                            <div>1Solutions</div>
                                            <div>1Solutions</div>
                                            <div>1Solutions</div>
                                        </div>
                                    </div>
                                </li>

                                <li className=" hover:text-black">
                                    <a href="/#" className="block font-semibold py-3 px-2 text-gray-700 border-transparent border-b-2 hover:border-blue-700 hover:text-blue-700">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:block lg:flex items-center space-x-1 md:hidden">
                            <div className="relative mt-1 p-2 rounded-md">
                                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                                    <SearchIcon className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    className="p-2 bg-gray-50 block pl-10 sm:text-sm border-gray-300 focus:ring-black
                    focus:border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 w-full "
                                    type="text"
                                    placeholder="Search..."/>
                            </div>
                            <a href="/#"
                               className="px-4 py-1 text-md text-blue-600 font-semibold  border border-blue-600
                            hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none

                            ">Log In</a>
                            <a href="/#"
                               className="px-4 py-1 text-md text-white font-semibold  border border-blue-600
                           bg-blue-700 hover:text-blue-600 hover:bg-white hover:border-blue-600 focus:outline-none


                        ">Start My Free Trial</a>

                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <div className="relative mt-1 p-2 rounded-md">
                                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                                    <SearchIcon className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    className="p-2 bg-gray-50 block pl-10 sm:text-sm border-gray-300 focus:ring-black
                    focus:border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 w-full "
                                    type="text"
                                    placeholder="Search..."/>
                            </div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >

                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden bg-gray-50" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                                <a href="/#" className="block font-semibold py-3 px-2 text-gray-700 hover:text-blue-700">Products</a>
                                <a href="/#" className="block font-semibold py-3 px-2 text-gray-700  hover:text-blue-700">Solutions</a>
                                <a href="/#" className="block font-semibold py-3 px-2 text-gray-700  hover:text-blue-700">Pricing</a>
                                <a href="/#" className="block font-semibold py-3 px-2 text-gray-700  hover:text-blue-700">Learn</a>
                                <a href="/#" className="block font-semibold py-3 px-2 text-gray-700  hover:text-blue-700">Contact</a>

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Header;
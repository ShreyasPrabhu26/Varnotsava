import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (<>
        <nav className="header">
            <div className="">
                {/* <div className="bg-white border-gray-200 dark:bg-gray-900"> */}
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">

                        <img src="/images/logo.png" className="h-10 w-10" alt="Flowbite Logo" />

                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hero-text md:text-4xl">Varnotsava</span>
                    </a>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                        {/* NAV-TOGGLE */}
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">

                        <ul className="uppercase flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <a href="#" className="nav-item " aria-current="page">Events</a>
                            </li>
                            <li>
                                <a href="#" className="nav-item">Gallery</a>
                            </li>
                            <li>
                                <a href="#" className="nav-item">About</a>
                            </li>
                            <li>
                                <a href="#" className="nav-item">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Header
import React, {useState} from 'react';
import Image from 'next/image'
import logo from "../public/images/logo-alternativo.png"
// import * as Scroll from 'react-scroll';
import {Link as LinkScroll} from 'react-scroll'
import Link from "next/link";


const Navbar = () => {
    // MENU ITEMS
    const menu = [
        {name: "QUI SOMMES-NOUS ?", link: "nous"},
        {name: "NOTRE ENGAGEMENT", link: "mission"},
        {name: "CONTACT", link: "contact"},
        {name: "TÉMOIGNAGES", link: "avis"},
    ]

    // MENU BURGER STATE
    const [isOpen, setIsOpen] = useState(false)

    // CUSTOM BUTTON
    const ButtonGetStarted = () => {
        return (
            <LinkScroll to="contact">
                <button
                    className="btn-red py-2 px-6 rounded md:ml-8 duration-50 cursor-pointer">
                    Prenons RDV
                </button>
            </LinkScroll>
        )
    }

    const ButtonGetStartedMobile = () => {
        return (
            <LinkScroll to="contact">
                <button
                    className="btn-red py-2 px-6 rounded md:ml-8 duration-50 cursor-pointer">
                    RDV
                </button>
            </LinkScroll>
        )
    }

    // SVG LOGOS
    const menuBurger =
        <svg version="1.1" id="Capa_1"
             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 50 50"
            // style="enable-background:new 0 0 50 50;"
             xmlSpace="preserve">
            <g>
                <rect y="3" width="50" height="2"/>
                <rect y="17" width="50" height="2"/>
                <rect y="31" width="50" height="2"/>
                <rect y="45" width="50" height="2"/>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>

    const closeBurger = <svg version="1.1" id="Layer_1"
                             xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 371.23 371.23"
                             xmlSpace="preserve">
        <polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23
	185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "/>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
    </svg>


    return (
        <div className="shadow-md fixed top-0 left-0 right-0 z-10">
            <div className="md:flex items-center justify-between bg-white md:py-2 md:px-10 py-5 px-7 z-10">
                {/*LOGO ET BOUTON RDV MOBILE*/}
                <div className="flex items-center">
                    <Link href="/">
                        <Image alt="alternativo logo"
                               src={logo}
                               width={200}
                               className="cursor-pointer w-[160px] md:w-[250px] z-10 mx-0">
                        </Image>
                    </Link>

                    <div className="flex pl-5 md:hidden">
                        <ButtonGetStartedMobile/>
                    </div>
                </div>


                {/*MENU BURGER*/}
                <div onClick={() => setIsOpen(!isOpen)}
                     className="text-3xl w-8 absolute right-8 top-5 cursor-pointer md:hidden z-20">
                    {isOpen ? closeBurger : menuBurger}
                </div>

                <ul className={`md:flex md:items-center
                    md:pb-0 pb-12 absolute md:static
                    bg-white md:z-auto z-[-1]
                    left-0 w-full md:w-auto
                    md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
                    {menu.map(item => (
                        <li key={item.name}
                            className="md:ml-8 text-xl md:text-base lg:text-xl md:my-3 my-7 cursor-pointer">
                            <LinkScroll to={item.link}
                                        className="text-[#174A5B] hover:text-gray-400 duration-500 nav-items active:hover:text-gray-400 cursor-pointer"
                                        onClick={() => {
                                            setIsOpen(false)
                                        }}
                                        spy={true}
                                        smooth={true}
                                // offset={-50}
                                        duration={500}
                            >
                                {item.name}
                            </LinkScroll>
                        </li>
                    ))}
                    <div className="hidden md:flex">
                        <ButtonGetStarted/>
                    </div>
                </ul>
            </div>

        </div>
    )
        ;
};

export default Navbar;
import React, {useState} from 'react';
import Image from 'next/image'
import logo from "../public/images/investment-plant-svgrepo-com.svg"

const Navbar = () => {
    // MENU ITEMS
    const menu = [
        {name: "ACCUEIL", link: "/"},
        {name: "QUI NOUS SOMMES", link: "/"},
        {name: "NOS MISSIONS", link: "#mission"},
        {name: "NOS VALEURS", link: "/"},
        {name: "CONTACT", link: "/"},
    ]

    // MENU BURGER STATE
    const [isOpen, setIsOpen] = useState(false)

    // CUSTOM BUTTON
    const ButtonGetStarted = () => {
        return (
            <button
                className="bg-[#31bafd] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-blue-300 duration-500">
                Prenons RDV
            </button>
        )
    }

    // SVG LOGOS
    const menuBurger =
        <svg version="1.1" id="Capa_1"
             xmlns="http://www.w3.org/2000/svg"
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
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
                <div
                    className="font-[Sono] font-bold md:text-3xl text-2xl cursor-pointer flex items-center text-gray-800">
                    <span className="text-3xl text-blue-700 md:mr-10 mr-4">
                        <Image alt="alternativo logo" src={logo} height={50} width={50}></Image>
                    </span>
                    Alternativo
                </div>
                <div onClick={() => setIsOpen(!isOpen)}
                     className="text-3xl w-5 absolute right-8 top-6 cursor-pointer md:hidden">
                    {isOpen ? closeBurger : menuBurger}
                </div>
                <ul className={`md:flex md:items-center
                    md:pb-0 pb-12 absolute md:static
                    bg-white md:z-auto z-[-1]
                    left-0 w-full md:w-auto
                    md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
                    {menu.map(item => (
                        <li key={item.name} className="md:ml-8 text-xl md:my0 my-7">
                            <a href={item.link}
                               className="text-gray-800 hover:text-gray-400 duration-500"
                               onClick={() => {setIsOpen(false)}}

                            >{item.name}</a>
                        </li>
                    ))}
                    <ButtonGetStarted/>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
import React from 'react';
import logo from "../public/images/logo-bgremoved-white.png"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="hidden sm:block absolute bottom-0 w-full">
            <footer className="bg-[#174A5B] min-h-full">
                <div className="container px-5 md:py-8 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image alt="alternativo logo" src={logo} width={200}/>
                    </Link>
                    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 paragraphe">
                        <Link  href="/cgu" className="ml-1">
							Conditions générales
						</Link>
                    </p>
					<p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 paragraphe">
						<Link href="/mentions" className="ml-1">
							Mentions légales
						</Link>
					</p>
					<p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 paragraphe">©
						2022 Alternativo —
						<Link href="https://fchevalier.com" className="ml-1" rel="noopener noreferrer"
						   target="_blank">@fchevalier</Link>
					</p>

					{/*ICONES RESEAUX SOCIAUX*/}
                    <span className="hidden md:inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

						<a className="red-dark text-gray-500">
							<svg fill="#FF585D" strokeLinecap="round" strokeWidth="2" className="w-5 h-5"
                                 viewBox="0 0 24 24">
							  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						  </a>

						  <a className="red-dark ml-3 text-gray-500">
							<svg fill="#FF585D" strokeLinecap="round" strokeWidth="2" className="w-5 h-5"
                                 viewBox="0 0 24 24">
							  <path
                                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						  </a>

						  <a className="red-dark ml-3 text-gray-500">
							<svg fill="transparent" stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                 className="w-5 h-5" viewBox="0 0 24 24">
							  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
							  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						  </a>

						  <a className="red-dark ml-3 text-gray-500">
							<svg fill="#FF585D" stroke="currentColor" strokeLinecap="round" strokeWidth="0"
                                 className="w-5 h-5" viewBox="0 0 24 24">
							  <path stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
							  <circle cx="4" cy="4" r="2" stroke="none"></circle>
							</svg>
						  </a>

					</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
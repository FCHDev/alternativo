import React from 'react';
import piggy from "../public/images/piggy.jpg";
import dream from "../public/images/heaven.jpeg";
import advisorySVG from "../public/SVG/financial-advisor.svg";
import dreamingSVG from "../public/SVG/dream.svg";
import Image from "next/image";

const Missions = () => {
    return (
        <div id="mission" className="md:mt-0 min-h-screen flex justify-center items-center smooth mb-14 md:mb-0">
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <h1 className="sm:text-4xl text-3xl font-medium text-center sm:mb-10 pt-20 md:pt-0">
                        <span className="font-bold red-dark">
                            Nos missions
                        </span>
                        <br className="md:hidden lg:inline-block"/>
                    </h1>

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-full flex flex-col md:flex-row mt-10">

                            <div className="md:w-1/2 flex flex-col sm:h-[350px] items-center mb-10 sm:mb-0">
                                <Image className="h-full w-auto mb-5 sm:mb-10 rounded-xl object-cover filter" src={piggy} alt="cochon"/>
                                <div className="flex">
                                    <div
                                        className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#FFC2C4] text-[#FF585D] mb-4 flex-shrink-0">
                                        <Image src={advisorySVG} className="w-7 h-7" alt="icon conseil"/>
                                    </div>
                                    <div className="flex-grow pl-6">
                                        <h2 className="red-dark text-lg font-medium mb-2 lg:text-2xl">
                                            Conseiller
                                        </h2>
                                        <p className="leading-relaxed text-base paragraphe lg:text-xl">
                                            Permettre à tous, quelque que soit ses moyens et ses ambitions, d’accéder à un
                                            conseil financier adapté pour prendre des décisions éclairées.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 flex flex-col sm:h-[350px] items-center mb-10 sm:mb-0">
                                <Image className="h-full w-auto mb-5 sm:mb-10 rounded-xl object-cover filter" src={dream} alt="cochon"/>
                                <div className="flex">
                                    <div
                                        className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#FFC2C4] text-[#FF585D] mb-4 flex-shrink-0">
                                        <Image src={dreamingSVG} className="w-7 h-7" alt="icon conseil"/>
                                    </div>
                                    <div className="flex-grow pl-6">
                                        <h2 className="red-dark text-lg font-medium mb-2 lg:text-2xl">
                                            Faire rêver
                                        </h2>
                                        <p className="leading-relaxed text-base paragraphe lg:text-xl">
                                            Donner les clés aux gens pour qu’ils accomplissent leurs rêves.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Missions;
import React from 'react';
// import piggy from "../public/images/piggy.jpg";
// import dream from "../public/images/heaven.jpeg";
import landscape from "../public/images/iStock-1057269644_resize.jpg";
// import advisorySVG from "../public/SVG/financial-advisor.svg";
// import dreamingSVG from "../public/SVG/dream.svg";
import Image from "next/image";

const Missions = () => {
    return (
        <div id="mission"
             className="2xl:pt-10 pt-20 md:pt-4 lg:pt-16 xl:pt-0 md:min-h-screen flex justify-center items-center">
            <section className="text-gray-600 body-font -mt-20">
                <div className="container px-5 mx-auto md:mt-40">
                    <h1 className="sm:text-4xl text-3xl font-medium text-center py-10">
                        <span className="font-bold red-dark">
                            Notre mission
                        </span>
                        <br className="md:hidden lg:inline-block"/>
                    </h1>

                    <Image className="mb-5 sm:mb-10 rounded-xl object-cover mx-auto" src={landscape}
                           alt="paysage" height={600}/>

                    <div className="flex justify-center items-center md:w-1/2 mx-auto ">
                        <p className="leading-relaxed text-center text-lg paragraphe lg:text-xl">
                            Permettre à tous, quelque que soit ses moyens et ses ambitions, d’accéder à
                            un conseil financier adapté pour prendre des décisions éclairées.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Missions;
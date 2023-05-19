import React from 'react';
// import piggy from "../public/images/piggy.jpg";
// import dream from "../public/images/heaven.jpeg";
// import advisorySVG from "../public/SVG/financial-advisor.svg";
// import dreamingSVG from "../public/SVG/dream.svg";
// import Image from "next/image";

const Vision = () => {
    return (
        <div id="vision" className="2xl:pt-10 pt-0 md:pt-4 lg:pt-16 xl:pt-0 flex justify-center items-center">
            <section className="text-gray-600 body-font mt-20">
                <div className="container px-5 mx-auto">
                    <h1 className="sm:text-4xl text-3xl font-medium text-center py-10">
                        <span className="font-bold red-dark">
                            Notre vision
                        </span>
                        <br className="md:hidden lg:inline-block"/>
                    </h1>

                    <div className="flex justify-center items-center mx-auto ">
                        <p className="leading-relaxed text-center text-lg paragraphe lg:text-xl">
                            Donner les clés aux gens pour qu’ils accomplissent leurs rêves.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vision;
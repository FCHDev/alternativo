import React from 'react';
import ResponsiveCarousel from "./ResponsiveCarousel";

const Avis = () => {

    return (
        <div id="avis" className="md:mt-0 min-h-screen flex justify-center items-center smooth mb-14 md:mb-0">
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto flex flex-col items-center">
                    <h2 className="font-bold red-dark sm:text-4xl text-2xl font-medium text-center mt-10 mb-5">
                            Ils nous font confiance...
                    </h2>
                    <div className="2xl:mb-20 mb-1 mt-1 border border-opacity-50 border-[#174A5B] rounded-xl py-1 px-4 md:text-xl text-[#174A5B]">
                        Taux de recommandation : <span className="font-bold font-mono text-[#FF585D]">98%</span>
                    </div>
                    <div className="text-xs italic mb-3 text-gray-400">
                        <span className="underline">Source</span> : Opinion Way
                    </div>

                    <ResponsiveCarousel />

                </div>
            </section>
        </div>
    );
};

export default Avis;
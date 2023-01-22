import React from 'react';
import ResponsiveCarousel from "./ResponsiveCarousel";

const Avis = () => {
    return (
        <div id="avis" className="md:mt-0 min-h-screen flex justify-center items-center smooth mb-14 md:mb-0">
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <h1 className="sm:text-4xl text-3xl font-medium text-center mb-5 md:mb-10 pt-20 md:pt-0">
                        <span className="font-bold red-dark">
                            Ils nous font confiance
                        </span>
                    </h1>

                    <ResponsiveCarousel />

                </div>
            </section>
        </div>
    );
};

export default Avis;
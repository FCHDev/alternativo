import React from "react";
import Calendly from "./Calendly";

const Contact = () => {

    return (
        <div id="contact" className="md:mt-0 mt-10 mb-10 md:mb-0 min-h-screen flex flex-col justify-center items-center">
            <section className="text-gray-600 body-fon lg:pt-28">
                <h1 className="sm:text-4xl text-3xl font-medium text-center py-10 md:pt-10 lg:pt-0">
                        <span className="font-bold red-dark">
                            Contact
                        </span>
                </h1>
                {/*<a href="https://calendly.com/alternativo">*/}
                {/*    Déjà en contact ?*/}
                {/*</a>*/}

                <Calendly/>

            </section>
        </div>
    );
};

export default Contact;
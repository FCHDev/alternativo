import React from "react";
import Calendly from "./Calendly";

const Contact = () => {

    return (
        <div id="contact" className="md:mt-0 mt-10 min-h-screen flex flex-col justify-center items-center">
            <section className="text-gray-600 body-font">
                <h1 className="title-font sm:text-4xl text-3xl md:mt-16 font-medium text-gray-900 text-center">
                        <span className="font-bold text-[#32BAFE]">
                            Contact
                        </span>
                    <br className="md:hidden lg:inline-block"/>
                </h1>

                <Calendly/>

            </section>
        </div>
    );
};

export default Contact;
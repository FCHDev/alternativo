import React from "react";

const Contact = () => {


    return (
        <div id="contact" className="md:mt-0 min-h-screen flex flex-col justify-center items-center">
            <h1 className="title-font sm:text-4xl text-3xl md:mb-16 mb-10 font-medium text-gray-900 text-center">
                        <span className="font-bold text-[#32BAFE]">
                            Contact
                        </span>
                <br className="md:hidden lg:inline-block"/>
            </h1>
            <div data-url="https://calendly.com/frnchevalier" style={{minWidth: "320px", height: "630px"}}></div>

        </div>
    );
};

export default Contact;
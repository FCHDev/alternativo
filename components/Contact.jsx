import React from "react";
import Calendly from "./Calendly";
import Link from "next/link";

const Contact = () => {

    const ButtonGetStartedCustomer = () => {
        return (
            <Link href="https://calendly.com/alternativo">
                <button
                    className="btn-blue py-2 px-6 rounded duration-50 cursor-pointer mx-auto mt-3">
                    Déjà client ?
                </button>
            </Link>
        )
    }

    return (
        <div id="contact"
             className="md:mt-0 mt-10 mb-10 md:mb-0 min-h-screen flex flex-col justify-center items-center">
            <section className="text-gray-600 body-font lg:pt-28 flex flex-col items-center justify-center">
                <h1 className="sm:text-4xl text-3xl font-medium text-center md:pt-10 lg:pt-0 mb-3">
                    <span className="font-bold red-dark">Contact</span><br/>
                </h1>
                <ButtonGetStartedCustomer/>
                <Calendly/>

            </section>
        </div>
    );
};

export default Contact;
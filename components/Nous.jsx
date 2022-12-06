import React from 'react';
import Image from "next/image";

const Nous = () => {
    return (
        <div className="md:mt-0 min-h-screen flex justify-center items-center" id="nous">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><span
                            className="big-title font-bold text-[#32BAFE]">Alternativo</span>

                            <br className="md:hidden lg:inline-block"/>Nous sommes à votre service
                        </h1>
                        <p className="mb-8 leading-relaxed paragraphe">If you could count the skeletons in my closet.
                            Under my bed and up under my faucet. Then you would know I've completely lost it. Is he
                            nuts? No, he's insane. If you could count the skeletons in my closet. Under my bed and up
                            under my faucet. Then you would know I've completely lost it. Is he nuts? No, he's
                            insane.Bagpipes from Baghdad..</p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-[#32bafe] border-0 py-2 px-6 focus:outline-none hover:bg-[#EBF8FF] hover:text-[#32bafe] rounded text-lg">Button
                            </button>
                            <button
                                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 overflow-hidden">
                        <Image className="filter object-cover object-center rounded-xl" alt="hero"
                               src="/images/vision1.jpg"
                               width={720}
                               height={600}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Nous;
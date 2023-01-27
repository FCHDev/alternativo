import React from 'react';
import Image from "next/image";

const Nous = () => {
    return (
        <div className="md:mt-0 min-h-screen flex justify-center items-center" id="nous">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                        <h1 className="text-2xl md:text-5xl mb-5 font-bold text-[#174A5B]">
                            Experts en <span className="red-dark">gestion de patrimoine</span> <br className="md:block hidden"></br>dans le Sud-Ouest
                        </h1>
                        <p className="mb-8 leading-relaxed paragraphe lg:text-xl">If you could count the skeletons in my
                            closet.
                            Under my bed and up under my faucet. Then you would know I've completely lost it. Is he
                            nuts? No, he's insane. If you could count the skeletons in my closet. Under my bed and up
                            under my faucet. Then you would know I've completely lost it. Is he nuts? No, he's
                            insane.Bagpipes from Baghdad..</p>
                        <p className="mb-8 leading-relaxed paragraphe lg:text-xl md:block hidden">Calm down, Marty, I didn’t
                            disintegrate anything. The molecular structure of Einstein and the car are completely
                            intact. Marty you gotta come back with me. Of course, from a group of Libyan Nationalists.
                            They wanted me to build them a bomb, so I took their plutonium and in turn gave them a shiny
                            bomb case full of used pinball machine parts. Yoo. Yoo.</p>
                        {/*<div className="flex justify-center">*/}
                        {/*    <button*/}
                        {/*        className="btn-blue inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">Button*/}
                        {/*    </button>*/}
                        {/*    <button*/}
                        {/*        className="btn-red ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">Button*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-2/3 w-full overflow-hidden mb-5 md:mb-0">
                        <Image className="filter object-cover object-center rounded-xl" alt="auteur: de Dani Fuentes sur Unsplash"
                               src="/images/biarritz2.jpg"
                               width={720}
                               height={600}/>
                        <div
                            className="md:hidden flex flex-col items-center text-center">
                        <p className="my-8 leading-relaxed paragraphe ">Calm down, Marty, I didn’t
                            disintegrate anything. The molecular structure of Einstein and the car are completely
                            intact. Marty you gotta come back with me. Of course, from a group of Libyan Nationalists.
                            They wanted me to build them a bomb, so I took their plutonium and in turn gave them a shiny
                            bomb case full of used pinball machine parts. Yoo. Yoo.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Nous;
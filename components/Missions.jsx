import React from 'react';

const Missions = () => {
    return (
        <div id="mission" className="md:mt-0 min-h-screen flex justify-center items-center smooth mb-14 md:mb-0">
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <h1 className="sm:text-4xl text-3xl font-medium text-center mb-10 pt-20 md:pt-0">
                        <span className="font-bold red-dark">
                            Nos missions
                        </span>
                        <br className="md:hidden lg:inline-block"/>
                    </h1>

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex">
                            <div
                                className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#FFC2C4] text-[#FF585D] mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="red-dark text-lg font-medium mb-2 lg:text-2xl">
                                    Conseiller
                                </h2>
                                <p className="leading-relaxed text-base paragraphe lg:text-xl">
                                    Feminist women love Eminem. Chicka,
                                    chicka, chicka, Slim Shady, I'm sick of him. Look at him, walkin around, grabbin
                                    his you-know-what. Flippin the you-know-who,Yeah, but he's so cute though.
                                    Yeah, I probably got a couple of screws up in my head loose. But no worse than
                                    what's goin on in your parents bedrooms.
                                </p>
                                <a className="red-dark mt-3 inline-flex items-center">
                                    En savoir plus...
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                            <div
                                className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#FFC2C4] text-[#FF585D] mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="red-dark text-lg title-font font-medium mb-2 lg:text-2xl">
                                    Anticiper
                                </h2>
                                <p className="leading-relaxed text-base paragraphe lg:text-xl">
                                    What's going through my mind. Half
                                    the time, when I rhyme, or blowing up like. Bagpipes from Baghdad. Somebody turn the
                                    vacancy sign on. Cause I'm gone, blowing on my. Bagpipes from Baghdad. I run the
                                    streets. And act like a madman holding a Glad.
                                </p>
                                <a className="red-dark mt-3 inline-flex items-center">
                                    En savoir plus...


                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                            <div
                                className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#FFC2C4] text-[#FF585D] mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="red-dark text-lg title-font font-medium mb-2 lg:text-2xl">
                                    Orienter
                                </h2>
                                <p className="leading-relaxed text-base paragraphe lg:text-xl">
                                    I've created a monster, cause
                                    nobody wants to. See Marshall no more, they want Shady, I'm chopped liver. Well, if
                                    you want Shady, this is what I'll give ya. A little bit of weed mixed with some hard
                                    liquor. Some vodka that'll jump start my heart quicker. Than a shock when I get
                                    shocked at the hospital.
                                </p>
                                <a className="red-dark mt-3 inline-flex items-center">
                                    En savoir plus...
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Missions;
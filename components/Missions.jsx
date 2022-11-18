import React from 'react';

const Missions = () => {
    return (
        <div id="mission" className="md:mt-0 min-h-screen flex justify-center items-center">
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <h1 className="title-font sm:text-4xl text-3xl md:mb-16 mb-10 font-medium text-gray-900 text-center">
                        <span className="font-bold text-[#32BAFE]">
                            Nos missions
                        </span>
                        <br className="md:hidden lg:inline-block"/>
                    </h1>

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex">
                            <div
                                className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#EBF8FF] text-[#32bafe] mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Conseiller</h2>
                                <p className="leading-relaxed text-base paragraphe">Bavarian bergkase taleggio jarlsberg. Paneer
                                    swiss swiss goat hard cheese feta say cheese say cheese. Cheesy grin emmental cheesy
                                    grin red leicester stilton gouda roquefort squirty cheese. Swiss.</p>
                                <a className="mt-3 text-[#32bafe] inline-flex items-center">En savoir plus...
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                            <div
                                className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#EBF8FF] text-[#32bafe] mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Anticiper</h2>
                                <p className="leading-relaxed text-base paragraphe">Everyone loves cheese strings blue castello.
                                    Cheddar fromage st. agur blue cheese manchego emmental cream cheese babybel ricotta.
                                    Blue castello cheesy feet dolcelatte fromage red leicester jarlsberg port-salut
                                    gouda. Hard cheese red leicester ricotta port-salut.</p>
                                <a className="mt-3 text-[#32bafe] inline-flex items-center">En savoir plus...
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                            <div
                                className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#EBF8FF] text-[#32bafe] mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Orienter</h2>
                                <p className="leading-relaxed text-base paragraphe">Blue bottle crucifix vinyl post-ironic four
                                    dollar
                                    toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug
                                    VHS
                                    try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                                <a className="mt-3 text-[#32bafe] inline-flex items-center">En savoir plus...
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
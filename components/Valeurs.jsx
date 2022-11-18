import React from 'react';

const Valeurs = () => {
    return (
        <div id="valeurs" className="md:mt-0 min-h-screen flex justify-center items-center">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full"
                             src="/images/playa.jpg"/>
                    </div>
                    <div
                        className="flex flex-col flex-wrap lg:py-6 -mb-10 mt-5 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div
                                className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#EBF8FF] text-[#32BAFE] mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Le surf</h2>
                                <p className="leading-relaxed text-base paragraphe">Queso queso cut the cheese. Blue castello who
                                    moved my cheese halloumi fondue lancashire cheesy grin smelly cheese st. agur blue
                                    cheese. Cow rubber cheese cheese and wine cheeseburger squirty cheese cheese
                                    triangles cheese and biscuits ricotta. Cheese and wine smelly cheese cheese strings
                                    airedale blue castello.</p>
                                <a className="mt-3 text-[#32BAFE] inline-flex items-center">En savoir plus...
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2"
                                         viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div
                                className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#EBF8FF] text-[#32BAFE] mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Le café</h2>
                                <p className="leading-relaxed text-base paragraphe">Jarlsberg cottage cheese swiss. St. agur blue
                                    cheese fondue roquefort fromage frais cheeseburger the big cheese halloumi chalk and
                                    cheese. Goat everyone loves halloumi croque monsieur cheddar red leicester croque
                                    monsieur roquefort. Danish fontina say cheese parmesan.</p>
                                <a className="mt-3 text-[#32BAFE] inline-flex items-center">En savoir plus...
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2"
                                         viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div
                                className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#EBF8FF] text-[#32BAFE] mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Le Sud-Ouest</h2>
                                <p className="leading-relaxed text-base paragraphe">Swiss cheesy grin cheddar. Cheese on toast
                                    stinking bishop cheese triangles mozzarella cream cheese babybel mozzarella
                                    dolcelatte. Cut the cheese taleggio cheesecake brie hard cheese stinking bishop
                                    jarlsberg lancashire. Boursin cheeseburger.</p>
                                <a className="mt-3 text-[#32BAFE] inline-flex items-center">En savoir plus...
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2"
                                         viewBox="0 0 24 24">
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

export default Valeurs;
import React from 'react';
import landscape from "../public/images/iStock-1057269644_resize.jpg";
import Image from "next/image";
import accessibility from "../public/SVG/accessibility.svg";
import confidential from "../public/SVG/confidential.svg";
import responsible from "../public/SVG/responsibility.svg";
import available from "../public/SVG/availability.svg";
import simple from "../public/SVG/simplicity.svg";
import respect from "../public/SVG/respect.svg";
// import piggy from "../public/images/piggy.jpg";
// import dream from "../public/images/heaven.jpeg";
// import advisorySVG from "../public/SVG/financial-advisor.svg";
// import dreamingSVG from "../public/SVG/dream.svg";

const Missions = () => {

    const valeurs = [
        {
            id: 1,
            icon: accessibility,
            title: "Accessibilité",
            text: "Pour nous, l'accessibilité signifie savoir se rendre facilement accessible et disponible pour ses clients. Cela peut inclure des moyens de communication qui vous conviennent le mieux, des horaires de bureau étendus, et des interactions personnalisées avec vous."
        },
        {
            id: 2,
            icon: confidential,
            title: "Confidentialité",
            text: "La confidentialité est un élément clé de la relation de confiance. Vous devez être assurés que vos informations financières et personnelles sont conservées en toute sécurité et protégées contre les risques de violation de la vie privée."
        },
        {
            id: 3,
            icon: responsible,
            title: "Responsabilité",
            text: "Nous sommes tenus responsables de nos actions et de notre performance pour le service que nous vous proposons, en nous assurant de respecter les normes éthiques, juridiques et professionnelles."
        },
        {
            id: 4,
            icon: available,
            title: "Disponibilité",
            text: "Nous sommes disponibles pour répondre à vos demandes, en vous fournissant des informations et des conseils utiles et personnalisés à votre contexte."
        },
        {
            id: 5,
            icon: simple,
            title: "Simplicité",
            text: "La gestion de patrimoine peut être un sujet complexe, avec de nombreux détails et des termes techniques. Nous vous assurons de communiquer des informations financières complexes de manière simple et compréhensible, en simplifiant les concepts complexes et en offrant des options de gestion de patrimoine simples."
        },
        {
            id: 6,
            icon: respect,
            title: "Respect",
            text: "Valeur fondamentale à nos yeux, le respect de vos souhaits et de vos objectifs, en tenant compte de votre tolérance au risque, de votre horizon de placement et de votre situation financière."
        }
    ]


    return (
        <div id="mission"
             className="2xl:pt-10 pt-20 md:pt-4 lg:pt-16 xl:pt-0 md:min-h-screen flex justify-center items-center">
            <section className="text-gray-600 body-font -mt-20">

                <div className="container px-5 mx-auto md:mt-40 md:flex">
                    {/*IMAGE DESKTOP*/}
                    <div className="hidden md:flex md:w-1/2 md:mb-16">
                        <Image className="mb-5 sm:mb-0 rounded-xl object-cover mx-auto" src={landscape}
                               alt="paysage" height={600}/>
                    </div>

                    {/*MISSION ET VISION*/}
                    <div className="md:w-1/2 pl-4">
                        <h1 className="sm:text-4xl text-3xl font-medium text-center md:py-10">
                        <span className="font-bold red-dark">
                            Notre mission
                        </span>
                            <br className="md:hidden lg:inline-block"/>
                        </h1>
                        <div className="flex justify-center items-center mx-auto ">
                            <q className="leading-relaxed text-center text-lg paragraphe lg:text-xl">
                                Permettre à tous, quelque que soit ses moyens et ses ambitions, d’accéder à
                                un conseil financier adapté pour prendre des décisions éclairées.
                            </q>
                        </div>

                        <h1 className="sm:text-4xl text-3xl font-medium text-center md:py-10 md:mt-0 mt-5">
                        <span className="font-bold red-dark">
                            Notre vision
                        </span>
                            <br className="md:hidden lg:inline-block"/>
                        </h1>
                        <div className="flex justify-center items-center mx-auto ">
                            <q className="leading-relaxed text-center text-lg paragraphe lg:text-xl">
                                Donner les clés aux gens pour qu’ils accomplissent leurs rêves.
                            </q>
                        </div>
                    </div>
                    {/*IMAGE MOBILE*/}
                    <div className="flex md:hidden md:w-1/2 md:mb-16">
                        <Image className="my-5 sm:mb-0 rounded-xl object-cover mx-auto" src={landscape}
                               alt="paysage" height={600}/>
                    </div>

                </div>

                {/*VALEURS*/}
                <div className="flex flex-col justify-center items-center md:mt-0">
                    <h1 className="flex md:hidden sm:text-4xl text-3xl font-medium md:py-10 py-3">
                        <span className="font-bold red-dark">
                            Nos valeurs
                        </span>
                        <br className="md:hidden"/>
                    </h1>

                    <div
                        className="flex flex-col items-start md:flex-row -mb-10 md:mt-0 lg:text-left text-center">
                        {valeurs.map((item) =>
                            <div key={item.id} className="flex flex-col mb-10 lg:items-start items-center">
                                <div className="flex mx-auto items-center px-3">
                                    <div
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#174A5B] mb-5 mr-3">
                                        <Image className="h-7 w-auto" src={item.icon} alt={item.title}/>
                                    </div>
                                    <h2 className="text-[#174A5B] text-xl title-font mb-4 lg:text-xl">
                                        {item.title}
                                    </h2>
                                </div>

                            </div>
                        )}
                    </div>

                </div>


            </section>
        </div>
    );
};

export default Missions;
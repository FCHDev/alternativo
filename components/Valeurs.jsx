import React from 'react';
import Image from "next/image";
import accessibility from "../public/SVG/accessibility.svg";
import confidential from "../public/SVG/confidential.svg";
import responsible from "../public/SVG/responsibility.svg";
import available from "../public/SVG/availability.svg";
import simple from "../public/SVG/simplicity.svg";
import respect from "../public/SVG/respect.svg";

const Valeurs = () => {

    const valeurs1 = [
        {
            id: 1,
            icon: accessibility,
            title: "Accessibilité",
            text: "Pour une entreprise de conseil en gestion de patrimoine, l'accessibilité signifie être facilement accessible et disponible pour ses clients. Cela peut inclure des moyens de communication pratiques, des horaires de bureau étendus, des services en ligne accessibles et des interactions personnalisées avec les conseillers financiers."
        },
        {
            id: 2,
            icon: confidential,
            title: "Confidentialité",
            text: "La confidentialité est un élément clé de la relation de confiance entre un conseiller en gestion de patrimoine et son client. Les clients doivent être assurés que leurs informations financières et personnelles sont conservées en toute sécurité et protégées contre les risques de violation de la vie privée."
        },
        {
            id: 3,
            icon: responsible,
            title: "Responsabilité",
            text: "La responsabilité est un élément essentiel de la prestation de services de conseil en gestion de patrimoine. Les conseillers doivent être tenus responsables de leurs actions et de leur performance pour les clients qu'ils servent, en s'assurant de respecter les normes éthiques, juridiques et professionnelles."
        }
    ]
    const valeurs2 = [
        {
            id: 4,
            icon: available,
            title: "Disponibilité",
            text: "Les clients ont souvent besoin d'une assistance rapide et réactive de la part de leur conseiller en gestion de patrimoine. Les conseillers doivent être disponibles pour répondre aux demandes de leurs clients, en fournissant des informations et des conseils utiles en temps opportun."
        },
        {
            id: 5,
            icon: simple,
            title: "Simplicité",
            text: "La gestion de patrimoine peut être un sujet complexe, avec de nombreux détails et des termes techniques. Les conseillers doivent être en mesure de communiquer des informations financières complexes de manière simple et compréhensible pour leurs clients, en simplifiant les concepts complexes et en offrant des options de gestion de patrimoine simples."
        },
        {
            id: 6,
            icon: respect,
            title: "Respect",
            text: "Le respect est une valeur fondamentale pour toute entreprise de conseil en gestion de patrimoine. Les conseillers doivent respecter les souhaits et les objectifs de leurs clients, en tenant compte de leur tolérance au risque, de leur horizon de placement et de leur situation financière. Les clients doivent être traités avec respect et dignité, indépendamment de leur patrimoine ou de leur situation personnelle."
        }
    ]


    return (
        <div id="valeurs" className="mt-10 md:mt-24 min-h-screen flex justify-center items-center">
            <section className="text-gray-600 body-font">
                {/*TITRE*/}
                <h1 className="sm:text-4xl text-3xl font-medium text-center mb-5 sm:mb-10 pt-20 md:pt-0">
                        <span className="font-bold red-dark">
                            Nos valeurs
                        </span>
                    <br className="md:hidden lg:inline-block"/>
                </h1>

                <div className="container px-5 mx-auto flex flex-wrap">

                    {/*PARTIE 1*/}
                    <div
                        className="flex flex-col flex-wrap lg:py-6 -mb-10 md:mt-0 mt-5 lg:w-1/3 lg:pr-12 lg:text-left text-center">
                        {valeurs1.map((item) =>
                            <div key={item.id} className="md:h-[330px] 2xl:h-[280px] flex flex-col mb-10 lg:items-start items-center">
                                <div className="flex-grow">
                                    <div className="flex items-center">
                                        <div
                                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#174A5B] mb-5 mr-3">
                                            <Image className="h-7 w-auto" src={item.icon} alt={item.title}/>
                                        </div>
                                        <h2 className="text-[#174A5B] text-lg title-font font-medium mb-3 lg:text-2xl">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <p className="text-start sm:leading-relaxed text-base paragraphe lg:text-lg">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/*IMAGE*/}
                    <div className="flex justify-center lg:w-1/3 w-full lg:mb-0 my-5 sm:my-0 rounded-lg overflow-hidden">
                        <Image alt="feature"
                               className="object-cover object-center md:h-5/6 sm:h-[800] w-[736] rounded-lg my-auto"
                               src="/images/playa.jpg"
                               width={920}
                               height={1000}/>
                    </div>

                    {/*PARTIE 2*/}
                    <div
                        className="flex flex-col flex-wrap h-full lg:py-6 -mb-10 md:mt-0 mt-5 lg:w-1/3 lg:pl-12 lg:text-left text-center">
                        {valeurs2.map((item) =>
                            <div key={item.id} className="md:h-[330px] 2xl:h-[280px] flex flex-col mb-10 lg:items-start items-center">
                                <div className="flex-grow">
                                    <div className="flex items-center">
                                        <div
                                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#174A5B] mb-5 mr-3">
                                            <Image className="h-7 w-auto" src={item.icon} alt={item.title}/>
                                        </div>
                                        <h2 className="text-[#174A5B] text-lg title-font font-medium mb-3 lg:text-2xl">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <p className="text-start sm:leading-relaxed text-base paragraphe lg:text-lg">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Valeurs;
import React from 'react';
import Image from "next/image";

const Nous = () => {
    return (
        <div className="xl:pt-16 flex justify-center items-center" id="nous">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/3 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center pr-5">
                        <h1 className="text-2xl md:text-[2.7rem] md:leading-tight mb-5 font-bold text-[#174A5B]">
                            Experts en <span className="red-dark">gestion de patrimoine</span> <br
                            className="md:block hidden"></br><span className="">dans le Sud-Ouest</span>
                        </h1>
                        <p className="mb-8 leading-relaxed paragraphe lg:text-xl">
                            Alternativo est un cabinet de conseil en investissements et en gestion de patrimoine créée en 2019 à Bordeaux, dans le quartier des Chartrons.
                            Aujourd’hui nichée au cœur du Pays Basque, cette société familiale a pour but d'accompagner ses clients à faire leurs propres choix financiers en fonction de leurs projets de vie.</p>
                        <p className="mb-8 leading-relaxed paragraphe lg:text-xl md:block hidden">
                            Chez Alternativo, nous avons à cœur de démocratiser la gestion patrimoniale.
                            C'est la raison pour laquelle nous pratiquons un conseil avisé mais décomplexé.
                            Et parce que la gestion financière n'est pas qu'une question d'argent, nous mettons la relation humaine au centre de nos échanges.
                        </p>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-2/3 w-full overflow-hidden mb-5 md:mb-0">
                        <Image className="object-cover object-center rounded-xl"
                               alt="auteur: de Dani Fuentes sur iStock"
                               src="/images/iStock-464705328_resize.jpg"
                               width={720}
                               height={600}
                               priority={true}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Nous;
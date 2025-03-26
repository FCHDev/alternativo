import Head from 'next/head'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Mentions() {

    return (
        <div className="relative min-h-screen flex flex-col justify-center">
            <div className="container mx-auto flex-col overflow-x-clip">
                <Head>
                    <title>Alternativo, mentions légales</title>
                    <meta name="description" content="partenaire gestion conseil finance investissements"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="apple-touch-icon" href="/logo-alternativo-ico.png"/>
                    <link rel="icon" href="/alternativo-ico.ico"/>
                </Head>

                <Navbar/>
                <div className="container my-20 sm:my-0 sm:justify-center font-[Poppins] px-2 sm:px-0">
                    <h1 className="text-xl sm:text-2xl 2xl:text-4xl pb-5 red-dark font-bold">
                        Mentions Légales
                    </h1>
                    <p className="pb-5 2xl:text-xl">
                        Le présent site 'www.alternativo.fr' est la propriété de la société <strong
                        className="font-bold red-dark">ALTERNATIVO</strong>, une société par
                        actions simplifiée au capital de 1 000 euros, immatriculée au Registre du Commerce et des
                        Sociétés de Bordeaux sous le numéro 878 462 027, sous le code NAF 6619B - Autres activités
                        auxiliaires de services financiers, hors assurance et caisses de retraite, n.c.a, sous le numéro
                        de TVA FR77878462027, dont le siège social est situé 54 route de
                        Saint-Pée, 64210 Arbonne.
                    </p>

                    <p className="pb-5 2xl:text-xl">
                        La société <strong className="font-bold red-dark">ALTERNATIVO</strong> est enregistrée à l'ORIAS
                        sous le numéro 9008185, consultable sur le
                        site <Link href="https://www.orias.fr" rel="noopener noreferrer" target="_blank"
                                   className="underline font-semibold">www.orias.fr</Link>.
                    </p>

                    <p>La société <strong className="font-bold red-dark">ALTERNATIVO</strong> exerce en tant que
                        Conseiller en Investissements Financiers, sous la tutelle de l’AMF (<Link
                            href="https://www.amf-france.org" rel="noopener noreferrer" target="_blank"
                            className="underline font-semibold">www.amf-france.org</Link>, site du médiateur AMF <Link
                            href="https://www.amf-france.org/fr/le-mediateur" rel="noopener noreferrer" target="_blank"
                            className="underline font-semibold">https://www.amf-france.org/fr/le-mediateur</Link>),
                        membre n°E009333 de l'ANACOFI-CIF, une association agréée par l'Autorité des Marchés Financiers.
                    </p>
                    <br></br>
                    <p>
                        La société <strong className="font-bold red-dark">ALTERNATIVO</strong> est également mandataire
                        d'Intermédiaire en Assurance et mandataire
                        d'Intermédiaire en Opérations de Banque et Services de Paiement, membre de l’ANACOFI-COURTAGE,
                        une association agréée par l'Autorité des Marchés Financiers.
                    </p>
                    <br></br>
                    <p>
                        La société <strong className="font-bold red-dark">ALTERNATIVO</strong> est sous le contrôle de
                        l'Autorité de Contrôle Prudentiel et de
                        Résolution (<Link href="https://www.acpr.banque-france.fr" rel="noopener noreferrer"
                                          target="_blank"
                                          className="underline font-semibold">acpr.banque-france.fr</Link>), située au 4
                        Place de Budapest, 75436 Paris Cedex 9.
                    </p>
                    <br></br>
                    <p className="pb-5 2xl:text-xl">
                        La société <strong className="font-bold red-dark">ALTERNATIVO</strong> est titulaire de la carte
                        professionnelle Transaction sur Immeubles sans
                        réception de fonds n° CPI 3301 2019 000 043 756, délivrée par la Chambre de Commerce et
                        d'Industrie de Bordeaux et valable jusqu'au 10/12/2025, régie par la loi Hoguet.
                    </p>
                    <p className="pb-5 2xl:text-xl">
                        La société <strong className="font-bold red-dark">ALTERNATIVO</strong> dispose d'une garantie
                        financière et d'une assurance responsabilité
                        civile professionnelle conformes au Code des Assurances.
                    </p>
                    <p className="pb-5 2xl:text-xl">
                        La société <strong className="font-bold red-dark">ALTERNATIVO</strong> est rémunérée par ses
                        partenaires via des rétro-commissions sur les solutions proposées à ses clients.
                    </p>
                    <p className="pb-5 2xl:text-xl">
                        Le présent site a été réalisé par <Link href="https://fchevalier.com"
                                                                className="underline font-semibold"
                                                                rel="noopener noreferrer"
                                                                target="_blank">François Chevalier</Link> (Société
                        Knight&Dev / SIREN 919 284 000) et est hébergé par <Link href="https://www.netlify.com/"
                                                                                 className="underline font-semibold"
                                                                                 rel="noopener noreferrer"
                                                                                 target="_blank">Netlify Inc.</Link>,
                        dont le siège social est situé au 2325 3rd Street, Suite 296, San Francisco, Californie 94107.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

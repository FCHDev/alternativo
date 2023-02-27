import Head from 'next/head'
import Footer from "../../components/Footer";
import NavbarAlt from "../../components/NavbarAlt";

export default function Cgu() {

    return (
        <div className="relative min-h-screen flex flex-col justify-center">
            <div className="container mx-auto flex-col">
                <Head>
                    <title>Alternativo, mentions légales</title>
                    <meta name="description" content="partenaire gestion conseil finance investissements"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="apple-touch-icon" href="/logo-alternativo-ico.png"/>
                    <link rel="icon" href="/alternativo-ico.ico"/>
                </Head>

                <NavbarAlt/>
                <div className="container my-20 md:my-0 sm:justify-center font-[Poppins] px-2 sm:px-0">
                    <h1 className="text-xl sm:text-2xl 2xl:text-4xl pb-5 red-dark font-bold">
                        Conditions Générales d'Utilisation
                    </h1>
                    <p className="pb-5 2xl:text-xl">
                        Le site 'www.alternativo.fr' est proposé par la société <strong className="font-bold red-dark">ALTERNATIVO</strong>. L'utilisation de ce site est
                        soumise aux présentes conditions générales d'utilisation. <br/>
                        L'utilisateur reconnaît avoir pris connaissance de ces conditions générales et s'engage à les
                        respecter.
                    </p>
                    <p className="pb-5 2xl:text-xl">
                        La société <strong className="font-bold red-dark">ALTERNATIVO</strong> met tout en œuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur le site 'www.alternativo.fr', mais ne peut garantir l'absence d'erreurs ou d'omissions.
                    </p>
                    <p className="pb-5 2xl:text-xl">
                        La société <strong className="font-bold red-dark">ALTERNATIVO</strong> décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations contenues sur le site 'www.alternativo.fr'.
                    </p>
                    <p className="pb-5 2xl:text-xl">
                        Le site 'www.alternativo.fr' peut contenir des liens vers des sites tiers. La société <strong className="font-bold red-dark">ALTERNATIVO</strong> ne peut être tenue pour responsable du contenu de ces sites ni des éventuels préjudices qu'ils pourraient causer.
                    </p>
                    <p className="pb-5 2xl:text-xl">
                        La société <strong className="font-bold red-dark">ALTERNATIVO</strong> se réserve le droit de modifier à tout moment et sans préavis les présentes conditions générales d'utilisation. Les utilisateurs sont invités à consulter régulièrement les présentes conditions.
                    </p>
                    <p className="pb-5 2xl:text-xl">
                        Toute reproduction, représentation, modification, publication, transmission, totale ou partielle du site 'www.alternativo.fr', sans l'autorisation préalable et écrite de la société <strong className="font-bold red-dark">ALTERNATIVO</strong>, est strictement interdite et constitutive d'une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle.
                    </p>
                    <p className="pb-5 mb-3 2xl:text-xl">
                        Les présentes conditions générales d'utilisation sont régies par le droit français. Tout litige relatif à l'utilisation du site 'www.alternativo.fr' sera soumis à la compétence exclusive des tribunaux français.
                    </p>

                </div>

            </div>
            <Footer/>
        </div>
    )
}

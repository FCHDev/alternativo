import Head from 'next/head'
import Missions from "../components/Missions";
import Nous from "../components/Nous";
import Valeurs from "../components/Valeurs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Avis from "../components/Avis";

export default function Home() {

    console.log("Rendu de l'Index")

    return (
        <div className="relative">
            <div className="container mx-auto flex-col overflow-x-clip">
                <Head>
                    <title>Alternativo, conseil gestion patrimoine, Région Sud-Ouest</title>
                    <meta name="description" content="partenaire gestion conseil finance investissements"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="apple-touch-icon" href="/logo-alternativo-ico.png"/>
                    <link rel="icon" href="/alternativo-ico.ico"/>
                </Head>

                <Navbar/>
                <Nous/>
                <Missions/>
                <Valeurs />
                <Contact />
                <Avis />
                {/*<ScrollToTop style={{paddingLeft: "6px"}} smooth={true}/>*/}
            </div>
            <Footer />
        </div>
    )
}

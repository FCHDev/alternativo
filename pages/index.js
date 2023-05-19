import Head from 'next/head'
import Missions from "../components/Missions";
import Nous from "../components/Nous";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Avis from "../components/Avis";

export default function Home() {

    return (
        <div className="relative">
            <div className="container mx-auto flex-col overflow-x-clip">
                <Head>
                    <title>Conseil en gestion de patrimoine dans le Sud Ouest | Pays Basque, Biarritz, Bordeaux |
                        Alternativo</title>
                    <meta name="title"
                          content="Alternativo, cabinet de conseil en investissements et en gestion de patrimoine"/>
                    <meta name="description"
                          content="Alternativo est un cabinet de conseil en investissements et en gestion de patrimoine créée en 2019 à Bordeaux, dans le quartier des Chartrons.
                            Aujourd’hui nichée au cœur du Pays Basque, cette société familiale a pour but d'accompagner ses clients à faire leurs propres choix financiers en fonction de leurs projets de vie : création ou développement d’un patrimoine, optimisation fiscale."/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="apple-touch-icon" href="/logo-alternativo-ico.png"/>
                    <link rel="icon" href="/alternativo-ico.ico"/>
                </Head>

                <Navbar/>
                <Nous/>
                <Missions/>
                <Contact/>
                <Avis/>
            </div>
            <Footer/>
        </div>
    )
}

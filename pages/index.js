import Head from 'next/head'
// import Image from 'next/image'
// import ScrollToTop from "react-scroll-to-top";
import Missions from "../components/Missions";
import Nous from "../components/Nous";
import Valeurs from "../components/Valeurs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <div className="container min-w-full mx-auto flex-col">
                <Head>
                    <title>Alternativo, conseil gestion patrimoine</title>
                    <meta name="description" content="partenaire gestion conseil finance investissements"/>
                    {/*<link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png"/>*/}
                    <link rel="icon" href="/favicon.ico"/>

                </Head>

                <Nous/>
                <Missions/>
                <Valeurs />
                <Contact />
                <Footer />

                {/*<ScrollToTop style={{paddingLeft: "6px"}} smooth={true}/>*/}

            </div>
        </>
    )
}

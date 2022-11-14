import Head from 'next/head'
// import Image from 'next/image'
import ScrollToTop from "react-scroll-to-top";
import Missions from "../components/Missions";
import Nous from "../components/Nous";

export default function Home() {
    return (
        <>
            <div className="bg-[#4F5165] container min-w-full mx-auto flex-col">
                <Head>
                    <title>Alternativo, conseil gestion patrimoine</title>
                    <meta name="description" content="partenaire gestion conseil finance investissements"/>
                    {/*<link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png"/>*/}
                    {/*<link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png"/>*/}
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Kanit&family=Lobster&family=Poppins&family=Roboto+Mono&family=Sono&display=swap"
                        rel="stylesheet"/>
                </Head>

                <Nous/>
                <Missions/>

                <ScrollToTop style={{paddingLeft: "6px"}} smooth={true}/>

            </div>
        </>
    )
}

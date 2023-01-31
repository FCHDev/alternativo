import React, {useState} from 'react';
import Link from "next/link";
import Head from "next/head";
import Cookies from "js-cookie";
import {useRouter} from "next/router";
import logo from "../../public/images/logo-bgremoved-white.png";
import home from "../../public/SVG/home.svg";
import Image from "next/image";

const Admin = () => {
    const router = useRouter();
    const [connexion, setConnexion] = useState({
        login: "",
        password: ""
    })


    const handleLoginChange = (event) => {
        setConnexion({
            ...connexion,
            login: event.target.value
        });
    }
    const handlePasswordChange = (event) => {
        setConnexion({
            ...connexion,
            password: event.target.value
        })
    }

    const handleConnexion = (event) => {
        // check if the login and password are correct
        if (connexion.login === "Alternativo" && connexion.password === "prout") {
            // if the login and password are correct, redirect to the admin page
            // window.location.href = "http://localhost:3000/admin/post";
            event.preventDefault();
            Cookies.set("loggedin", true);
            router.push("/admin/post");
        } else {
            // if the login and password are incorrect, display an error message and reset the login and password
            setConnexion({
                ...connexion,
                login: "",
                password: ""
            })
            alert("Login ou mot de passe incorrect");
        }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Head>
                <title>Alternativo, Admin Login</title>
                <meta name="description" content="partenaire gestion conseil finance investissements"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="apple-touch-icon" href="/logo-alternativo-ico.png"/>
                <link rel="icon" href="/alternativo-ico.ico"/>
            </Head>
            <Link className="top-3 left-3 bg-[#174A5B] hover:bg-[#5CB8D6] text-white font-bold py-2 px-4 rounded mb-10"
                  href="/">
                <div className="flex justify-between w-20">
                    <Image src={home} alt="maison foyer" width={20} height={20}/>
                    <span>Home</span>
                </div>
            </Link>
            <form className="flex flex-col border border-gray-500 px-10 py-10 rounded-xl text-white bg-[#174A5B]">
                <Image alt="alternativo logo" src={logo} width={200} priority={true}/>
                <label className="text-xl mt-10 mb-2">Login</label>
                <input
                    className="border border-gray-500 mb-5 pl-2 h-10 text-black"
                    type="text"
                    placeholder="Login"
                    onChange={handleLoginChange}/>
                <label className="text-xl mb-2">Mot de passe</label>
                <input
                    className="border border-gray-500 mb-10 pl-2 h-10 text-black"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={handlePasswordChange}/>

                <button className="bg-[#FF585D] hover:bg-[#FFC2C4] text-white font-bold py-2 px-4 rounded"
                        onClick={(event) => handleConnexion(event)}>
                    Connexion
                </button>

            </form>
        </div>
    );
};

export default Admin;
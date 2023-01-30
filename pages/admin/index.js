import React, {useState} from 'react';
import Link from "next/link";

const Admin = () => {

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
            window.location.href = "/admin/test";
            event.preventDefault();
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
            <Link className="top-3 left-3 fixed bg-[#174A5B] hover:bg-[#5CB8D6] text-white font-bold py-2 px-4 rounded"
                  href="/">Home</Link>
            <form className="flex flex-col">
                <label className="text-xl">Login</label>
                <input
                    className="border border-gray-500 mb-5 pl-2 h-10"
                    type="text"
                    placeholder="login"
                    onChange={handleLoginChange}/>
                <label className="text-xl">Mot de passe</label>
                <input
                    className="border border-gray-500 mb-5 pl-2 h-10"
                    type="password"
                    placeholder="password"
                    onChange={handlePasswordChange}/>

                <button className="bg-[#FF585D] hover:bg-[#FFC2C4] text-white font-bold py-2 px-4 rounded"
                        onClick={handleConnexion}>
                    Connexion
                </button>

            </form>
        </div>
    );
};

export default Admin;
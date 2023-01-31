import React, {useEffect, useState} from 'react';
import Cookies from "js-cookie";
import {useRouter} from "next/router";

import {onValue, ref, set, remove} from "firebase/database";
import {refDb, db} from "../../../services/firebase-config";
import logo from "../../../public/images/logo-alternativo.png";
import Image from "next/image";

const Post = () => {
    // STATES
    const [advices, setAdvices] = useState([]);
    const id = advices.length+1;
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [city, setCity] = useState("");

    // console.log(id)

    // ROUTER ET DECONNEXION
    const router = useRouter();
    const handleLogout = () => {
        Cookies.remove("loggedin");
        router.push("/admin");
    }


    // FONCTION POUR RECUPERER LES DONNEES DE LA BASE

    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                Object.values([data]).map((item) => {
                    setAdvices(Object.values(item));
                    console.log("🔥🔥🔥🔥 Firebase is called 🔥🔥🔥🔥");
                });
            } else {
                throw new Error("Il y a un souci");
            }
        });
    }, []);



    // FONCTION FIREBASE POUR CREER UN NOUVEAU COMMENTAIRE
    const writeUserData = () => {
        set(refDb(db, `/${id}`), {
            id,
            title,
            author,
            body,
            city
        });
    };

    // FONCTION FIREBASE POUR SUPPRIMER UN NOUVEAU COMMENTAIRE
    const removeUserData = (idToRemove) => {
        remove(refDb(db, `/${idToRemove}`), {
            id,
            title,
            author,
            body,
            city
        });
    };


    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }
    const handleBodyChange = (event) => {
        setBody(event.target.value);
    }
    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        writeUserData();
        setTitle("");
        setAuthor("");
        setBody("");
        setCity("");
    };

    const handleRemove = (idToRemove) => {
        console.log(idToRemove);
        removeUserData(idToRemove);
    }


    return (
        <div className="flex flex-col items-center min-h-screen">
            <Image alt="alternativo logo"
                   src={logo}
                   width={250}
                   priority={true}
                   className="w-[250px] md:w-[300px] z-10 mx-0 my-10">
            </Image>
            <div className="md:w-1/2 flex flex-col items-start justify-center md:mb-5 my-5">
                    <h1 className="text-xl md:text-2xl font-semibold text-[#174A5B]">Nouvel avis</h1>
                    <p className="md:mt-2 text-sm text-gray-700">
                        Ici, tu peux ajouter un avis sur le site.
                    </p>
            </div>

            {/*FORMULAIRE*/}
            <form className="flex flex-col w-screen md:w-1/2 md:border border-[#174A5B] rounded-xl p-3 md:p-10 md:my-3">

                <label className="text-xl text-[#174A5B]">Titre</label>
                <input
                    className="border border-gray-500 mb-5 pl-2 h-10 md:w-1/2 rounded mt-1"
                    type="text"
                    placeholder="Titre"
                    value={title}
                    onChange={handleTitleChange}/>

                <label className="text-xl text-[#174A5B]">Commentaire</label>
                <textarea
                    className="border border-gray-500 mb-5 pl-2 pt-2 md:h-24 h-32 rounded mt-1"
                    placeholder="Saisir le commentaire"
                    value={body}
                    onChange={handleBodyChange}/>

                <label className="text-xl text-[#174A5B]">Auteur</label>
                <input
                    className="border border-gray-500 mb-5 pl-2 h-10 md:w-1/2 rounded mt-1"
                    type="text"
                    placeholder="Auteur"
                    value={author}
                    onChange={handleAuthorChange}/>

                <label className="text-xl text-[#174A5B]">Ville</label>
                <input
                    className="border border-gray-500 mb-10 pl-2 h-10 md:w-1/2 rounded mt-1"
                    type="text"
                    placeholder="Ville"
                    value={city}
                    onChange={handleCityChange}/>

                <button className="bg-[#174A5B] hover:bg-[#5CB8D6] text-white font-bold py-2 px-4 rounded md:w-1/5 mx-auto mt-5"
                        onClick={handleSubmit}>
                    Ajouter
                </button>
            </form>
            <button className="bg-[#FF585D] hover:bg-[#FFC2C4] text-white font-bold py-2 px-4 rounded mt-10 mb-20"
                    onClick={handleLogout}>
                Logout
            </button>

            {/*APERCU DES COMMENTAIRES*/}
            <div className="hidden md:block w-1/2">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl md:text-2xl font-semibold text-[#174A5B]">Avis</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Ici, tu retrouves la liste de tous les avis postés sur le site.
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-gray-900 sm:pl-6">
                                            Auteur
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-base font-semibold text-gray-900">
                                            Titre
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-base font-semibold text-gray-900">
                                            Commentaire
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-base font-semibold text-gray-900">
                                            Ville
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                    {advices
                                        .sort((a, b) => (a.id < b.id ? 1 : -1))
                                        .map((advice, index) => (
                                        <tr key={index} className={index % 2 === 0 ? undefined : 'bg-[#CEEAF3]'}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {advice.author}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 overflow-hidden">
                                                {advice.title}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 overflow-hidden">
                                                {advice.body.length > 60 ? advice.body.substring(0, 60) + "..." : advice.body}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 overflow-hidden">
                                                {advice.city}
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-[#FF585D] hover:text-[#FFC2C4]"
                                                   onClick={() => handleRemove(advice.id)}>
                                                    Supprimer
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
import React from "react";
import { Head, Link } from "@inertiajs/react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

import { usePage } from "@inertiajs/react";

export default function Login({ csrf_token }) {
    return (
        <>
            <Head title="Masuk | Quezt" />

            <Navbar />

            <div className="flex flex-row min-h-screen">
                <div
                    className="flex flex-col justify-center
                 bg-[#C70039] min-h-screen w-[50%] p-4"
                >
                    <img src="assets/img/masuk/illustration.png" />
                </div>

                <div className="flex flex-col mt-40 px-16 py-4 w-[50%]">
                    <h1 className="font-monda font-bold text-3xl text-[#C70039]">
                        Masuk ke Quezt
                    </h1>
                    <div className="flex flex-col p-8 shadow-lg w-[100%] mt-4">
                        {usePage().props.flash.success && (
                            <div className="py-2 px-3 bg-green-500 text-white font-monda font-bold rounded">
                                {usePage().props.flash.success}
                            </div>
                        )}
                        {usePage().props.flash.error && (
                            <div className="py-2 px-3 bg-red-500 text-white font-monda font-bold rounded">
                                {usePage().props.flash.error}
                            </div>
                        )}
                        <div className="flex flex-col mt-4">
                            <form
                                action="masuk"
                                method="POST"
                                className="flex flex-col"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    value={csrf_token}
                                />

                                <label
                                    htmlFor="email"
                                    className="font-monda font-bold"
                                >
                                    Email:
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Masukkan email kamu..."
                                    required
                                    className="mt-2 border-[1px] border-[#000] p-2 rounded"
                                ></input>

                                <label
                                    htmlFor="password"
                                    className="font-monda font-bold mt-8"
                                >
                                    Password:
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Masukkan password kamu..."
                                    required
                                    className="mt-2 border-[1px] border-[#000] p-2 rounded"
                                ></input>

                                <button
                                    type="submit"
                                    className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 mt-4"
                                >
                                    Login
                                </button>
                            </form>

                            <Link
                                href="/daftar"
                                className="bg-[#fff] text-[#C70039] font-medium text-base px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:border-[#d50a43] active:border-[#bb073a] mt-4 text-center"
                            >
                                Daftar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

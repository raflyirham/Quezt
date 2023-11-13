import React from "react";
import { Head, Link } from "@inertiajs/react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

import { usePage } from "@inertiajs/react";

export default function Register({ csrf_token }) {
    const { errors } = usePage().props;

    return (
        <>
            <Head title="Daftar | Quezt" />

            <Navbar />

            <div className="flex flex-row min-h-screen">
                <div
                    className="flex flex-col justify-center
                 bg-[#C70039] min-h-screen w-[50%] p-4"
                >
                    <img src="assets/img/daftar/illustration.png" />
                </div>

                <div className="flex flex-col mt-40 px-16 py-4 w-[50%]">
                    <h1 className="font-monda font-bold text-3xl text-[#C70039]">
                        Daftar ke Quezt
                    </h1>
                    <div className="flex flex-col p-8 shadow-lg w-[100%] mt-4">
                        <div className="flex flex-col mt-4">
                            <form
                                action="/daftar"
                                method="POST"
                                className="flex flex-col"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    value={csrf_token}
                                />

                                <label
                                    htmlFor="name"
                                    className="font-monda font-bold"
                                >
                                    Nama:
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Masukkan nama kamu..."
                                    required
                                    className="mt-2 border-[1px] border-[#000] p-2 rounded"
                                ></input>

                                {errors.name && (
                                    <div className="font-monda text-[#C70039]">
                                        {errors.name}
                                    </div>
                                )}

                                <label
                                    htmlFor="username"
                                    className="font-monda font-bold mt-8"
                                >
                                    Username:
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Masukkan username kamu..."
                                    required
                                    className="mt-2 border-[1px] border-[#000] p-2 rounded"
                                ></input>

                                {errors.username && (
                                    <div className="font-monda text-[#C70039]">
                                        {errors.username}
                                    </div>
                                )}

                                <label
                                    htmlFor="email"
                                    className="font-monda font-bold mt-8"
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

                                {errors.email && (
                                    <div className="font-monda text-[#C70039]">
                                        {errors.email}
                                    </div>
                                )}

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

                                {errors.password && (
                                    <div className="font-monda text-[#C70039]">
                                        {errors.password}
                                    </div>
                                )}

                                <label
                                    htmlFor="password_confirmation"
                                    className="font-monda font-bold mt-8"
                                >
                                    Konfirmasi Password:
                                </label>
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    placeholder="Masukkan kembali password kamu..."
                                    required
                                    className="mt-2 border-[1px] border-[#000] p-2 rounded"
                                ></input>

                                {errors.confirmPassword && (
                                    <div className="font-monda text-[#C70039]">
                                        {errors.confirmPassword}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 mt-4"
                                >
                                    Daftar
                                </button>
                            </form>

                            <Link
                                href="/masuk"
                                className="bg-[#fff] text-[#C70039] font-medium text-base px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:border-[#d50a43] active:border-[#bb073a] mt-4 text-center"
                            >
                                Masuk
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

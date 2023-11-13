import { Link } from "@inertiajs/react";
import React from "react";

import { usePage } from "@inertiajs/react";

export default function Navbar() {
    return (
        <div className="shadow-lg flex flex-row p-4 justify-between fixed top-0 z-50 bg-white w-full">
            <Link href="/">
                <p className="font-jacques font-medium text-3xl text-[#C70039] hover:text-[#d50a43] active:text-[#bb073a]">
                    Quezt
                </p>
            </Link>

            <div>
                {usePage().props.user.user ? (
                    <>
                        <div className="flex flex-row justify-center items-center gap-x-1">
                            <p className="font-monda font-bold text-lg text-[#C70039] uppercase">
                                {usePage().props.user.user.name}
                            </p>

                            <form action="/keluar" method="POST">
                                <input
                                    type="hidden"
                                    name="_token"
                                    value={
                                        usePage().props.csrf_token.csrf_token
                                    }
                                />
                                <button
                                    type="submit"
                                    className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md ml-4 font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200"
                                >
                                    Keluar
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    <>
                        <Link href="/masuk">
                            <button className="bg-[#fff] text-[#C70039] font-medium text-base px-4 py-1 rounded-md ml-4 font-monda border-[2px] border-[#C70039] hover:border-[#d50a43] active:border-[#bb073a]">
                                Masuk
                            </button>
                        </Link>

                        <Link href="/daftar">
                            <button className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md ml-4 font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200">
                                Daftar
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

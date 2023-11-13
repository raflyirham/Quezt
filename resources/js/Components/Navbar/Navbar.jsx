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
                        <div class="">
                            <div class="dropdown inline-block relative">
                                <button class="bg-[#C70039] text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span class="mr-1 uppercase">
                                        {usePage().props.user.user.UserName}
                                    </span>
                                    <svg
                                        class="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                                    </svg>
                                </button>
                                <ul class="dropdown-menu absolute hidden text-white pt-1 shadow-lg">
                                    <li class="">
                                        <Link
                                            class="bg-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 py-2 px-4 block whitespace-no-wrap"
                                            href="/dashboard"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li class="">
                                        <Link
                                            class="bg-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 py-2 px-4 block whitespace-no-wrap"
                                            href="/profile"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li class="">
                                        <form action="/keluar" method="POST">
                                            <input
                                                type="hidden"
                                                name="_token"
                                                value={
                                                    usePage().props.csrf_token
                                                        .csrf_token
                                                }
                                            />
                                            <button
                                                type="submit"
                                                className="bg-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 py-2 px-4  block whitespace-no-wrap w-full text-left"
                                            >
                                                Keluar
                                            </button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="flex flex-row justify-center items-center gap-x-1">
                            <p className="font-monda font-bold text-lg text-[#C70039] uppercase">
                                {usePage().props.user.user.UserName}
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
                        </div> */}
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

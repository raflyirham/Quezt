import { Link } from "@inertiajs/react";
import React from "react";

import { usePage } from "@inertiajs/react";

export default function Navbar() {
    // console.log(usePage().props.user);

    return (
        <div className="shadow-lg flex flex-row p-4 justify-between fixed top-0 z-50 bg-white w-full">
            <div className="flex flex-row gap-x-2 items-baseline">
                <Link href="/">
                    <p className="font-jacques font-medium text-3xl text-[#C70039] hover:text-[#d50a43] active:text-[#bb073a]">
                        Quezt
                    </p>
                </Link>

                {usePage().props.user_data &&
                    usePage().props.user_data.RoleID === 2 && (
                        <div className="px-3 py-1 bg-[#C70039] font-monda text-base text-white rounded-full">
                            <p className="">Tutor</p>
                        </div>
                    )}

                <div className="flex flex-row gap-x-6 justify-center items-center ml-4">
                    <Link href="/">
                        <p className="font-monda font-bold text-lg text-[#C70039] hover:text-[#d50a43] hover:underline active:text-[#bb073a] duration-500">
                            Beranda
                        </p>
                    </Link>
                    <Link href="/jurusan">
                        <p className="font-monda font-bold text-lg text-[#C70039] hover:text-[#d50a43] hover:underline active:text-[#bb073a] duration-500">
                            Jurusan
                        </p>
                    </Link>
                    <Link href="/mata-kuliah">
                        <p className="font-monda font-bold text-lg text-[#C70039] hover:text-[#d50a43] hover:underline active:text-[#bb073a] duration-500">
                            Mata Kuliah
                        </p>
                    </Link>
                </div>
            </div>

            <div>
                {usePage().props.user_data ? (
                    <>
                        <div>
                            <div className="dropdown inline-block relative">
                                <button className="bg-[#C70039] text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1 uppercase">
                                        {usePage().props.user_data.UserName}
                                    </span>
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                                    </svg>
                                </button>
                                <ul className="dropdown-menu absolute hidden text-white pt-1 shadow-lg">
                                    <li>
                                        <Link
                                            className="bg-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 py-2 px-4 block whitespace-no-wrap"
                                            href="/dashboard"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="bg-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 py-2 px-4 block whitespace-no-wrap"
                                            href="/profile"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
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

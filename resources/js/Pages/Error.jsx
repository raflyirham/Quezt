import { Head, Link } from "@inertiajs/react";
import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function ErrorPage({ status }) {
    const title = {
        503: "503 | Layanan Tidak Tersedia",
        500: "500 | Server Mengalami Masalah",
        404: "404 | Halaman Tidak Ditemukan",
        403: "403 | Akses Ditolak",
    }[status];

    const description = {
        503: "Maaf, layanan ini sedang tidak tersedia.",
        500: "Maaf, server sedang mengalami masalah.",
        404: "Maaf, halaman yang kamu cari tidak ditemukan.",
        403: "Maaf, kamu tidak memiliki akses ke halaman ini.",
    }[status];

    return (
        <>
            <Head title={`${title} | Quezt`} />
            <Navbar />

            <div className="flex flex-col justify-center items-center p-4 min-h-screen">
                <h1 className="font-monda font-bold text-2xl text-[#C70039]">
                    {title}
                </h1>
                <div>{description}</div>

                <Link href="/">
                    <button className="rounded px-4 py-2 bg-[#C70039] text-white font-monda font-bold mt-4 text-sm hover:bg-[#d50a43] active:bg-[#bb073a] duration-200">
                        {"< Kembali ke Beranda"}
                    </button>
                </Link>
            </div>

            <Footer />
        </>
    );
}

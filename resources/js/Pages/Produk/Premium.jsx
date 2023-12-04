import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Premium() {
    return (
        <>
            <Head title="Produk Quezt Premium | Quezt" />

            <Navbar />

            <div className="tw-p-4 tw-mt-40 tw-min-h-screen">
                <div>
                    <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
                        Produk Quezt Premium
                    </h1>
                </div>
            </div>

            <Footer />
        </>
    )
}

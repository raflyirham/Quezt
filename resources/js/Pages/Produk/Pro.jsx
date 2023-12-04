import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Pro() {
    return (
        <>
            <Head title="Produk Quezt Pro | Quezt" />

            <Navbar />

            <div className="tw-p-4 tw-mt-40 tw-min-h-screen">
                <div>
                    <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
                        Produk Quezt Pro
                    </h1>
                </div>
            </div>

            <Footer />
        </>
    )
}

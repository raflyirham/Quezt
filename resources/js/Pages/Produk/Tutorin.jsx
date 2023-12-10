import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Tutorin() {
    return (
        <>
            <Head title="Produk Quezt Tutorin | Quezt" />

            <Navbar />

            <div className="tw-p-4 tw-mt-40 tw-mb-20 tw-min-h-screen">
                <div>
                    <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
                        Produk Quezt Tutorin
                    </h1>
                </div>

                <div className="tw-flex tw-flex-col tw-mt-8 tw-gap-y-32 max-lg:tw-gap-y-1">
                    <div className="tw-flex tw-flex-row tw-justify-center tw-items-center tw-gap-x-16 max-lg:tw-flex-col">
                        <div className="tw-bg-[#C70039] tw-max-w-[50%] tw-h-full tw-rounded tw-p-8 max-lg:tw-hidden">
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <img src="/assets/img/produk/illustration-1.png" className="tw-scale-x-[-1] tw-h-auto tw-w-[80%]" />
                            </div>
                        </div>
                        <div className="tw-p-8">
                            <h2 className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#C70039]">
                                Apa itu Quezt Tutorin?
                            </h2>
                            <p className="tw-font-monda tw-text-lg tw-mt-4">
                                Quezt Tutorin adalah salah satu produk berbayar dari Quezt yang menyediakan layanan bimbingan belajar online untuk mahasiswa. Layanan ini dapat membantu mahasiswa dalam memahami materi perkuliahan dan mengerjakan tugas-tugas kuliah.
                            </p>
                        </div>
                    </div>

                    <div className="tw-flex tw-flex-row-reverse tw-justify-center tw-items-center tw-gap-x-16 max-lg:tw-flex-col">
                        <div className="tw-bg-[#C70039] tw-max-w-[50%] tw-h-full tw-rounded tw-p-8 max-lg:tw-hidden">
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <img src="/assets/img/produk/illustration-2.png" className="tw-scale-x-[-1] tw-h-auto tw-w-[80%]" />
                            </div>
                        </div>
                        <div className="tw-p-8">
                            <h2 className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#C70039]">
                                Fitur Quezt Tutorin
                            </h2>
                            <p className="tw-font-monda tw-text-lg tw-mt-4">
                                Quezt Tutorin memiliki berbagai fitur tambahan yang dapat membantu pengguna dalam belajar, diantaranya:
                            </p>
                            <ul className="tw-list-disc tw-list-inside tw-font-monda tw-text-lg tw-mt-4">
                                <li>Bimbingan dengan Tutor sepuasnya selama 1 sesi</li>
                                <li>Bertanya dengan Tutor perihal materi mata kuliah</li>
                                <li>Diajarkan langkah demi langkah hingga kamu memahami materi</li>
                            </ul>
                        </div>
                    </div>

                    <div className="tw-flex tw-flex-row tw-justify-start tw-items-center tw-px-14 tw-py-14 tw-rounded tw-bg-gradient-to-b tw-from-[#C70039] tw-to-[#B23358] tw-min-h-[500px] max-lg:tw-justify-center max-lg:tw-items-center">
                        <div className="tw-w-[50%] max-lg:tw-w-full">
                            <h2 className="tw-font-monda tw-font-bold tw-text-[#FFF] tw-text-5xl max-lg:tw-text-4xl">Sudah siap untuk menjadi yang terbaik?</h2>

                            <Link href="/produk">
                                <button className="tw-bg-[#FF7B7B] tw-text-[#fff] tw-font-bold tw-text-lg tw-px-4 tw-py-2 tw-rounded-md tw-mt-8 tw-font-monda tw-border-[2px] tw-border-[#FF7B7B] hover:tw-bg-[#fc8f8f] hover:tw-border-[#fc8f8f] active:tw-bg-[#f97070] active:tw-border-[#f97070] tw-duration-300 max-lg:tw-text-base">
                                    {"Dapatkan Produk >"}
                                </button>
                            </Link>
                        </div>

                        <div className="tw-w-[50%] max-lg:tw-hidden">
                            <img src="/assets/img/produk/illustration-3.png" className="tw-scale-x-[-1]" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

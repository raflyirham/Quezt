import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Index() {
    return (
        <>
            <Head title="Produk | Quezt" />

            <Navbar />

            <div className="tw-p-4 tw-mt-40 tw-mb-20 tw-min-h-screen">
                <div>
                    <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
                        Produk
                    </h1>
                </div>

                <div className="tw-grid tw-grid-cols-3 tw-gap-x-6 tw-mt-8">
                    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-shadow-lg tw-rounded tw-px-8 tw-py-8 tw-min-h-[500px]">
                        <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#000]">Quezt Basic</h2>

                        <p className="tw-font-monda tw-font-bold tw-text-4xl tw-text-[#C70039] tw-mt-8">GRATIS</p>

                        <ul className="tw-flex tw-flex-col tw-gap-y-3 tw-mt-8 tw-font-semibold">
                            <li><i class="fa-solid fa-check"></i> Lihat materi dan jawaban mata kuliah (terbatas)</li>
                            <li><i class="fa-solid fa-x"></i> Bertanya materi perkuliahan</li>
                            <li><i class="fa-solid fa-x"></i> Bebas iklan</li>
                            <li><i class="fa-solid fa-x"></i> Gratis Tutorin 1 sesi</li>
                        </ul>
                    </div>

                    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-shadow-lg tw-rounded tw-px-8 tw-py-8 tw-min-h-[500px] tw-bg-gradient-to-b tw-from-[#C70039] tw-to-[#B23358]">
                        <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#fff]">Quezt Basic</h2>

                        <p className="tw-font-monda tw-font-bold tw-text-4xl tw-text-[#fff] tw-mt-8">Rp50.000/bulan</p>

                        <ul className="tw-flex tw-flex-col tw-gap-y-3 tw-mt-8 tw-font-semibold tw-text-[#fff]">
                            <li><i class="fa-solid fa-check"></i> Lihat materi dan jawaban mata kuliah tanpa batas</li>
                            <li><i class="fa-solid fa-check"></i> Bertanya materi perkuliahan (20 pertanyaan per hari)</li>
                            <li><i class="fa-solid fa-check"></i> Bebas iklan</li>
                            <li><i class="fa-solid fa-x"></i> Gratis Tutorin 1 sesi</li>
                        </ul>

                        <Link href="#" className="tw-w-full tw-mt-10">
                            <button className="tw-bg-[#FF7B7B] tw-text-[#fff] tw-font-bold tw-text-base tw-px-4 tw-py-2 tw-rounded-full tw-font-monda tw-border-[2px] tw-border-[#FF7B7B] hover:tw-bg-[#fc8f8f] hover:tw-border-[#fc8f8f] active:tw-bg-[#f97070] active:tw-border-[#f97070] tw-duration-300 tw-w-full">
                                {"Beli Produk >"}
                            </button>
                        </Link>

                        <Link href="/produk/quezt-premium" className="tw-mt-8">
                            <p className="tw-font-monda tw-font-bold tw-text-[#fff]">{"Lihat detail produk >"}</p>
                        </Link>
                    </div>

                    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-shadow-lg tw-rounded tw-px-8 tw-py-8 tw-min-h-[500px]">
                        <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#000]">Quezt Pro</h2>

                        <p className="tw-font-monda tw-font-bold tw-text-4xl tw-text-[#C70039] tw-mt-8">Rp100.000/bulan</p>

                        <ul className="tw-flex tw-flex-col tw-gap-y-3 tw-mt-8 tw-font-semibold">
                            <li><i class="fa-solid fa-check"></i> Lihat materi dan jawaban mata kuliah tanpa batas</li>
                            <li><i class="fa-solid fa-check"></i> Bertanya materi perkuliahan tanpa batas</li>
                            <li><i class="fa-solid fa-check"></i> Bebas iklan</li>
                            <li><i class="fa-solid fa-check"></i> Gratis Tutorin 1 sesi</li>
                        </ul>

                        <Link href="#" className="tw-w-full tw-mt-10">
                            <button className="tw-bg-[#FF7B7B] tw-text-[#fff] tw-font-bold tw-text-base tw-px-4 tw-py-2 tw-rounded-full tw-font-monda tw-border-[2px] tw-border-[#FF7B7B] hover:tw-bg-[#fc8f8f] hover:tw-border-[#fc8f8f] active:tw-bg-[#f97070] active:tw-border-[#f97070] tw-duration-300 tw-w-full">
                                {"Beli Produk >"}
                            </button>
                        </Link>

                        <Link href="/produk/quezt-pro" className="tw-mt-8">
                            <p className="tw-font-monda tw-font-bold tw-text-[#C70039]">{"Lihat detail produk >"}</p>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

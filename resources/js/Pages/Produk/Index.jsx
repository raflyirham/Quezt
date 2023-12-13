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

        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-y-6 tw-gap-x-6 tw-mt-8">
          <div className="tw-flex tw-flex-col tw-justify-start tw-items-center tw-shadow-lg tw-rounded tw-px-8 tw-py-8 tw-min-h-[500px]">
            <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#000]">
              Quezt Basic
            </h2>

            <p className="tw-font-monda tw-font-bold tw-text-4xl tw-text-[#C70039] tw-mt-8">
              GRATIS
            </p>

            <ul className="tw-flex tw-flex-col tw-gap-y-3 tw-mt-8 tw-font-semibold">
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center">
                <span className="material-symbols-rounded">done</span> Lihat
                materi dan jawaban mata kuliah (terbatas)
              </li>
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center tw-text-gray-400">
                <span className="material-symbols-rounded">close</span> Bertanya
                materi perkuliahan
              </li>
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center tw-text-gray-400">
                <span className="material-symbols-rounded">close</span> Bebas
                iklan
              </li>
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center tw-text-gray-400">
                <span className="material-symbols-rounded">close</span> Gratis
                Tutorin 1 sesi
              </li>
            </ul>
          </div>

          <div
            id="prem"
            className="tw-flex tw-flex-col tw-justify-startr tw-items-center tw-shadow-2xl tw-rounded tw-px-8 tw-py-8 tw-min-h-[500px] tw-bg-gradient-to-b tw-from-[#C70039] tw-to-[#B23358] tw-shadow-red-600">
            <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#fff]">
              Quezt Basic
            </h2>

            <p className="tw-font-monda tw-font-bold tw-text-4xl tw-text-[#fff] tw-mt-8">
              Rp50.000<span className="tw-text-xl">/bulan</span>
            </p>

            <ul className="tw-flex tw-flex-col tw-gap-y-3 tw-mt-8 tw-font-semibold tw-text-[#fff]">
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center">
                <span className="material-symbols-rounded">done</span> Lihat
                materi dan jawaban mata kuliah tanpa batas
              </li>
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center">
                <span className="material-symbols-rounded">done</span> Bertanya
                materi perkuliahan (20 pertanyaan per hari)
              </li>
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center">
                <span className="material-symbols-rounded">done</span> Bebas
                iklan
              </li>
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center tw-text-white/60">
                <span className="material-symbols-rounded">close</span> Gratis
                Tutorin 1 sesi
              </li>
            </ul>

            <Link href="#" className="tw-w-full tw-mt-10">
              <button className="tw-bg-[#FF7B7B] tw-text-[#fff] tw-font-bold tw-text-base tw-px-4 tw-py-2 tw-rounded-full tw-font-monda tw-border-[2px] tw-border-[#FF7B7B] hover:tw-bg-[#fc8f8f] hover:tw-border-[#fc8f8f] active:tw-bg-[#f97070] active:tw-border-[#f97070] tw-duration-300 tw-w-full">
                {"Beli Produk >"}
              </button>
            </Link>

            <Link href="/produk/quezt-premium" className="tw-mt-8">
              <p className="tw-font-monda tw-font-bold tw-text-[#fff]">
                {"Lihat detail produk >"}
              </p>
            </Link>
          </div>

          <div className="tw-flex tw-flex-col tw-justify-start tw-items-center tw-shadow-lg tw-rounded tw-px-8 tw-py-8 tw-min-h-[500px]">
            <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#000]">
              Quezt Pro
            </h2>

            <p className="tw-font-monda tw-font-bold tw-text-4xl tw-text-[#C70039] tw-mt-8">
              Rp100.000<span className="tw-text-xl">/bulan</span>
            </p>

            <ul className="tw-flex tw-flex-col tw-gap-y-3 tw-mt-8 tw-font-semibold">
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center">
                <span className="material-symbols-rounded">done</span> Lihat
                materi dan jawaban mata kuliah tanpa batas
              </li>
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center">
                <span className="material-symbols-rounded">done</span> Bertanya
                materi perkuliahan tanpa batas
              </li>
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center">
                <span className="material-symbols-rounded">done</span> Bebas
                iklan
              </li>
              <li className="tw-flex tw-flex-row tw-gap-2 tw-align-center">
                <span className="material-symbols-rounded">done</span> Gratis
                Tutorin 1 sesi
              </li>
            </ul>

            <Link href="#" className="tw-w-full tw-mt-10">
              <button className="tw-bg-[#FF7B7B] tw-text-[#fff] tw-font-bold tw-text-base tw-px-4 tw-py-2 tw-rounded-full tw-font-monda tw-border-[2px] tw-border-[#FF7B7B] hover:tw-bg-[#fc8f8f] hover:tw-border-[#fc8f8f] active:tw-bg-[#f97070] active:tw-border-[#f97070] tw-duration-300 tw-w-full">
                {"Beli Produk >"}
              </button>
            </Link>

            <Link href="/produk/quezt-pro" className="tw-mt-8">
              <p className="tw-font-monda tw-font-bold tw-text-[#C70039]">
                {"Lihat detail produk >"}
              </p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

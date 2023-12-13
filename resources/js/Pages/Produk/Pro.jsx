import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Pro() {
  return (
    <>
      <Head title="Produk Quezt Pro | Quezt" />

      <Navbar />

      <div className="tw-p-4 tw-mt-40 tw-mb-20 tw-min-h-screen">
        <div>
          <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
            Produk Quezt Pro
          </h1>
        </div>

        <div className="tw-flex tw-flex-col tw-mt-8 tw-gap-y-32 max-lg:tw-gap-y-1">
          <div className="tw-flex tw-flex-row tw-justify-center tw-items-center tw-gap-x-16 max-lg:tw-flex-col">
            <div className="tw-bg-[#C70039] tw-max-w-[50%] tw-h-full tw-rounded tw-p-8 max-lg:tw-hidden">
              <div className="tw-flex tw-justify-center tw-items-center">
                <img
                  src="/assets/img/produk/illustration-1.png"
                  className="tw-scale-x-[-1] tw-h-auto tw-w-[80%]"
                />
              </div>
            </div>
            <div className="tw-p-8">
              <h2 className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#C70039]">
                Apa itu Quezt Pro?
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-4">
                Quezt Pro adalah salah satu layanan berlangganan berbayar yang
                menyediakan berbagai fitur tambahan untuk membantu pengguna
                dalam belajar.
              </p>
            </div>
          </div>

          <div className="tw-flex tw-flex-row-reverse tw-justify-center tw-items-center tw-gap-x-16 max-lg:tw-flex-col">
            <div className="tw-bg-[#C70039] tw-max-w-[50%] tw-h-full tw-rounded tw-p-8 max-lg:tw-hidden">
              <div className="tw-flex tw-justify-center tw-items-center">
                <img
                  src="/assets/img/produk/illustration-2.png"
                  className="tw-scale-x-[-1] tw-h-auto tw-w-[80%]"
                />
              </div>
            </div>
            <div className="tw-p-8">
              <h2 className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#C70039]">
                Fitur Quezt Pro
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-4">
                Quezt Pro memiliki berbagai fitur tambahan yang dapat membantu
                pengguna dalam belajar, diantaranya:
              </p>
              <ul className="tw-list-disc tw-list-inside tw-font-monda tw-text-lg tw-mt-4">
                <li>Bertanya materi perkuliahan tanpa batas</li>
                <li>
                  Melihat materi dan jawaban mata kuliah dari tutor tanpa batas
                </li>
                <li>Bebas iklan</li>
                <li>Mendapatkan Tutorin gratis untuk 1 sesi</li>
              </ul>
            </div>
          </div>

          <div className="tw-flex tw-flex-row tw-justify-start tw-items-center tw-px-14 tw-py-14 tw-rounded tw-bg-gradient-to-b tw-from-[#C70039] tw-to-[#B23358] tw-min-h-[500px] max-lg:tw-justify-center max-lg:tw-items-center">
            <div className="tw-w-[50%] max-lg:tw-w-full">
              <h2 className="tw-font-monda tw-font-bold tw-text-[#FFF] tw-text-5xl max-lg:tw-text-4xl">
                Sudah siap untuk menjadi yang terbaik?
              </h2>

              <Link href="/produk">
                <button className="tw-bg-[#FF7B7B] tw-text-[#fff] tw-font-bold tw-text-lg tw-px-4 tw-py-2 tw-rounded-md tw-mt-8 tw-font-monda tw-border-[2px] tw-border-[#FF7B7B] hover:tw-bg-[#fc8f8f] hover:tw-border-[#fc8f8f] active:tw-bg-[#f97070] active:tw-border-[#f97070] tw-duration-300 max-lg:tw-text-base">
                  {"Dapatkan Produk >"}
                </button>
              </Link>
            </div>

            <div className="tw-w-[50%] max-lg:tw-hidden">
              <img
                src="/assets/img/produk/illustration-3.png"
                className="tw-scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

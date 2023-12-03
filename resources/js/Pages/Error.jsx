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

      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-min-h-screen">
        <h1 className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#C70039]">
          {title}
        </h1>
        <div>{description}</div>

        <Link href="/">
          <button className="tw-rounded tw-px-4 tw-py-2 tw-bg-[#C70039] tw-text-white tw-font-monda tw-font-bold tw-mt-4 tw-text-sm hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200">
            {"< Kembali ke Beranda"}
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

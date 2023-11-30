import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import SmallCard from "@/Components/SmallCard/SmallCard";
import Navbar from "../Components/Navbar/Navbar";
import JurusanCard from "../Components/JurusanCard/JurusanCard";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head title="Beranda | Quezt" />

      <Navbar />

      <div className="tw-flex tw-flex-row tw-items-center tw-bg-[#C70039] tw-min-h-screen tw-p-4 tw-max-lg:flex-col tw-max-lg:items-start tw-max-lg:pt-[100px] tw-max-lg:justify-center">
        <div className="tw-flex tw-flex-col tw-w-[45%] tw-max-lg:w-full">
          <h1 className="tw-text-6xl tw-text-white tw-font-bold tw-font-monda tw-max-lg:text-4xl">
            Temukan Materi Mata Kuliah Kamu
          </h1>

          <div className="tw-flex tw-flex-row tw-mt-4 tw-max-lg:flex-col tw-max-lg:w-full">
            <form
              action="cari"
              method="GET"
              className="tw-w-full tw-max-lg:flex-col tw-max-lg:w-full"
            >
              <input
                id="materi"
                name="materi"
                type="text"
                className="tw-w-[80%] tw-px-4 tw-py-2 tw-rounded tw-max-lg:w-full"
                placeholder="Cari materi perkuliahanmu..."
                required
              ></input>

              <button className="tw-bg-[#FF7B7B] tw-w-[15%] tw-p-2 tw-rounded tw-font-monda tw-text-white tw-font-bold tw-ml-2 tw-max-lg:w-full tw-max-lg:ml-0">
                Cari
              </button>
            </form>
          </div>

          <div className="tw-mt-8">
            <p className="tw-font-monda tw-text-white">
              Atau cari mata kuliah populer:
            </p>

            <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-3 tw-mt-4">
              {/* SmallCard components */}
            </div>
          </div>
        </div>

        <div className="tw-flex tw-flex-col tw-w-[55%] tw-max-lg:hidden">
          <img src="assets/img/home/illustration.png" />
        </div>
      </div>

      <div className="tw-px-4 tw-py-10">
        <h2 className="tw-font-monda tw-text-2xl tw-text-[#C70039]">
          Jurusan Kuliah
        </h2>
        <p className="tw-font-monda">
          Bingung cari materi perkuliahan? Cari berdasarkan jurusan kuliah kamu.
        </p>

        <div className="tw-grid tw-grid-cols-4 tw-gap-4 tw-mt-6 tw-max-lg:grid-cols-1">
          {/* JurusanCard components */}
        </div>

        <Link href="/jurusan" className="tw-inline-block tw-mt-4">
          <p className="tw-font-monda tw-font-bold tw-text-base tw-text-[#C70039]  tw-inline">
            {"Lihat Jurusan Lainnya >"}
          </p>
        </Link>
      </div>

      <Footer />
    </>
  );
}

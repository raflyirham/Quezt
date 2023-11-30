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

            <div className="tw-flex tw-flex-row tw-items-center tw-bg-[#C70039] tw-min-h-screen tw-p-4 max-lg:tw-flex-col max-lg:tw-items-start max-lg:tw-pt-[100px] max-lg:tw-justify-center">
                <div className="tw-flex tw-flex-col tw-w-[45%] max-lg:tw-w-full">
                    <h1 className="tw-text-6xl tw-text-white tw-font-bold tw-font-monda max-lg:tw-text-4xl">
                        Temukan Materi Mata Kuliah Kamu
                    </h1>

                    <div className="tw-flex tw-flex-row tw-mt-4 max-lg:tw-flex-col max-lg:tw-w-full">
                        <form
                            action="cari"
                            method="GET"
                            className="tw-w-full max-lg:tw-flex-col max-lg:tw-w-full"
                        >
                            <input
                                id="materi"
                                name="materi"
                                type="text"
                                className="tw-w-[80%] tw-px-4 tw-py-2 tw-rounded max-lg:tw-w-full"
                                placeholder="Cari materi perkuliahanmu..."
                                required
                            ></input>

                            <button className="tw-bg-[#FF7B7B] tw-w-[15%] tw-p-2 tw-rounded tw-font-monda tw-text-white tw-font-bold tw-ml-2 max-lg:tw-w-full max-lg:tw-ml-0">
                                Cari
                            </button>
                        </form>
                    </div>

                    <div className="tw-mt-8">
                        <p className="tw-font-monda tw-text-white">
                            Atau cari mata kuliah populer:
                        </p>

                        <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-3 tw-mt-4">
                            <SmallCard
                                text="Alogritma dan Pemrograman"
                                slug="algoritma-dan-pemrograman"
                            />
                            <SmallCard
                                text="Ilmu Sosial Dasar"
                                slug="ilmu-sosial-dasar"
                            />
                            <SmallCard
                                text="Kecerdasan Buatan"
                                slug="kecerdasan-buatan"
                            />
                            <SmallCard
                                text="Ekonomi Mikro"
                                slug="ekonomi-mikro"
                            />
                            <SmallCard text="Kalkulus 2" slug="kalkulus-2" />
                        </div>
                    </div>
                </div>

                <div className="tw-flex tw-flex-col tw-w-[55%] max-lg:tw-hidden">
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

                <div className="tw-grid tw-grid-cols-4 tw-gap-4 tw-mt-6 max-lg:tw-grid-cols-1">
                    <JurusanCard
                        jurusan={"Teknik Informatika"}
                        deskripsi={
                            "Jurusan Teknik Informatika merupakan cabang ilmu yang berkaitan dengan pengembangan dan penerapan teknologi informasi dalam berbagai bidang."
                        }
                        slug={"teknik-informatika"}
                    />

                    <JurusanCard
                        jurusan={"Ilmu Ekonomi"}
                        deskripsi={
                            "Jurusan Ilmu Ekonomi membahas prinsip-prinsip dasar yang mendasari pengelolaan sumber daya ekonomi di tingkat individual, perusahaan, dan tingkat makroekonomi."
                        }
                        slug={"ilmu-ekonomi"}
                    />

                    <JurusanCard
                        jurusan={"Geografi"}
                        deskripsi={
                            "Jurusan Geografi membahas pemahaman tentang pola spasial dan hubungan antara manusia dan lingkungan fisik."
                        }
                        slug={"geografi"}
                    />

                    <JurusanCard
                        jurusan={"Astronomi"}
                        deskripsi={
                            "Jurusan Astronomi memperkenalkan mahasiswa pada penelitian dan eksplorasi luar angkasa serta fenomena-fenomena astronomi."
                        }
                        slug={"astronomi"}
                    />
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

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

            <div className="flex flex-row items-center bg-[#C70039] min-h-screen p-4">
                <div className="flex flex-col w-[45%]">
                    <h1 className="text-6xl text-white font-bold font-monda">
                        Temukan Materi Mata Kuliah Kamu
                    </h1>

                    <div className="flex flex-row mt-4">
                        <form action="cari" method="GET" className="w-full">
                            <input
                                id="materi"
                                name="materi"
                                type="text"
                                className="w-[80%] px-4 py-2 rounded"
                                placeholder="Cari materi perkuliahanmu..."
                                required
                            ></input>

                            <button className="bg-[#FF7B7B] w-[15%] p-2 rounded font-monda text-white font-bold ml-2">
                                Cari
                            </button>
                        </form>
                    </div>

                    <div className="mt-8">
                        <p className="font-monda text-white">
                            Atau cari mata kuliah populer:
                        </p>

                        <div className="flex flex-row flex-wrap gap-3 mt-4">
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

                <div className="flex flex-col w-[55%]">
                    <img src="assets/img/home/illustration.png" />
                </div>
            </div>

            <div className="px-4 py-10">
                <h2 className="font-monda text-2xl text-[#C70039]">
                    Jurusan Kuliah
                </h2>
                <p className="font-monda">
                    Bingung cari materi perkuliahan? Cari berdasarkan jurusan
                    kuliah kamu.
                </p>

                <div className="grid grid-cols-4 gap-4 mt-6">
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

                <Link href="/jurusan" className="inline-block mt-4">
                    <p className="font-monda font-bold text-base text-[#C70039]  inline">
                        {"Lihat Jurusan Lainnya >"}
                    </p>
                </Link>
            </div>

            <Footer />
        </>
    );
}

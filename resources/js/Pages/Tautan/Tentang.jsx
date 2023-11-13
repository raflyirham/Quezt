import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

export default function Tentang() {
    return (
        <>
            <Head title="Tentang | Quezt" />

            <Navbar />

            <div className="flex flex-col justify-center items-center mt-[100px] px-4 pt-10 pb-20 min-h-screen">
                <div className="w-[50%]">
                    <h1 className="font-monda font-bold text-4xl text-[#C70039]">
                        Tentang Kami
                    </h1>

                    <div className="flex flex-col gap-y-6 w-[100%] shadow-lg px-8 py-8">
                        <div>
                            <h2 className="font-monda font-bold text-xl text-[#C70039]">
                                Apa itu Quezt?
                            </h2>
                            <p className="font-monda text-lg mt-2">
                                Quezt adalah sebuah platform pendidikan
                                revolusioner yang didedikasikan untuk membantu
                                mahasiswa mengatasi tantangan dalam memahami dan
                                menguasai materi perkuliahan. Sebagai website
                                yang berfokus pada tanya-jawab mahasiswa, Quezt
                                bertujuan memberikan solusi yang mudah diakses,
                                interaktif, dan berkualitas untuk memperdalam
                                pemahaman materi kuliah.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-monda font-bold text-xl text-[#C70039]">
                                Inovasi Pembelajaran Interaktif
                            </h2>
                            <p className="font-monda text-lg mt-2">
                                Quezt tidak hanya sekadar platform tanya-jawab
                                konvensional; itu adalah ekosistem pembelajaran
                                interaktif yang memanfaatkan kekuatan teknologi
                                untuk memberikan pengalaman belajar yang lebih
                                kaya dan terlibat. Dengan antarmuka yang
                                intuitif dan ramah pengguna, mahasiswa dapat
                                dengan mudah menavigasi dan menemukan jawaban
                                untuk pertanyaan mereka.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-monda font-bold text-xl text-[#C70039]">
                                Tutor Berkualitas Tinggi
                            </h2>
                            <p className="font-monda text-lg mt-2">
                                Salah satu keunggulan utama Quezt adalah
                                kehadiran tutor yang berkompeten. Jawaban yang
                                diberikan di website ini berasal dari tutor yang
                                memiliki kredensial dan pengetahuan mendalam
                                sesuai dengan aturan dan standar website ini.
                                Mahasiswa dapat yakin bahwa informasi yang
                                diberikan adalah akurat dan diperoleh dari
                                sumber yang terpercaya.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-monda font-bold text-xl text-[#C70039]">
                                Pilihan Mata Kuliah yang Luas
                            </h2>
                            <p className="font-monda text-lg mt-2">
                                Quezt menyediakan ruang untuk diskusi dan
                                tanya-jawab untuk berbagai mata kuliah. Dari
                                ilmu sosial hingga ilmu alam, mahasiswa dapat
                                menemukan sumber daya yang relevan dengan bidang
                                studi mereka. Ini menciptakan lingkungan belajar
                                yang inklusif dan mendukung bagi mahasiswa dari
                                berbagai disiplin ilmu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

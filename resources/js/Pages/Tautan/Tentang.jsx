import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

export default function Tentang() {
  return (
    <>
      <Head title="Tentang | Quezt" />

      <Navbar />

      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-mt-[100px] tw-px-4 tw-pt-10 tw-pb-20 tw-min-h-screen">
        <div className="tw-w-[50%]">
          <h1 className="tw-font-monda tw-font-bold tw-text-4xl tw-text-[#C70039]">
            Tentang Kami
          </h1>

          <div className="tw-flex tw-flex-col tw-gap-y-6 tw-w-[100%] tw-shadow-lg tw-px-8 tw-py-8">
            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                Apa itu Quezt?
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Quezt adalah sebuah platform pendidikan revolusioner yang
                didedikasikan untuk membantu mahasiswa mengatasi tantangan dalam
                memahami dan menguasai materi perkuliahan. Sebagai website yang
                berfokus pada tanya-jawab mahasiswa, Quezt bertujuan memberikan
                solusi yang mudah diakses, interaktif, dan berkualitas untuk
                memperdalam pemahaman materi kuliah.
              </p>
            </div>

            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                Inovasi Pembelajaran Interaktif
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Quezt tidak hanya sekadar platform tanya-jawab konvensional; itu
                adalah ekosistem pembelajaran interaktif yang memanfaatkan
                kekuatan teknologi untuk memberikan pengalaman belajar yang
                lebih kaya dan terlibat. Dengan antarmuka yang intuitif dan
                ramah pengguna, mahasiswa dapat dengan mudah menavigasi dan
                menemukan jawaban untuk pertanyaan mereka.
              </p>
            </div>

            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                Tutor Berkualitas Tinggi
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Salah satu keunggulan utama Quezt adalah kehadiran tutor yang
                berkompeten. Jawaban yang diberikan di website ini berasal dari
                tutor yang memiliki kredensial dan pengetahuan mendalam sesuai
                dengan aturan dan standar website ini. Mahasiswa dapat yakin
                bahwa informasi yang diberikan adalah akurat dan diperoleh dari
                sumber yang terpercaya.
              </p>
            </div>

            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                Pilihan Mata Kuliah yang Luas
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Quezt menyediakan ruang untuk diskusi dan tanya-jawab untuk
                berbagai mata kuliah. Dari ilmu sosial hingga ilmu alam,
                mahasiswa dapat menemukan sumber daya yang relevan dengan bidang
                studi mereka. Ini menciptakan lingkungan belajar yang inklusif
                dan mendukung bagi mahasiswa dari berbagai disiplin ilmu.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

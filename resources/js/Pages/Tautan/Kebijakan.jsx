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
            Kebijakan Privasi
          </h1>

          <div className="tw-flex tw-flex-col tw-gap-y-6 tw-w-[100%] tw-shadow-lg tw-px-8 tw-py-8">
            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                Kebijakan Privasi untuk Quezt
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Di Quezt, salah satu prioritas utama kami adalah privasi
                pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis
                informasi yang dikumpulkan dan dicatat oleh Quezt dan bagaimana
                kami menggunakannya. Jika Anda memiliki pertanyaan tambahan atau
                memerlukan informasi lebih lanjut tentang Kebijakan Privasi
                kami, jangan ragu untuk menghubungi kami.
              </p>
            </div>

            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                File Log
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Quezt mengikuti prosedur standar dalam menggunakan file log.
                File-file ini mencatat pengunjung ketika mereka mengunjungi
                situs web. Semua perusahaan hosting melakukan ini dan merupakan
                bagian dari analisis layanan hosting. Informasi yang dikumpulkan
                oleh file log termasuk alamat protokol internet (IP), jenis
                browser, Penyedia Layanan Internet (ISP), stempel tanggal dan
                waktu, halaman yang dirujuk / keluar, dan mungkin jumlah klik.
                Semua ini tidak terkait dengan informasi apa pun yang dapat
                diidentifikasi secara pribadi. Tujuan dari informasi ini adalah
                untuk menganalisis tren, mengelola situs, melacak pergerakan
                pengguna di situs web, dan mengumpulkan informasi demografis.
                Kebijakan Privasi kami dibuat dengan bantuan Generator Kebijakan
                Privasi.
              </p>
            </div>

            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                Cookie dan Web Beacon
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Seperti situs web lainnya, Quezt menggunakan "cookie". Cookies
                ini digunakan untuk menyimpan informasi termasuk preferensi
                pengunjung, dan halaman di situs web yang diakses atau
                dikunjungi pengunjung. Informasi ini digunakan untuk
                mengoptimalkan pengalaman pengguna dengan menyesuaikan konten
                halaman web kami berdasarkan jenis browser pengunjung dan / atau
                informasi lainnya.
              </p>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Server iklan pihak ketiga atau jaringan iklan menggunakan
                teknologi seperti cookie, JavaScript, atau Web Beacon yang
                digunakan di masing-masing iklan dan tautan yang muncul di
                Quezt, yang dikirim langsung ke browser pengguna. Mereka secara
                otomatis menerima alamat IP Anda ketika hal ini terjadi.
                Teknologi ini digunakan untuk mengukur efektivitas kampanye
                iklan mereka dan / atau untuk mempersonalisasi konten iklan yang
                Anda lihat di situs web yang Anda kunjungi.
              </p>

              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Perhatikan bahwa Quezt tidak memiliki akses atau kontrol atas
                cookie ini yang digunakan oleh pengiklan pihak ketiga.
              </p>
            </div>

            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                Kebijakan Privasi Pihak Ketiga
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Kebijakan Privasi Quezt tidak berlaku untuk pengiklan atau situs
                web lain. Karenanya, kami menyarankan Anda untuk berkonsultasi
                dengan masing-masing Kebijakan Privasi dari server iklan pihak
                ketiga ini untuk informasi yang lebih terperinci. Ini mungkin
                termasuk praktik dan instruksi mereka tentang cara menyisih dari
                opsi tertentu.
              </p>

              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Anda dapat memilih untuk menonaktifkan cookie melalui opsi
                browser Anda masing-masing. Untuk mengetahui informasi lebih
                rinci tentang manajemen cookie dengan browser web tertentu,
                dapat ditemukan di situs web masing-masing browser. Apa yang
                dimaksud dengan cookie?
              </p>
            </div>

            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                Informasi Anak-Anak
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Bagian lain dari prioritas kami adalah menambahkan perlindungan
                bagi anak-anak saat menggunakan internet. Kami mendorong orang
                tua dan wali untuk mengamati, berpartisipasi dalam, dan / atau
                memantau dan membimbing aktivitas online mereka.
              </p>

              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Quezt tidak dengan sengaja mengumpulkan Informasi Identifikasi
                Pribadi apa pun dari anak-anak di bawah usia 13 tahun. Jika Anda
                merasa bahwa anak Anda memberikan informasi semacam ini di situs
                web kami, kami sangat menganjurkan Anda untuk segera menghubungi
                kami dan kami akan melakukan upaya terbaik kami untuk segera
                menghapus informasi tersebut dari catatan kami.
              </p>
            </div>

            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                Hanya Kebijakan Privasi Online
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Kebijakan Privasi ini hanya berlaku untuk aktivitas online kami
                dan berlaku untuk pengunjung situs web kami sehubungan dengan
                informasi yang mereka bagikan dan / atau kumpulkan di Quezt.
                Kebijakan ini tidak berlaku untuk informasi apa pun yang
                dikumpulkan secara offline atau melalui saluran selain situs web
                ini.
              </p>
            </div>

            <div>
              <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                Persetujuan
              </h2>
              <p className="tw-font-monda tw-text-lg tw-mt-2">
                Dengan menggunakan situs web kami, Anda dengan ini menyetujui
                Kebijakan Privasi kami dan menyetujui Syarat dan Ketentuannya.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer() {
  return (
    <div className="tw-grid tw-grid-cols-5 tw-gap-8 tw-px-4 tw-py-10 tw-border-t-[2px] tw-border-t-[#C70039] max-lg:tw-grid-cols-1">
      <div>
        <p className="tw-font-jacques tw-font-bold tw-text-2xl tw-text-[#C70039]">
          Quezt
        </p>

        <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-mt-4">
          Quezt merupakan website untuk belajar dan tanya jawab materi
          perkuliahan. Jawaban yang diberikan pada website ini
          merupakan tutor yang memiliki kompetensi sesuai dengan
          aturan dan standar website ini.
        </p>
      </div>

      <div>
        <p className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
          Jurusan Kuliah
        </p>

        <div className="tw-flex tw-flex-col tw-gap-y-[0.5px]">
          <Link
            href="/jurusan/teknik-informatika"
            className="tw-w-fit tw-mt-4"
          >
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Teknik Informatika
            </p>
          </Link>

          <Link
            href="/jurusan/ilmu-komunikasi"
            className="tw-w-fit tw-mt-4"
          >
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Ilmu Komunikasi
            </p>
          </Link>

          <Link href="/jurusan/kedokteran" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Kedokteran
            </p>
          </Link>

          <Link href="/jurusan/psikologi" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Psikologi
            </p>
          </Link>

          <Link href="/jurusan/farmasi" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Farmasi
            </p>
          </Link>

          <Link href="/jurusan/aktuaria" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Aktuaria
            </p>
          </Link>

          <Link href="/jurusan/teknik-geologi" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Teknik Geologi
            </p>
          </Link>

          <Link href="/jurusan" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Lainnya
            </p>
          </Link>
        </div>
      </div>

      <div>
        <p className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
          Tautan
        </p>

        <div className="tw-flex tw-flex-col tw-gap-y-[0.5px]">
          <Link href="/tentang-kami" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Tentang Kami
            </p>
          </Link>

          <Link href="/kebijakan-privasi" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Kebijakan Privasi
            </p>
          </Link>

          <Link href="/syarat-ketentuan" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Syarat dan Ketentuan
            </p>
          </Link>

          <Link href="/bantuan" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Bantuan
            </p>
          </Link>

          <Link href="/hubungi-kami" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Hubungi Kami
            </p>
          </Link>
        </div>
      </div>

      <div>
        <p className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
          Produk
        </p>

        <div className="tw-flex tw-flex-col tw-gap-y-[0.5px]">
          <Link href="/produk/quezt-premium" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Quezt Premium
            </p>
          </Link>

          <Link href="/produk/quezt-pro" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Quezt Pro
            </p>
          </Link>

          <Link href="/produk/tutorin" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Tutorin
            </p>
          </Link>
        </div>
      </div>

      <div>
        <p className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
          Umum
        </p>

        <div className="tw-flex tw-flex-col tw-gap-y-[0.5px]">
          <Link href="/gabung-tutor" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Gabung Tutor
            </p>
          </Link>

          <Link href="/artikel" className="tw-w-fit tw-mt-4">
            <p className="tw-font-monda tw-font-normal tw-text-sm tw-text-black tw-hover:text-[#C70039] tw-duration-200">
              Artikel
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

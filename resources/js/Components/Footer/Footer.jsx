import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer() {
    return (
        <div className="grid grid-cols-5 gap-8 px-4 py-10 border-t-[2px] border-t-[#C70039]">
            <div>
                <p className="font-jacques font-bold text-2xl text-[#C70039]">
                    Quezt
                </p>

                <p className="font-monda font-normal text-sm text-black mt-4">
                    Quezt merupakan website untuk belajar dan tanya jawab materi
                    perkuliahan. Jawaban yang diberikan pada website ini
                    merupakan tutor yang memiliki kompetensi sesuai dengan
                    aturan dan standar website ini.
                </p>
            </div>

            <div>
                <p className="font-monda font-bold text-xl text-[#C70039]">
                    Jurusan Kuliah
                </p>

                <div className="flex flex-col gap-y-[0.5px]">
                    <Link
                        href="/jurusan/teknik-informatika"
                        className="w-fit mt-4"
                    >
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Teknik Informatika
                        </p>
                    </Link>

                    <Link
                        href="/jurusan/ilmu-komunikasi"
                        className="w-fit mt-4"
                    >
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Ilmu Komunikasi
                        </p>
                    </Link>

                    <Link href="/jurusan/kedokteran" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Kedokteran
                        </p>
                    </Link>

                    <Link href="/jurusan/psikologi" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Psikologi
                        </p>
                    </Link>

                    <Link href="/jurusan/farmasi" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Farmasi
                        </p>
                    </Link>

                    <Link href="/jurusan/aktuaria" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Aktuaria
                        </p>
                    </Link>

                    <Link href="/jurusan/teknik-geologi" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Teknik Geologi
                        </p>
                    </Link>

                    <Link href="/jurusan" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Lainnya
                        </p>
                    </Link>
                </div>
            </div>

            <div>
                <p className="font-monda font-bold text-xl text-[#C70039]">
                    Tautan
                </p>

                <div className="flex flex-col gap-y-[0.5px]">
                    <Link href="/tentang-kami" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Tentang Kami
                        </p>
                    </Link>

                    <Link href="/kebijakan-privasi" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Kebijakan Privasi
                        </p>
                    </Link>

                    <Link href="/syarat-ketentuan" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Syarat dan Ketentuan
                        </p>
                    </Link>

                    <Link href="/bantuan" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Bantuan
                        </p>
                    </Link>

                    <Link href="/hubungi-kami" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Hubungi Kami
                        </p>
                    </Link>
                </div>
            </div>

            <div>
                <p className="font-monda font-bold text-xl text-[#C70039]">
                    Produk
                </p>

                <div className="flex flex-col gap-y-[0.5px]">
                    <Link href="/produk/quezt-premium" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Quezt Premium
                        </p>
                    </Link>

                    <Link href="/produk/quezt-pro" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Quezt Pro
                        </p>
                    </Link>

                    <Link href="/produk/tutorin" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Tutorin
                        </p>
                    </Link>
                </div>
            </div>

            <div>
                <p className="font-monda font-bold text-xl text-[#C70039]">
                    Umum
                </p>

                <div className="flex flex-col gap-y-[0.5px]">
                    <Link href="/gabung-tutor" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Gabung Tutor
                        </p>
                    </Link>

                    <Link href="/artikel" className="w-fit mt-4">
                        <p className="font-monda font-normal text-sm text-black hover:text-[#C70039] duration-200">
                            Artikel
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

import { Link } from "@inertiajs/react";
import React from "react";

export default function MataKuliah({ mata_kuliah, deskripsi, slug }) {
    return (
        <Link href={`/mata-kuliah/${slug}`}>
            <div className="tw-bg-[#C70039] tw-px-5 tw-py-6 hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200 tw-cursor-pointer tw-w-full tw-h-full">
                <p className="tw-font-monda tw-font-bold tw-text-lg tw-text-white">
                    {mata_kuliah}
                </p>
                <p className="tw-font-monda tw-text-sm tw-text-white tw-mt-2">
                    {deskripsi}
                </p>

                <p className="tw-font-monda tw-font-bold tw-text-sm tw-text-white tw-mt-4">
                    {"Lihat Mata Kuliah >"}
                </p>
            </div>
        </Link>
    );
}

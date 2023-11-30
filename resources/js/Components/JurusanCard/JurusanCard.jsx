import { Link } from "@inertiajs/react";
import React from "react";

export default function JurusanCard({ jurusan, deskripsi, slug }) {
  return (
    <Link href={`/jurusan/${slug}`}>
      <div className="tw-bg-[#C70039] tw-px-5 tw-py-6 tw-hover:bg-[#d50a43] tw-active:bg-[#bb073a] tw-duration-200 tw-cursor-pointer tw-w-full tw-h-full">
        <p className="tw-font-monda tw-font-bold tw-text-lg tw-text-white">
          {jurusan}
        </p>
        <p className="tw-font-monda tw-text-sm tw-text-white tw-mt-2">
          {deskripsi}
        </p>

        <p className="tw-font-monda tw-font-bold tw-text-sm tw-text-white tw-mt-4">
          {"Lihat Jurusan >"}
        </p>
      </div>
    </Link>
  );
}

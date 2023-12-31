import { Link } from "@inertiajs/react";
import React from "react";

export default function PertanyaanCard({ id, pertanyaan, user }) {
  return (
    <Link href={`/pertanyaan/${id}`}>
      <div className="tw-bg-[#C70039] tw-px-5 tw-py-6 hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200 tw-cursor-pointer tw-w-full tw-h-full">
        <p className="tw-font-monda tw-font-bold tw-text-lg tw-text-white">
          {pertanyaan}
        </p>
        <p className="tw-font-monda tw-text-sm tw-text-white tw-mt-2">{user}</p>

        <p className="tw-font-monda tw-font-bold tw-text-sm tw-text-white tw-mt-4">
          {"Lihat Pertanyaan >"}
        </p>
      </div>
    </Link>
  );
}

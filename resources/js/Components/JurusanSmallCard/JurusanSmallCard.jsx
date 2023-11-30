import { Link } from "@inertiajs/react";
import React from "react";

export default function JurusanSmallCard({ text, slug }) {
  return (
    <Link href={`/jurusan/${slug}`}>
      <button className={`tw-bg-[#FF7B7B] tw-py-2 tw-px-4 tw-rounded-full tw-text-white tw-font-medium tw-text-sm tw-hover:bg-[#ff8a8a] tw-active:bg-[#ee6f6f] tw-duration-200`}>
        {text}
      </button>
    </Link>
  );
}

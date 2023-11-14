import { Link } from "@inertiajs/react";
import React from "react";

export default function JurusanSmallCard({ text, slug }) {
    return (
        <Link href={`/jurusan/${slug}`}>
            <button className="bg-[#FF7B7B] py-2 px-4 rounded-full text-white font-medium text-sm hover:bg-[#ff8a8a] active:bg-[#ee6f6f] duration-200">
                {text}
            </button>
        </Link>
    );
}

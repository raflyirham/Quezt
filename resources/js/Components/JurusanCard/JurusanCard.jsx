// import { Link } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import React from "react";

export default function JurusanCard({ jurusan, deskripsi }) {
    return (
        <Link href={`/jurusan`}>
            <div className="bg-[#C70039] px-5 py-6 hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 cursor-pointer w-full h-full">
                <p className="font-monda font-bold text-lg text-white">
                    {jurusan}
                </p>
                <p className="font-monda text-sm text-white mt-2">
                    {deskripsi}
                </p>

                <p className="font-monda font-bold text-sm text-white mt-4">
                    {"Lihat Jurusan >"}
                </p>
            </div>
        </Link>
    );
}

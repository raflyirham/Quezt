import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import JurusanCard from "../../Components/JurusanCard/JurusanCard";
import Pagination from "../../Components/Pagination/Pagination";

export default function Index() {
    const majors = usePage().props.majors;

    return (
        <>
            <Head title="Jurusan | Quezt" />

            <Navbar />

            <div className="p-4 mt-40 min-h-screen">
                <div>
                    <h1 className="font-jacques font-bold text-4xl text-[#C70039]">
                        Jurusan
                    </h1>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                    {majors.total == 0 ? (
                        <p className="font-monda">Tidak ada data jurusan.</p>
                    ) : (
                        <>
                            {majors.data.map((major) => (
                                <JurusanCard
                                    key={major.MajorID}
                                    jurusan={major.MajorName}
                                    deskripsi={major.MajorDescription}
                                    slug={major.MajorSlug}
                                />
                            ))}
                        </>
                    )}
                </div>

                <Pagination links={majors.links} />
            </div>

            <Footer />
        </>
    );
}

import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MataKuliah from "../../Components/MataKuliahCard/MataKuliahCard";
import Pagination from "../../Components/Pagination/Pagination";

export default function Index({ major, courses }) {
    return (
        <>
            <Head title={`Jurusan ${major.MajorName} | Quezt`} />

            <Navbar />

            <div className="p-4 mt-40 min-h-screen">
                <div>
                    <p className="font-monda font-bold text-xl">Jurusan</p>
                    <h1 className="font-jacques font-bold text-4xl text-[#C70039]">
                        {major.MajorName}
                    </h1>

                    <p className="font-monda text-lg mt-3">
                        {major.MajorDescription}
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="font-monda font-bold text-2xl text-[#C70039]">
                        Mata Kuliah
                    </h2>

                    <p className="font-monda">{`Terdapat ${courses.total} mata kuliah pada jurusan ini.`}</p>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                    {courses.total == 0 ? (
                        <p className="font-monda">Tidak ada mata kuliah.</p>
                    ) : (
                        <>
                            {courses.data.map((course) => (
                                <MataKuliah
                                    mata_kuliah={course.CourseName}
                                    deskripsi={course.CourseDescription}
                                    slug={course.CourseSlug}
                                    key={course.CourseID}
                                />
                            ))}
                        </>
                    )}
                </div>

                <Pagination links={courses.links} />
            </div>

            <Footer />
        </>
    );
}

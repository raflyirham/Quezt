import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import JurusanCard from "../../Components/JurusanCard/JurusanCard";
import Pagination from "../../Components/Pagination/Pagination";
import MataKuliah from "../../Components/MataKuliahCard/MataKuliahCard";

export default function Index({ courses }) {
    return (
        <>
            <Head title="Mata Kuliah | Quezt" />

            <Navbar />

            <div className="p-4 mt-40 min-h-screen">
                <div>
                    <h1 className="font-jacques font-bold text-4xl text-[#C70039]">
                        Mata Kuliah
                    </h1>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                    {courses.length == 0 ? (
                        <p className="font-monda">
                            Tidak ada data mata kuliah.
                        </p>
                    ) : (
                        <>
                            {courses.data.map((course) => (
                                <MataKuliah
                                    key={course.CourseID}
                                    mata_kuliah={course.CourseName}
                                    deskripsi={course.CourseDescription}
                                    slug={course.CourseSlug}
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

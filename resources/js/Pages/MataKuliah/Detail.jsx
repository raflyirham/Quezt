import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import JurusanSmallCard from "../../Components/JurusanSmallCard/JurusanSmallCard";
import PertanyaanCard from "../../Components/PertanyaanCard/PertanyaanCard";

export default function Index({ course, pertanyaan }) {
    // console.log(pertanyaan);
    return (
        <>
            <Head title={`Mata Kuliah ${course.CourseName} | Quezt`} />

            <Navbar />

            <div className="p-4 mt-40 min-h-screen">
                <div>
                    <p className="font-monda font-bold text-xl">Mata Kuliah</p>
                    <h1 className="font-jacques font-bold text-4xl text-[#C70039]">
                        {course.CourseName}
                    </h1>

                    <p className="font-monda text-lg mt-3">
                        {course.CourseDescription}
                    </p>
                </div>

                <div className="mt-1">
                    <JurusanSmallCard
                        text={course.major.MajorName}
                        slug={course.major.MajorSlug}
                    />
                </div>

                <div className="mt-10">
                    <h2 className="font-monda font-bold text-2xl text-[#C70039]">
                        Pertanyaan dan Materi
                    </h2>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-2">
                    {pertanyaan.length == 0 ? (
                        <p className="font-monda">
                            Mata kuliah ini belum ada pertanyaan dan materi.
                        </p>
                    ) : (
                        <>
                            {pertanyaan.map((pertanyaan) => (
                                <PertanyaanCard
                                    id={pertanyaan.questiondetail.QuestionID}
                                    pertanyaan={
                                        pertanyaan.questiondetail.QuestionDetail
                                    }
                                    user={pertanyaan.user.UserName}
                                    key={pertanyaan.questiondetail.QuestionID}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}

import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Index({ pertanyaan }) {
    return (
        <>
            <Head title={`Pertanyaan | Quezt`} />

            <Navbar />

            <div className="p-4 mt-40 min-h-screen">
                <div>
                    <p className="font-monda font-bold text-xl">{`${pertanyaan.course.CourseName} | ${pertanyaan.course.major.MajorName}`}</p>
                    <h1 className="font-jacques font-bold text-4xl text-[#C70039]">
                        {pertanyaan.questiondetail.QuestionDetail}
                    </h1>

                    <p className="font-monda text-lg mt-3">
                        {pertanyaan.user.UserName}
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}

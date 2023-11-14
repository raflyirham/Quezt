import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Index({ pertanyaan }) {
    // console.log(pertanyaan);

    const convertDate = (date) => {
        const event = new Date(date);
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        return event.toLocaleDateString("id-ID", options);
    };

    return (
        <>
            <Head
                title={`${pertanyaan.questiondetail.QuestionTitle} | Quezt`}
            />

            <Navbar />

            <div className="flex flex-col items-center p-4 mt-40 min-h-screen w-[100%]">
                <div className="px-8 py-8 shadow-lg w-[80%] h-fit">
                    <div>
                        <h1 className="font-monda font-bold text-2xl text-[#C70039]">
                            {pertanyaan.questiondetail.QuestionTitle}
                        </h1>

                        <p className="font-monda text-lg mt-4">
                            {pertanyaan.questiondetail.QuestionDetail}
                        </p>
                    </div>

                    <div className="flex flex-row justify-between items-center mt-4">
                        <p className="font-monda font-bold text-sm text-[#C70039]">{`${pertanyaan.course.CourseName} | ${pertanyaan.course.major.MajorName}`}</p>

                        <p className="font-monda mt-2 text-sm">
                            {convertDate(
                                pertanyaan.questiondetail.QuestionDate
                            )}
                        </p>
                    </div>
                </div>

                <div className="mt-14 w-[80%]">
                    <h2 className="font-monda font-bold text-xl text-[#C70039]">
                        Jawaban
                    </h2>

                    <div className="flex flex-col gap-x-4 mt-6">
                        {pertanyaan.questionanswers.length == 0 ? (
                            <p className="font-monda text-sm">
                                Pertanyaan ini belum dijawab oleh tutor.
                            </p>
                        ) : (
                            <>
                                {pertanyaan.questionanswers.map((jawaban) => (
                                    <div
                                        className="px-8 py-8 shadow-lg h-fit"
                                        key={jawaban.AnswerID}
                                    >
                                        <div>
                                            <p className="font-monda text-lg mt-4">
                                                {
                                                    jawaban.answerheader
                                                        .answerdetail
                                                        .AnswerDetail
                                                }
                                            </p>
                                        </div>

                                        <div className="flex flex-row justify-between items-center mt-4">
                                            <p className="font-monda font-bold text-sm text-[#C70039]">{`${jawaban.answerheader.tutor.TutorName}`}</p>

                                            <p className="font-monda text-sm">
                                                {convertDate(
                                                    jawaban.answerheader
                                                        .answerdetail.AnswerDate
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>

                {usePage().props.user_data && (
                    <>
                        <div className="px-8 py-8 shadow-lg w-[80%] h-fit mt-10">
                            <h3 className="font-monda font-bold text-lg">
                                Jawab Pertanyaan
                            </h3>
                        </div>
                    </>
                )}
            </div>

            <Footer />
        </>
    );
}

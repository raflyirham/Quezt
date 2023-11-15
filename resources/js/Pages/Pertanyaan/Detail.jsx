import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Index({ pertanyaan }) {
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

            <div className="flex flex-col items-center py-16 px-4 mt-16 min-h-screen w-[100%]">
                <div className="mb-4 fixed bottom-0 right-0 mr-4 after:hidden duration-700">
                    {usePage().props.flash.success && (
                        <div className="py-2 px-3 bg-green-500 text-white font-monda font-bold rounded mt-2">
                            {usePage().props.flash.success}
                        </div>
                    )}
                    {usePage().props.flash.error && (
                        <div className="py-2 px-3 bg-red-500 text-white font-monda font-bold rounded mt-2">
                            {usePage().props.flash.error}
                        </div>
                    )}
                </div>
                <div className="px-8 py-8 shadow-lg w-[80%] h-fit">
                    <div>
                        <h1 className="font-monda font-bold text-2xl text-[#C70039]">
                            {pertanyaan.questiondetail.QuestionTitle}
                        </h1>

                        <p className="font-monda text-lg mt-4 break-all">
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
                                <div className="flex flex-col gap-y-6">
                                    {pertanyaan.questionanswers.map(
                                        (jawaban) => (
                                            <div>
                                                <div
                                                    className="px-8 py-8 shadow-lg h-fit"
                                                    key={jawaban.AnswerID}
                                                >
                                                    <div>
                                                        <p className="font-monda text-lg mt-4 break-all">
                                                            {
                                                                jawaban
                                                                    .answerheader
                                                                    .answerdetail
                                                                    .AnswerDetail
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-row justify-between items-center mt-4">
                                                        <p className="font-monda font-bold text-sm text-[#C70039]">{`${jawaban.answerheader.user.UserName}`}</p>

                                                        <p className="font-monda text-sm">
                                                            {convertDate(
                                                                jawaban
                                                                    .answerheader
                                                                    .answerdetail
                                                                    .AnswerDate
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-3">
                                                    {usePage().props
                                                        .user_data &&
                                                        usePage().props
                                                            .user_data
                                                            .RoleID === 2 &&
                                                        jawaban.answerheader
                                                            .UserID ===
                                                            usePage().props
                                                                .user_data
                                                                .UserID && (
                                                            <>
                                                                <form
                                                                    action={`/pertanyaan/${pertanyaan.QuestionID}/hapus-jawaban`}
                                                                    method="POST"
                                                                >
                                                                    <input
                                                                        type="hidden"
                                                                        name="_token"
                                                                        value={
                                                                            usePage()
                                                                                .props
                                                                                .csrf_token
                                                                                .csrf_token
                                                                        }
                                                                    />

                                                                    <input
                                                                        type="hidden"
                                                                        name="_method"
                                                                        value="delete"
                                                                    />

                                                                    <input
                                                                        type="hidden"
                                                                        name="jawaban_id"
                                                                        value={
                                                                            jawaban.AnswerID
                                                                        }
                                                                    />

                                                                    <button className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md mt-1 font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200">
                                                                        Hapus
                                                                        Jawaban
                                                                    </button>
                                                                </form>
                                                            </>
                                                        )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {usePage().props.user_data &&
                    usePage().props.user_data.RoleID === 2 && (
                        <>
                            <div className="px-8 py-8 shadow-lg w-[80%] h-fit mt-10">
                                <h3 className="font-monda font-bold text-lg">
                                    Jawab Pertanyaan
                                </h3>

                                <form
                                    action={`/pertanyaan/${pertanyaan.QuestionID}`}
                                    method="POST"
                                >
                                    <input
                                        type="hidden"
                                        name="_token"
                                        value={
                                            usePage().props.csrf_token
                                                .csrf_token
                                        }
                                    />

                                    <textarea
                                        name="jawab"
                                        id="jawab"
                                        cols="30"
                                        rows="10"
                                        className="w-full mt-4 py-4 px-4 border-2 rounded resize-none"
                                        required
                                    ></textarea>

                                    {usePage().props.errors.jawab && (
                                        <div className="font-monda text-[#C70039]">
                                            {usePage().props.errors.jawab}
                                        </div>
                                    )}

                                    <button className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md mt-1 font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200">
                                        Kirim Jawaban
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
            </div>

            <Footer />
        </>
    );
}

import React, { useRef, useEffect, useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import JurusanSmallCard from "../../Components/JurusanSmallCard/JurusanSmallCard";
import PertanyaanCard from "../../Components/PertanyaanCard/PertanyaanCard";
import Pagination from "../../Components/Pagination/Pagination";
import { useRecaptcha } from "@/Composables/ReCaptcha";

export default function Index({ course, questions, user }) {
    const { errors } = usePage().props;
    useRecaptcha();

    const [pertanyaanTitle, setPertanyaanTitle] = useState("Tanya Materi");
    const pertanyaanRef = useRef(null);

    const showPertanyaanForm = () => {
        if (pertanyaanRef.current.classList.contains("hidden")) {
            pertanyaanRef.current.classList.remove("hidden");
            setPertanyaanTitle("Tutup Form");
        } else {
            pertanyaanRef.current.classList.add("hidden");
            setPertanyaanTitle("Tanya Materi");
        }
    };

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

                <div className="flex flex-row justify-between mt-10 max-lg:flex-col">
                    <h2 className="font-monda font-bold text-2xl text-[#C70039]">
                        Pertanyaan dan Materi
                    </h2>

                    {user?.RoleID == 1 &&
                        user?.membership.MembershipTypeID != 1 && (
                            <>
                                <button
                                    className="bg-[#C70039] text-white font-medium text-base px-5 py-2 font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 w-fit max-lg:mt-2 max-lg:mb-2"
                                    onClick={showPertanyaanForm}
                                >
                                    {pertanyaanTitle}
                                </button>
                            </>
                        )}
                </div>

                {user?.RoleID == 1 &&
                    user?.membership.MembershipTypeID != 1 && (
                        <>
                            <div
                                ref={pertanyaanRef}
                                className="p-6 shadow-lg mb-8 hidden"
                            >
                                <form
                                    action={`/mata-kuliah/${course.CourseSlug}/tanya-materi`}
                                    method="POST"
                                    className="flex flex-col gap-y-6"
                                >
                                    <input
                                        type="hidden"
                                        name="_token"
                                        value={
                                            usePage().props.csrf_token
                                                .csrf_token
                                        }
                                    />

                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="judul_pertanyaan"
                                            className="font-monda font-bold text-lg text-[#C70039]"
                                        >
                                            Judul Pertanyaan
                                        </label>
                                        <input
                                            id="judul_pertanyaan"
                                            name="judul_pertanyaan"
                                            placeholder="Masukkan judul pertanyaan kamu..."
                                            type="text"
                                            className="p-2 border-[1px] border-[#000] rounded mt-2"
                                            required
                                        />
                                        {usePage().props.errors
                                            .judul_pertanyaan && (
                                            <div className="font-monda text-[#C70039]">
                                                {
                                                    usePage().props.errors
                                                        .judul_pertanyaan
                                                }
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="detail_pertanyaan"
                                            className="font-monda font-bold text-lg text-[#C70039]"
                                        >
                                            Detail Pertanyaan
                                        </label>
                                        <textarea
                                            name="detail_pertanyaan"
                                            id="detail_pertanyaan"
                                            cols="30"
                                            rows="10"
                                            className="w-full mt-4 py-4 px-4 border-[1px] border-[#000] rounded resize-none"
                                            placeholder="Masukkan detail pertanyaan kamu..."
                                            required
                                        ></textarea>
                                        {usePage().props.errors
                                            .detail_pertanyaan && (
                                            <div className="font-monda text-[#C70039]">
                                                {
                                                    usePage().props.errors
                                                        .detail_pertanyaan
                                                }
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="g-recaptcha mt-4"
                                        data-sitekey={
                                            usePage().props.config
                                                .google_recaptcha_key
                                        }
                                    ></div>
                                    {errors["g-recaptcha-response"] && (
                                        <div className="font-monda text-[#C70039]">
                                            {errors["g-recaptcha-response"]}
                                        </div>
                                    )}

                                    <button className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md mt-1 font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200">
                                        Kirim Pertanyaan
                                    </button>
                                </form>
                            </div>
                        </>
                    )}

                <div className="fixed bottom-0 right-0 mr-4 mb-4">
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

                <div className="grid grid-cols-3 gap-3 mt-2 max-lg:grid-cols-1">
                    {questions.total == 0 ? (
                        <p className="font-monda">
                            Mata kuliah ini belum ada pertanyaan dan materi.
                        </p>
                    ) : (
                        <>
                            {questions.data.map((pertanyaan) => (
                                <PertanyaanCard
                                    id={pertanyaan.questiondetail.QuestionID}
                                    pertanyaan={
                                        pertanyaan.questiondetail.QuestionTitle
                                    }
                                    user={pertanyaan.user.UserName}
                                    key={pertanyaan.questiondetail.QuestionID}
                                />
                            ))}
                        </>
                    )}
                </div>

                <Pagination links={questions.links} />
            </div>

            <Footer />
        </>
    );
}

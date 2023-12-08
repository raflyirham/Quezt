import React, { useRef, useEffect, useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import JurusanSmallCard from "../../Components/JurusanSmallCard/JurusanSmallCard";
import PertanyaanCard from "../../Components/PertanyaanCard/PertanyaanCard";
import Pagination from "../../Components/Pagination/Pagination";
import { useRecaptcha } from "@/Composables/ReCaptcha";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Index({ course, questions, user }) {
    const { errors } = usePage().props;
    useRecaptcha();

    const [pertanyaanTitle, setPertanyaanTitle] = useState("Tanya Materi");
    const pertanyaanRef = useRef(null);

    const [tanya, setTanya] = useState("");

    const showPertanyaanForm = () => {
        if (pertanyaanRef.current.classList.contains("tw-hidden")) {
            pertanyaanRef.current.classList.remove("tw-hidden");
            setPertanyaanTitle("Tutup Form");
        } else {
            pertanyaanRef.current.classList.add("tw-hidden");
            setPertanyaanTitle("Tanya Materi");
        }
    };

    return (
        <>
            <Head title={`Mata Kuliah ${course.CourseName} | Quezt`} />

            <Navbar />

            <div className="tw-p-4 tw-mt-40 tw-min-h-screen">
                <div>
                    <p className="tw-font-monda tw-font-bold tw-text-xl">Mata Kuliah</p>
                    <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
                        {course.CourseName}
                    </h1>

                    <p className="tw-font-monda tw-text-lg tw-mt-3">
                        {course.CourseDescription}
                    </p>
                </div>

                <div className="tw-mt-1">
                    <JurusanSmallCard
                        text={course.major.MajorName}
                        slug={course.major.MajorSlug}
                    />
                </div>

                <div className="tw-flex tw-flex-row tw-justify-between tw-mt-10 tw-max-lg:flex-col">
                    <h2 className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#C70039]">
                        Pertanyaan dan Materi
                    </h2>

                    {user?.RoleID == 1 &&
                        user?.membership.MembershipTypeID != 1 && (
                            <>
                                <button
                                    className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-5 tw-py-2 tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200 tw-w-fit max-lg:tw-mt-2 tw-max-lg:mb-2"
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
                                className="tw-p-6 tw-shadow-lg tw-mb-8 tw-hidden"
                            >
                                <form
                                    action={`/mata-kuliah/${course.CourseSlug}/tanya-materi`}
                                    method="POST"
                                    className="tw-flex tw-flex-col tw-gap-y-6"
                                >
                                    <input
                                        type="hidden"
                                        name="_token"
                                        value={
                                            usePage().props.csrf_token
                                                .csrf_token
                                        }
                                    />

                                    <div className="tw-flex tw-flex-col">
                                        <label
                                            htmlFor="judul_pertanyaan"
                                            className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]"
                                        >
                                            Judul Pertanyaan
                                        </label>
                                        <input
                                            id="judul_pertanyaan"
                                            name="judul_pertanyaan"
                                            placeholder="Masukkan judul pertanyaan kamu..."
                                            type="text"
                                            className="tw-p-2 tw-border-[1px] tw-border-[#000] tw-rounded tw-mt-2"
                                            required
                                        />
                                        {usePage().props.errors
                                            .judul_pertanyaan && (
                                                <div className="tw-font-monda tw-text-[#C70039]">
                                                    {
                                                        usePage().props.errors
                                                            .judul_pertanyaan
                                                    }
                                                </div>
                                            )}
                                    </div>

                                    <div className="tw-flex tw-flex-col">
                                        <input type="hidden" name="tanya" value={tanya} />
                                        <label
                                            htmlFor="tanya"
                                            className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]"
                                        >
                                            Detail Pertanyaan
                                        </label>
                                        <CKEditor
                                            id="tanya"
                                            name="tanya"
                                            editor={ClassicEditor}
                                            data=""
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setTanya(data);
                                            }}

                                            config={{
                                                toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList', 'blockQuote'],
                                                heading: {
                                                    options: [
                                                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                                                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                                                    ]
                                                }
                                            }}

                                        />
                                        {usePage().props.errors.tanya && (
                                            <div className="tw-font-monda tw-text-[#C70039]">
                                                {usePage().props.errors.tanya}
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="g-recaptcha tw-mt-4"
                                        data-sitekey={
                                            usePage().props.config
                                                .google_recaptcha_key
                                        }
                                    ></div>
                                    {errors["g-recaptcha-response"] && (
                                        <div className="tw-font-monda tw-text-[#C70039]">
                                            {errors["g-recaptcha-response"]}
                                        </div>
                                    )}

                                    <button className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-mt-1 tw-font-monda tw-w-fit tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200">
                                        Kirim Pertanyaan
                                    </button>
                                </form>
                            </div>
                        </>
                    )}

                <div className="tw-fixed tw-bottom-0 tw-right-0 tw-mr-4 tw-mb-4">
                    {usePage().props.flash.success && (
                        <div className="tw-py-2 tw-px-3 tw-bg-green-500 tw-text-white tw-font-monda tw-font-bold tw-rounded tw-mt-2">
                            {usePage().props.flash.success}
                        </div>
                    )}
                    {usePage().props.flash.error && (
                        <div className="tw-py-2 tw-px-3 tw-bg-red-500 tw-text-white tw-font-monda tw-font-bold tw-rounded tw-mt-2">
                            {usePage().props.flash.error}
                        </div>
                    )}
                </div>

                <div className="tw-grid tw-grid-cols-3 tw-gap-3 tw-mt-2 max-lg:tw-grid-cols-1">
                    {questions.total == 0 ? (
                        <p className="tw-font-monda">
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

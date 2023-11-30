import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useRecaptcha } from "@/Composables/ReCaptcha";

export default function Detail({ pertanyaan }) {
    const { errors } = usePage().props;
    useRecaptcha();

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

            <div className="tw-flex tw-flex-col tw-items-center tw-py-16 tw-px-4 tw-mt-16 tw-min-h-screen tw-w-[100%]">
                <div className="tw-mb-4 tw-fixed tw-bottom-0 tw-right-0 tw-mr-4 tw-after:hidden tw-duration-700">
                    {usePage().props.flash.success && (
                        <div
                            classN
                            ame="tw-py-2 tw-px-3 tw-bg-green-500 tw-text-white tw-font-monda tw-font-bold tw-rounded tw-mt-2"
                        >
                            {usePage().props.flash.success}
                        </div>
                    )}
                    {usePage().props.flash.error && (
                        <div className="tw-py-2 tw-px-3 tw-bg-red-500 tw-text-white tw-font-monda tw-font-bold tw-rounded tw-mt-2">
                            {usePage().props.flash.error}
                        </div>
                    )}
                </div>
                <div className="tw-px-8 tw-py-8 tw-shadow-lg tw-w-[80%] tw-h-fit max-lg:tw-w-[100%]">
                    <div>
                        <h1 className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#C70039]">
                            {pertanyaan.questiondetail.QuestionTitle}
                        </h1>

                        <p className="tw-font-monda tw-text-lg tw-mt-4 tw-break-all">
                            {pertanyaan.questiondetail.QuestionDetail}
                        </p>
                    </div>

                    <div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-mt-4 max-lg:tw-flex-col max-lg:tw-justify-start max-lg:tw-items-start">
                        <p className="tw-font-monda tw-font-bold tw-text-sm tw-text-[#C70039]">{`${pertanyaan.course.CourseName} | ${pertanyaan.course.major.MajorName}`}</p>

                        <p className="tw-font-monda tw-mt-2 tw-text-sm">
                            {convertDate(
                                pertanyaan.questiondetail.QuestionDate
                            )}
                        </p>
                    </div>
                </div>

                <div className="tw-mt-14 tw-w-[80%] max-lg:tw-w-[100%]">
                    <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                        Jawaban
                    </h2>

                    <div className="tw-flex tw-flex-col tw-gap-x-4 tw-mt-6">
                        {pertanyaan.questionanswers.length == 0 ? (
                            <p className="tw-font-monda tw-text-sm">
                                Pertanyaan ini belum dijawab oleh tutor.
                            </p>
                        ) : (
                            <>
                                <div className="tw-flex tw-flex-col tw-gap-y-6">
                                    {pertanyaan.questionanswers.map(
                                        (jawaban, index) => (
                                            <div key={index}>
                                                <div
                                                    className="tw-px-8 tw-py-8 tw-shadow-lg tw-h-fit"
                                                    key={jawaban.AnswerID}
                                                >
                                                    <div>
                                                        <p className="tw-font-monda tw-text-lg tw-mt-4 tw-break-all">
                                                            {
                                                                jawaban
                                                                    .answerheader
                                                                    .answerdetail
                                                                    .AnswerDetail
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-mt-4 max-lg:tw-flex-col max-lg:tw-justify-start max-lg:tw-items-start">
                                                        <p className="tw-font-monda tw-font-bold tw-text-sm tw-text-[#C70039]">{`${jawaban.answerheader.user.UserName}`}</p>

                                                        <p className="tw-font-monda tw-text-sm">
                                                            {convertDate(
                                                                jawaban
                                                                    .answerheader
                                                                    .answerdetail
                                                                    .AnswerDate
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="tw-mt-3">
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

                                                                    <button className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-mt-1 tw-font-monda tw-border-[2px] tw-border-[#C70039] tw-hover:bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200">
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
                            <div className="tw-px-8 tw-py-8 tw-shadow-lg tw-w-[80%] tw-h-fit tw-mt-10 max-lg:tw-w-[100%]">
                                <h3 className="tw-font-monda tw-font-bold tw-text-lg">
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
                                        className="tw-w-full tw-mt-4 tw-py-4 tw-px-4 tw-border-2 tw-rounded tw-resize-none"
                                        required
                                    ></textarea>

                                    {usePage().props.errors.jawab && (
                                        <div className="tw-font-monda tw-text-[#C70039]">
                                            {usePage().props.errors.jawab}
                                        </div>
                                    )}

                                    <div
                                        className="tw-g-recaptcha tw-mt-4"
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

                                    <button className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-mt-4 tw-font-monda tw-border-[2px] tw-border-[#C70039] tw-hover:bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200">
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

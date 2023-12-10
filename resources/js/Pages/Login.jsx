import React from "react";
import { Head, Link } from "@inertiajs/react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useRecaptcha } from "../Composables/ReCaptcha";

import { usePage } from "@inertiajs/react";

export default function Login({ csrf_token }) {
    const { errors } = usePage().props;
    useRecaptcha();

    return (
        <>
            <Head title="Masuk | Quezt" />

            <Navbar />

            <div className="tw-flex tw-flex-row tw-min-h-screen">
                <div
                    className="tw-flex tw-flex-col tw-justify-center
         tw-bg-[#C70039] tw-min-h-screen tw-w-[50%] tw-p-4 max-lg:tw-hidden">
                    <img src="assets/img/masuk/illustration.png" />
                </div>

                <div className="tw-flex tw-flex-col tw-mt-40 tw-px-16 tw-py-4 tw-w-[50%] max-lg:tw-w-[100%] max-lg:tw-mt-32 max-lg:tw-px-4">
                    <h1 className="tw-font-monda tw-font-bold tw-text-3xl tw-text-[#C70039]">
                        Masuk ke Quezt
                    </h1>
                    <div className="tw-flex tw-flex-col tw-p-8 tw-shadow-lg tw-w-[100%] tw-mt-4">
                        {usePage().props.flash.success && (
                            <div className="tw-py-2 tw-px-3 tw-bg-green-500 tw-text-white tw-font-monda tw-font-bold tw-rounded">
                                {usePage().props.flash.success}
                            </div>
                        )}
                        {usePage().props.flash.error && (
                            <div className="tw-py-2 tw-px-3 tw-bg-red-500 tw-text-white tw-font-monda tw-font-bold tw-rounded">
                                {usePage().props.flash.error}
                            </div>
                        )}
                        <div className="tw-flex tw-flex-col tw-mt-4">
                            <form
                                action="masuk"
                                method="POST"
                                className="tw-flex tw-flex-col">
                                <input type="hidden" name="_token" value={csrf_token} />

                                <label htmlFor="email" className="tw-font-monda tw-font-bold">
                                    Email:
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Masukkan email kamu..."
                                    required
                                    className="tw-mt-2 tw-border-[1px] tw-border-[#000] tw-p-2 tw-rounded"></input>

                                <label
                                    htmlFor="password"
                                    className="tw-font-monda tw-font-bold tw-mt-8">
                                    Password:
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Masukkan password kamu..."
                                    required
                                    className="tw-mt-2 tw-border-[1px] tw-border-[#000] tw-p-2 tw-rounded"></input>

                                <div
                                    className="g-recaptcha tw-mt-4"
                                    data-sitekey={
                                        usePage().props.config.google_recaptcha_key
                                    }></div>
                                {errors["g-recaptcha-response"] && (
                                    <div className="tw-font-monda tw-text-[#C70039]">
                                        {errors["g-recaptcha-response"]}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] tw-active:bg-[#bb073a] tw-duration-200 tw-mt-4">
                                    Login
                                </button>
                            </form>

                            <Link
                                href="/daftar"
                                className="tw-bg-[#fff] tw-text-[#C70039] tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-border-[#d50a43] tw-active:border-[#bb073a] tw-mt-4 tw-text-center">
                                Daftar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

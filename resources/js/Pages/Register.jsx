import React from "react";
import { Head, Link } from "@inertiajs/react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useRecaptcha } from "../Composables/ReCaptcha";

import { usePage } from "@inertiajs/react";

export default function Register({ csrf_token }) {
  const { errors } = usePage().props;
  useRecaptcha();

  return (
    <>
      <Head title="Daftar | Quezt" />

      <Navbar />

      <div className="tw-flex tw-flex-row tw-min-h-screen">
        <div
          className="tw-flex tw-flex-col tw-justify-center
         tw-bg-[#C70039] tw-min-h-screen tw-w-[50%] tw-p-4 tw-max-lg:hidden"
        >
          <img src="assets/img/daftar/illustration.png" />
        </div>

        <div className="tw-flex tw-flex-col tw-mt-40 tw-px-16 tw-py-4 tw-w-[50%] tw-max-lg:w-[100%] tw-max-lg:mt-32 tw-max-lg:px-4">
          <h1 className="tw-font-monda tw-font-bold tw-text-3xl tw-text-[#C70039]">
            Daftar ke Quezt
          </h1>
          <div className="tw-flex tw-flex-col tw-p-8 tw-shadow-lg tw-w-[100%] tw-mt-4">
            <div className="tw-flex tw-flex-col tw-mt-4">
              <form
                action="/daftar"
                method="POST"
                className="tw-flex tw-flex-col"
              >
                <input
                  type="hidden"
                  name="_token"
                  value={csrf_token}
                />

                <label
                  htmlFor="name"
                  className="tw-font-monda tw-font-bold"
                >
                  Nama:
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Masukkan nama kamu..."
                  required
                  className="tw-mt-2 tw-border-[1px] tw-border-[#000] tw-p-2 tw-rounded"
                ></input>

                {errors.name && (
                  <div className="tw-font-monda tw-text-[#C70039]">
                    {errors.name}
                  </div>
                )}

                <label
                  htmlFor="username"
                  className="tw-font-monda tw-font-bold tw-mt-8"
                >
                  Username:
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Masukkan username kamu..."
                  required
                  className="tw-mt-2 tw-border-[1px] tw-border-[#000] tw-p-2 tw-rounded"
                ></input>

                {errors.username && (
                  <div className="tw-font-monda tw-text-[#C70039]">
                    {errors.username}
                  </div>
                )}

                <label
                  htmlFor="email"
                  className="tw-font-monda tw-font-bold tw-mt-8"
                >
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Masukkan email kamu..."
                  required
                  className="tw-mt-2 tw-border-[1px] tw-border-[#000] tw-p-2 tw-rounded"
                ></input>

                {errors.email && (
                  <div className="tw-font-monda tw-text-[#C70039]">
                    {errors.email}
                  </div>
                )}

                <label
                  htmlFor="password"
                  className="tw-font-monda tw-font-bold tw-mt-8"
                >
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Masukkan password kamu..."
                  required
                  className="tw-mt-2 tw-border-[1px] tw-border-[#000] tw-p-2 tw-rounded"
                ></input>

                {errors.password && (
                  <div className="tw-font-monda tw-text-[#C70039]">
                    {errors.password}
                  </div>
                )}

                <label
                  htmlFor="password_confirmation"
                  className="tw-font-monda tw-font-bold tw-mt-8"
                >
                  Konfirmasi Password:
                </label>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  placeholder="Masukkan kembali password kamu..."
                  required
                  className="tw-mt-2 tw-border-[1px] tw-border-[#000] tw-p-2 tw-rounded"
                ></input>

                {errors.confirmPassword && (
                  <div className="tw-font-monda tw-text-[#C70039]">
                    {errors.confirmPassword}
                  </div>
                )}

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

                <button
                  type="submit"
                  className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-border-[2px] tw-border-[#C70039] tw-hover:bg-[#d50a43] tw-active:bg-[#bb073a] tw-duration-200 tw-mt-4"
                >
                  Daftar
                </button>
              </form>

              <Link
                href="/masuk"
                className="tw-bg-[#fff] tw-text-[#C70039] tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-border-[2px] tw-border-[#C70039] tw-hover:border-[#d50a43] tw-active:border-[#bb073a] tw-mt-4 tw-text-center"
              >
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

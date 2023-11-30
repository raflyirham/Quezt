import React from "react";
import Index from "./Index";

import { usePage } from "@inertiajs/react";

export default function ChangeName({ user }) {
    const { errors } = usePage().props;

    return (
        <Index>
            <div className="tw-w-[70%] tw-shadow-lg tw-p-8 max-lg:tw-w-full">
                <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                    Ubah Nama
                </h2>

                <div className="tw-mt-3">
                    <h3 className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
                        Nama Saat Ini:
                    </h3>
                    <p className="tw-font-monda tw-uppercase">{user.UserName}</p>
                </div>

                <form action="change-name" method="POST">
                    <input
                        type="hidden"
                        name="_token"
                        value={usePage().props.csrf_token.csrf_token}
                    />

                    <div className="tw-flex tw-flex-col tw-mt-3">
                        <label
                            htmlFor="name"
                            className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]"
                        >
                            Nama Baru:
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Masukkan nama baru kamu..."
                            className="tw-p-2 tw-rounded tw-appearance-none tw-border-[1px] tw-border-[#000] tw-mt-2"
                        />
                        {errors.name && (
                            <div className="tw-font-monda tw-text-[#C70039]">
                                {errors.name}
                            </div>
                        )}
                    </div>

                    <div className="tw-flex tw-flex-col tw-mt-3">
                        <label
                            htmlFor="name_confirmation"
                            className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]"
                        >
                            Konfirmasi Nama Baru:
                        </label>

                        <input
                            id="name_confirmation"
                            name="name_confirmation"
                            type="text"
                            required
                            placeholder="Masukkan kembali nama baru kamu..."
                            className="tw-p-2 tw-rounded tw-appearance-none tw-border-[1px] tw-border-[#000] tw-mt-2"
                        />
                        {errors.name_confirmation && (
                            <div className="tw-font-monda tw-text-[#C70039]">
                                {errors.name_confirmation}
                            </div>
                        )}
                    </div>

                    <div className="tw-mt-3">
                        <button
                            type="submit"
                            className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-font-monda tw-border-[2px] tw-border-[#C70039] tw-hover:bg-[#d50a43] tw-active:bg-[#bb073a] tw-duration-200"
                        >
                            Ubah Nama
                        </button>
                    </div>
                </form>

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
        </Index>
    );
}

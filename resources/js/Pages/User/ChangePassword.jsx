import React from "react";
import Index from "./Index";

import { usePage } from "@inertiajs/react";

export default function ChangePassword() {
    const { errors } = usePage().props;

    return (
        <Index>
            <div className="tw-w-[70%] tw-shadow-lg tw-p-8 max-lg:tw-w-full">
                <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                    Ubah Password
                </h2>

                <form action="change-password" method="POST">
                    <input
                        type="hidden"
                        name="_token"
                        value={usePage().props.csrf_token.csrf_token}
                    />

                    <div className="tw-flex tw-flex-col tw-mt-3">
                        <label
                            htmlFor="new_password"
                            className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]"
                        >
                            Password Lama:
                        </label>

                        <input
                            id="old_password"
                            name="old_password"
                            type="password"
                            required
                            placeholder="Masukkan password lama kamu..."
                            className="tw-p-2 tw-rounded tw-appearance-none tw-border-[1px] tw-border-[#000] tw-mt-2"
                        />
                        {errors.old_password && (
                            <div className="tw-font-monda tw-text-[#C70039]">
                                {errors.old_password}
                            </div>
                        )}
                    </div>

                    <div className="tw-flex tw-flex-col tw-mt-3">
                        <label
                            htmlFor="new_password"
                            className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]"
                        >
                            Password Baru:
                        </label>

                        <input
                            id="new_password"
                            name="new_password"
                            type="password"
                            required
                            placeholder="Masukkan password baru kamu..."
                            className="tw-p-2 tw-rounded tw-appearance-none tw-border-[1px] tw-border-[#000] tw-mt-2"
                        />
                        {errors.new_password && (
                            <div className="tw-font-monda tw-text-[#C70039]">
                                {errors.new_password}
                            </div>
                        )}
                    </div>

                    <div className="tw-flex tw-flex-col tw-mt-3">
                        <label
                            htmlFor="new_password_confirmation"
                            className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]"
                        >
                            Konfirmasi Password Baru:
                        </label>

                        <input
                            id="new_password_confirmation"
                            name="new_password_confirmation"
                            type="password"
                            required
                            placeholder="Masukkan kembali password baru kamu..."
                            className="tw-p-2 tw-rounded tw-appearance-none tw-border-[1px] tw-border-[#000] tw-mt-2"
                        />
                        {errors.new_password_confirmation && (
                            <div className="tw-font-monda tw-text-[#C70039]">
                                {errors.new_password_confirmation}
                            </div>
                        )}
                    </div>

                    <div className="tw-mt-3">
                        <button
                            type="submit"
                            className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] tw-active:bg-[#bb073a] tw-duration-200"
                        >
                            Ubah Password
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

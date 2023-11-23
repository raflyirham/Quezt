import React from "react";
import Index from "./Index";

import { usePage } from "@inertiajs/react";

export default function ChangeEmail({ user }) {
    const { errors } = usePage().props;

    return (
        <Index>
            <div className="w-[70%] shadow-lg p-8 max-lg:w-full">
                <h2 className="font-monda font-bold text-xl text-[#C70039]">
                    Ubah Email
                </h2>

                <div className="mt-3">
                    <h3 className="font-monda font-bold text-lg text-[#C70039]">
                        Email Saat Ini:
                    </h3>
                    <p className="font-monda">{user.email}</p>
                </div>

                <form action="change-email" method="POST">
                    <input
                        type="hidden"
                        name="_token"
                        value={usePage().props.csrf_token.csrf_token}
                    />

                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="email"
                            className="font-monda font-bold text-lg text-[#C70039]"
                        >
                            Email Baru:
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Masukkan email baru kamu..."
                            className="p-2 rounded appearance-none border-[1px] border-[#000] mt-2"
                        />
                        {errors.email && (
                            <div className="font-monda text-[#C70039]">
                                {errors.email}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="email_confirmation"
                            className="font-monda font-bold text-lg text-[#C70039]"
                        >
                            Konfirmasi Email Baru:
                        </label>

                        <input
                            id="email_confirmation"
                            name="email_confirmation"
                            type="email"
                            required
                            placeholder="Masukkan kembali email baru kamu..."
                            className="p-2 rounded appearance-none border-[1px] border-[#000] mt-2"
                        />
                        {errors.email_confirmation && (
                            <div className="font-monda text-[#C70039]">
                                {errors.email_confirmation}
                            </div>
                        )}
                    </div>

                    <div className="mt-3">
                        <button
                            type="submit"
                            className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200"
                        >
                            Ubah Email
                        </button>
                    </div>
                </form>

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
        </Index>
    );
}

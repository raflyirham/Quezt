import React from "react";
import Index from "./Index";

import { usePage } from "@inertiajs/react";

export default function ChangeName({ user }) {
    const { errors } = usePage().props;

    return (
        <Index>
            <div className="w-[70%] shadow-lg p-8">
                <h2 className="font-monda font-bold text-xl text-[#C70039]">
                    Ubah Nama
                </h2>

                <div className="mt-3">
                    <h3 className="font-monda font-bold text-lg text-[#C70039]">
                        Nama Saat Ini:
                    </h3>
                    <p className="font-monda uppercase">{user.UserName}</p>
                </div>

                <form action="change-name" method="POST">
                    <input
                        type="hidden"
                        name="_token"
                        value={usePage().props.csrf_token.csrf_token}
                    />

                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="name"
                            className="font-monda font-bold text-lg text-[#C70039]"
                        >
                            Nama Baru:
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Masukkan nama baru kamu..."
                            className="p-2 rounded appearance-none border-[1px] border-[#000] mt-2"
                        />
                        {errors.name && (
                            <div className="font-monda text-[#C70039]">
                                {errors.name}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="name_confirmation"
                            className="font-monda font-bold text-lg text-[#C70039]"
                        >
                            Konfirmasi Nama Baru:
                        </label>

                        <input
                            id="name_confirmation"
                            name="name_confirmation"
                            type="text"
                            required
                            placeholder="Masukkan kembali nama baru kamu..."
                            className="p-2 rounded appearance-none border-[1px] border-[#000] mt-2"
                        />
                        {errors.name_confirmation && (
                            <div className="font-monda text-[#C70039]">
                                {errors.name_confirmation}
                            </div>
                        )}
                    </div>

                    <div className="mt-3">
                        <button
                            type="submit"
                            className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200"
                        >
                            Ubah Nama
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

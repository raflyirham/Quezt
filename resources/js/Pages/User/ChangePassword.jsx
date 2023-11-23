import React from "react";
import Index from "./Index";

import { usePage } from "@inertiajs/react";

export default function ChangePassword() {
    const { errors } = usePage().props;

    return (
        <Index>
            <div className="w-[70%] shadow-lg p-8 max-lg:w-full">
                <h2 className="font-monda font-bold text-xl text-[#C70039]">
                    Ubah Password
                </h2>

                <form action="change-password" method="POST">
                    <input
                        type="hidden"
                        name="_token"
                        value={usePage().props.csrf_token.csrf_token}
                    />

                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="new_password"
                            className="font-monda font-bold text-lg text-[#C70039]"
                        >
                            Password Lama:
                        </label>

                        <input
                            id="old_password"
                            name="old_password"
                            type="password"
                            required
                            placeholder="Masukkan password lama kamu..."
                            className="p-2 rounded appearance-none border-[1px] border-[#000] mt-2"
                        />
                        {errors.old_password && (
                            <div className="font-monda text-[#C70039]">
                                {errors.old_password}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="new_password"
                            className="font-monda font-bold text-lg text-[#C70039]"
                        >
                            Password Baru:
                        </label>

                        <input
                            id="new_password"
                            name="new_password"
                            type="password"
                            required
                            placeholder="Masukkan password baru kamu..."
                            className="p-2 rounded appearance-none border-[1px] border-[#000] mt-2"
                        />
                        {errors.new_password && (
                            <div className="font-monda text-[#C70039]">
                                {errors.new_password}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="new_password_confirmation"
                            className="font-monda font-bold text-lg text-[#C70039]"
                        >
                            Konfirmasi Password Baru:
                        </label>

                        <input
                            id="new_password_confirmation"
                            name="new_password_confirmation"
                            type="password"
                            required
                            placeholder="Masukkan kembali password baru kamu..."
                            className="p-2 rounded appearance-none border-[1px] border-[#000] mt-2"
                        />
                        {errors.new_password_confirmation && (
                            <div className="font-monda text-[#C70039]">
                                {errors.new_password_confirmation}
                            </div>
                        )}
                    </div>

                    <div className="mt-3">
                        <button
                            type="submit"
                            className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200"
                        >
                            Ubah Password
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

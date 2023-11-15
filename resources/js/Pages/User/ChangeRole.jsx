import React from "react";
import Index from "./Index";

import { usePage } from "@inertiajs/react";

export default function ChangeName({ user }) {
    const { errors } = usePage().props;

    return (
        <Index>
            <div className="w-[70%] shadow-lg p-8">
                <h2 className="font-monda font-bold text-xl text-[#C70039]">
                    Ubah Role
                </h2>

                <div className="mt-3">
                    <h3 className="font-monda font-bold text-lg text-[#C70039]">
                        Role Saat Ini:
                    </h3>
                    <p className="font-monda">{user.role.RoleName}</p>
                </div>

                <form action="change-role" method="POST">
                    <input
                        type="hidden"
                        name="_token"
                        value={usePage().props.csrf_token.csrf_token}
                    />

                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="role"
                            className="font-monda font-bold text-lg text-[#C70039]"
                        >
                            Pilih Role:
                        </label>

                        <select
                            name="role"
                            id="role"
                            className="p-2 border-[2px] rounded mt-1"
                        >
                            {user.userroles.map((role, index) => (
                                <option value={role.role.RoleName}>
                                    {role.role.RoleName}
                                </option>
                            ))}
                        </select>
                        {errors.role && (
                            <div className="font-monda text-[#C70039]">
                                {errors.role}
                            </div>
                        )}
                    </div>

                    <div className="mt-3">
                        <button
                            type="submit"
                            className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200"
                        >
                            Ubah Role
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

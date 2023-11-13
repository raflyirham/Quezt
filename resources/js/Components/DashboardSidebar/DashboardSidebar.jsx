import React from "react";
import { Link } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";

export default function DashboardSidebar() {
    return (
        <div>
            <h2 className="font-monda font-bold text-lg text-[#C70039]">
                Akun
            </h2>

            <div className="flex flex-col mt-2 gap-y-1">
                <Link href="/dashboard/detail">
                    {usePage().props.uri.uri.includes("dashboard/detail") ? (
                        <p className="font-monda text-base p-2 bg-[#98042e] text-white rounded duration-300 w-full border-b-[1px] border-[#C70039]">
                            Detail Akun
                        </p>
                    ) : (
                        <p className="font-monda text-base p-2 hover:bg-[#C70039] hover:text-white hover:rounded duration-300 w-full border-b-[1px] border-[#C70039]">
                            Detail Akun
                        </p>
                    )}
                </Link>

                <Link href="/dashboard/change-email">
                    {usePage().props.uri.uri.includes(
                        "dashboard/change-email"
                    ) ? (
                        <p className="font-monda text-base p-2 bg-[#98042e] text-white rounded duration-300 w-full border-b-[1px] border-[#C70039]">
                            Ubah Email
                        </p>
                    ) : (
                        <p className="font-monda text-base p-2 hover:bg-[#C70039] hover:text-white hover:rounded duration-300 w-full border-b-[1px] border-[#C70039]">
                            Ubah Email
                        </p>
                    )}
                </Link>

                <Link href="/dashboard/change-password">
                    {usePage().props.uri.uri.includes(
                        "dashboard/change-password"
                    ) ? (
                        <p className="font-monda text-base p-2 bg-[#98042e] text-white rounded duration-300 w-full border-b-[1px] border-[#C70039]">
                            Ubah Password
                        </p>
                    ) : (
                        <p className="font-monda text-base p-2 hover:bg-[#C70039] hover:text-white hover:rounded duration-300 w-full border-b-[1px] border-[#C70039]">
                            Ubah Password
                        </p>
                    )}
                </Link>

                <Link href="/dashboard/change-name">
                    {usePage().props.uri.uri.includes(
                        "dashboard/change-name"
                    ) ? (
                        <p className="font-monda text-base p-2 bg-[#98042e] text-white rounded duration-300 w-full border-b-[1px] border-[#C70039]">
                            Ubah Nama
                        </p>
                    ) : (
                        <p className="font-monda text-base p-2 hover:bg-[#C70039] hover:text-white hover:rounded duration-300 w-full border-b-[1px] border-[#C70039]">
                            Ubah Nama
                        </p>
                    )}
                </Link>
            </div>
        </div>
    );
}

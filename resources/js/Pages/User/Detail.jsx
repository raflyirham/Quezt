import React from "react";
import Index from "./Index";
import { Head, Link } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";

export default function Detail() {
    return (
        <Index>
            <div className="w-[70%] shadow-lg p-8">
                <h2 className="font-monda font-bold text-xl text-[#C70039]">
                    Detail Akun
                </h2>

                <div className="mt-3">
                    <h3 className="font-monda font-bold text-lg text-[#C70039]">
                        Nama:
                    </h3>
                    <p className="font-monda uppercase">
                        {usePage().props.user.user.UserName}
                    </p>
                </div>

                <div className="mt-3">
                    <h3 className="font-monda font-bold text-lg text-[#C70039]">
                        Email:
                    </h3>
                    <p className="font-monda">
                        {usePage().props.user.user.email}
                    </p>
                </div>

                <div className="mt-3">
                    <h3 className="font-monda font-bold text-lg text-[#C70039]">
                        Username:
                    </h3>
                    <p className="font-monda">
                        {usePage().props.user.user.UserUsername}
                    </p>
                </div>
            </div>
        </Index>
    );
}

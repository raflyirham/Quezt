import React from 'react'
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function ProfileNavbar({ user }) {
    return (
        <div className="tw-grid tw-grid-cols-2 tw-gap-x-0 tw-text-center tw-font-monda tw-font-bold tw-text-[#C70039]">
            {usePage().url.includes(`/profile/${user.UserUsername}/pertanyaan`) ? (
                <Link className="tw-border-[1px] tw-border-[#C70039] tw-p-1 tw-bg-[#98042e] tw-text-white tw-duration-300" href={`/profile/${user.UserUsername}/pertanyaan`}>
                    Pertanyaan
                </Link>
            ) : (
                <Link className="tw-border-[1px] tw-border-[#C70039] tw-p-1 hover:tw-bg-[#C70039] hover:tw-text-white tw-duration-300" href={`/profile/${user.UserUsername}/pertanyaan`}>
                    Pertanyaan
                </Link>
            )}

            {usePage().url.includes(`/profile/${user.UserUsername}/jawaban`) ? (
                <Link className="tw-border-[1px] tw-border-[#C70039] tw-p-1 tw-bg-[#98042e] tw-text-white tw-duration-300" href={`/profile/${user.UserUsername}/jawaban`}>
                    Jawaban
                </Link>
            ) : (
                <Link className="tw-border-[1px] tw-border-[#C70039] tw-p-1 hover:tw-bg-[#C70039] hover:tw-text-white tw-duration-300" href={`/profile/${user.UserUsername}/jawaban`}>
                    Jawaban
                </Link>
            )}

            {/* {usePage().url.includes(`/profile/${user.UserUsername}/komentar`) ? (
                <Link className="tw-border-[1px] tw-border-[#C70039] tw-p-1 tw-bg-[#98042e] tw-text-white tw-duration-300" href={`/profile/${user.UserUsername}/komentar`}>
                    Komentar
                </Link>
            ) : (
                <Link className="tw-border-[1px] tw-border-[#C70039] tw-p-1 hover:tw-bg-[#C70039] hover:tw-text-white tw-duration-300" href={`/profile/${user.UserUsername}/komentar`}>
                    Komentar
                </Link>
            )} */}

        </div>
    )
}

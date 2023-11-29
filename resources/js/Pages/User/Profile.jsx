import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

export default function Profile({ user }) {
    console.log(user);

    return (
        <>
            <Head title={`Profile Akun ${user.UserName} | Quezt`} />

            <Navbar />

            <div className="min-h-screen p-4 max-lg:pb-16">
                <div className="mt-[120px]">
                    <h2 className="font-monda font-bold text-2xl text-[#000]">
                        Profile Akun
                    </h2>

                    <h1 className="font-monda font-bold text-4xl text-[#C70039]">
                        {user.UserUsername}
                    </h1>
                </div>

                <div className="flex flex-row mt-6 gap-x-6">
                    <div className="flex flex-col justify-center items-center w-[30%] shadow-lg p-4 h-fit">
                        <p className="font-monda font-bold text-xl text-[#C70039]">
                            {user.UserName}
                        </p>

                        <div className="flex flex-row gap-1 flex-wrap">
                            {user.userroles
                                .filter((role) => role.role.RoleName !== "User")
                                .map((userrole) => (
                                    <div className="bg-[#C70039] text-white font-medium text-sm px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 mt-4 select-none">
                                        <p>{userrole.role.RoleName}</p>
                                    </div>
                                ))}

                            <div className="bg-[#C70039] text-white font-medium text-sm px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200 mt-4 select-none">
                                <p>
                                    {
                                        user.membership.membershiptype
                                            .MembershipTypeName
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-[70%] px-4 h-fit">
                        <div className="grid grid-cols-3 gap-x-0 text-center font-monda font-bold text-[#bb073a]">
                            <div className="border-[1px] border-[#bb073a] p-1">
                                Pertanyaan
                            </div>
                            <div className="border-[1px] border-[#bb073a] p-1">
                                Komentar
                            </div>
                            <div className="border-[1px] border-[#bb073a] p-1">
                                Jawaban
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

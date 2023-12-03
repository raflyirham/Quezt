import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import ProfileNavbar from "../../../Components/ProfileNavbar/ProfileNavbar";

export default function Index({ user, children }) {

    return (
        <>
            <Head title={`Profile Akun ${user.UserName} | Quezt`} />

            <Navbar />

            <div className="tw-min-h-screen tw-p-4 max-lg:tw-pb-16">
                <div className="tw-mt-[120px]">
                    <h2 className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#000]">
                        Profile Akun
                    </h2>

                    <h1 className="tw-font-monda tw-font-bold tw-text-4xl tw-text-[#C70039]">
                        {user.UserUsername}
                    </h1>
                </div>

                <div className="tw-flex tw-flex-row tw-mt-6 tw-gap-x-6 max-lg:tw-flex-col">
                    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-[30%] tw-shadow-lg tw-p-4 tw-h-fit max-lg:tw-w-[100%] max-lg:tw-mb-8">
                        <div className="mb-3">
                            <img
                                src={user.UserAvatar}
                                alt="Avatar"
                                className="tw-w-[150px] tw-h-[150px] tw-rounded-full"
                            />
                        </div>
                        <p className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                            {user.UserName}
                        </p>

                        <div className="tw-flex tw-flex-row tw-gap-1 tw-flex-wrap">
                            {user.userroles
                                .filter((role) => role.role.RoleName !== "User")
                                .map((userrole, index) => (
                                    <div key={index} className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-sm tw-px-4 tw-py-1 tw-rounded-md tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] tw-active:bg-[#bb073a] tw-duration-200 tw-mt-4 tw-select-none">
                                        <p>{userrole.role.RoleName}</p>
                                    </div>
                                ))}

                            <div className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-sm tw-px-4 tw-py-1 tw-rounded-md tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] tw-active:bg-[#bb073a] tw-duration-200 tw-mt-4 tw-select-none">
                                <p>
                                    {
                                        user.membership.membershiptype
                                            .MembershipTypeName
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="tw-flex tw-flex-col tw-w-[70%] tw-px-4 tw-h-fit max-lg:tw-w-[100%]">
                        <ProfileNavbar user={user} />

                        {children}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

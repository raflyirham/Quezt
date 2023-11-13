import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import DashboardSidebar from "@/Components/DashboardSidebar/DashboardSidebar";

export default function Index({ children }) {
    return (
        <>
            <Head title="Dashboard | Quezt" />

            <Navbar />

            <div className="min-h-screen p-4">
                <div className="mt-[120px]">
                    <h1 className="font-monda font-bold text-2xl text-[#C70039]">
                        Dashboard
                    </h1>
                </div>

                <div className="flex flex-row mt-6 gap-x-6">
                    <div className="w-[30%] shadow-lg p-4 h-fit">
                        <DashboardSidebar />
                    </div>

                    {children}
                </div>
            </div>

            <Footer />
        </>
    );
}

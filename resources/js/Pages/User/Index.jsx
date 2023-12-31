import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import DashboardSidebar from "@/Components/DashboardSidebar/DashboardSidebar";

export default function Index({ children }) {
  return (
    <>
      <Head title="Pengaturan | Quezt" />

      <Navbar />

      <div className="tw-min-h-screen tw-p-4 max-lg:tw-pb-16">
        <div className="tw-mt-[120px]">
          <h1 className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#C70039]">
            Dashboard
          </h1>
        </div>

        <div className="tw-flex tw-flex-row tw-mt-6 tw-gap-x-6 max-lg:tw-flex-col">
          <div className="tw-w-[30%] tw-shadow-lg tw-p-4 tw-h-fit max-lg:tw-w-[100%] max-lg:tw-mb-8">
            <DashboardSidebar />
          </div>

          {children}
        </div>
      </div>

      <Footer />
    </>
  );
}

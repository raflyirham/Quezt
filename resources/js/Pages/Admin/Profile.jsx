import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";

export default function Index() {
  return (
    <>
      <Head title="Profile Dashboard | Quezt" />

      <main className="">
        <div className="d-flex flex-row justify-content-between align-items-start tw-mt-14">
          <AdminSidebar />
          <div className="tw-py-4 tw-px-8 tw-min-h-screen w-full flex-fill">
            <div>
              <h1 className="tw-font-jacques tw-font-bold tw-text-5xl tw-text-[#C70039]">
                Profile
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";

export default function Index({ users, courses, majors, questions }) {
  console.log(users, courses, majors, questions);
  return (
    <>
      <Head title="Admin Dashboard | Quezt" />

      <main className="">
        <div className="d-flex flex-row justify-content-between align-items-start tw-mt-14">
          <AdminSidebar />
          <div className="tw-py-4 tw-px-8 tw-min-h-screen w-full flex-fill">
            <div>
              <h1 className="tw-font-jacques tw-font-bold tw-text-5xl tw-text-[#C70039]">
                Administrator Dashboard
              </h1>
            </div>

            <div className="container mt-4">
              <div className="row row-cols-2 gy-5">
                <div className="col border p-4">
                  <h2 className="tw-text-xl tw-font-semibold">
                    Jumlah Pengguna
                  </h2>
                  <p className="tw-text-lg tw-font-medium">{users}</p>
                </div>

                <div className="col border p-4">
                  <h2 className="tw-text-xl tw-font-semibold">
                    Jumlah Mata Kuliah
                  </h2>
                  <p className="tw-text-lg tw-font-medium">{courses}</p>
                </div>

                <div className="col border p-4">
                  <h2 className="tw-text-xl tw-font-semibold">
                    Jumlah Jurusan
                  </h2>
                  <p className="tw-text-lg tw-font-medium">{majors}</p>
                </div>

                <div className="col border p-4">
                  <h2 className="tw-text-xl tw-font-semibold">
                    Jumlah Pertanyaan
                  </h2>
                  <p className="tw-text-lg tw-font-medium">{questions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

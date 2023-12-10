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
              <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
                Administrator Dashboard
              </h1>
            </div>

            <div className="container mt-4">
              <div className="row row-cols-2 gy-5">
                <div className="col border p-4">
                  <h2>Jumlah Pengguna</h2>
                  <p>{users}</p>
                </div>

                <div className="col border p-4">
                  <h2>Jumlah Mata Kuliah</h2>
                  {courses}
                </div>

                <div className="col border p-4">
                  <h2>Jumlah Jurusan</h2>
                  {majors}
                </div>

                <div className="col border p-4">
                  <h2>Jumlah Pertanyaan</h2>
                  {questions}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

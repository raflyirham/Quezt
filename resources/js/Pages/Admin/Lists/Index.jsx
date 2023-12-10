import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import TableMajors from "../../../Components/Admin/TableMajors";
import TableCourses from "../../../Components/Admin/TableCourses";

export default function Index() {
  const major = usePage().props.majors;
  const course = usePage().props.courses;
  return (
    <>
      <Head title="Course Dashboard | Quezt" />

      <main className="">
        <div className="d-flex flex-row justify-content-between align-items-start tw-mt-16 lg:tw-divide-x-2 tw-divide-[#C70039]">
          <AdminSidebar />
          <div>
            <TableMajors />
            <TableCourses />
          </div>
        </div>
      </main>
    </>
  );
}

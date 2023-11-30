import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MataKuliah from "../../Components/MataKuliahCard/MataKuliahCard";
import Pagination from "../../Components/Pagination/Pagination";

export default function Index({ major, courses }) {
  return (
    <>
      <Head title={`Jurusan ${major.MajorName} | Quezt`} />

      <Navbar />

      <div className="tw-p-4 tw-mt-40 tw-min-h-screen">
        <div>
          <p className="tw-font-monda tw-font-bold tw-text-xl">Jurusan</p>
          <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
            {major.MajorName}
          </h1>

          <p className="tw-font-monda tw-text-lg tw-mt-3">
            {major.MajorDescription}
          </p>
        </div>

        <div className="tw-mt-10">
          <h2 className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#C70039]">
            Mata Kuliah
          </h2>

          <p className="tw-font-monda">{`Terdapat ${courses.total} mata kuliah pada jurusan ini.`}</p>
        </div>

        <div className="tw-mt-6 tw-grid tw-grid-cols-3 tw-gap-3 tw-max-lg:tw-grid-cols-1">
          {courses.total == 0 ? (
            <p className="tw-font-monda">Tidak ada mata kuliah.</p>
          ) : (
            <>
              {courses.data.map((course) => (
                <MataKuliah
                  mata_kuliah={course.CourseName}
                  deskripsi={course.CourseDescription}
                  slug={course.CourseSlug}
                  key={course.CourseID}
                />
              ))}
            </>
          )}
        </div>

        <Pagination links={courses.links} />
      </div>

      <Footer />
    </>
  );
}

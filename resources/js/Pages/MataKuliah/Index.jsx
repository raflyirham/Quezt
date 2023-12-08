import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import JurusanCard from "../../Components/JurusanCard/JurusanCard";
import Pagination from "../../Components/Pagination/Pagination";
import MataKuliah from "../../Components/MataKuliahCard/MataKuliahCard";

export default function Index({ courses }) {
  return (
    <>
      <Head title="Mata Kuliah | Quezt" />

      <Navbar />

      <div className="tw-p-4 tw-mt-40 tw-min-h-screen">
        <div>
          <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
            Mata Kuliah
          </h1>
        </div>

        <div className="tw-mt-6 tw-grid tw-grid-cols-3 tw-gap-3 max-lg:tw-grid-cols-1">
          {courses.length == 0 ? (
            <p className="tw-font-monda">Tidak ada data mata kuliah.</p>
          ) : (
            <>
              {courses.data.map((course) => (
                <MataKuliah
                  key={course.CourseID}
                  mata_kuliah={course.CourseName}
                  deskripsi={course.CourseDescription}
                  slug={course.CourseSlug}
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

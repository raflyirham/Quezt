import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import JurusanCard from "../../Components/JurusanCard/JurusanCard";
import Pagination from "../../Components/Pagination/Pagination";

export default function Index() {
  const majors = usePage().props.majors;

  return (
    <>
      <Head title="Jurusan | Quezt" />

      <Navbar />

      <div className="tw-p-4 tw-mt-40 tw-min-h-screen">
        <div>
          <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
            Jurusan
          </h1>
        </div>

        <div className="tw-mt-6 tw-grid tw-grid-cols-3 tw-gap-3 tw-max-lg:grid-cols-1">
          {majors.total == 0 ? (
            <p className="tw-font-monda">Tidak ada data jurusan.</p>
          ) : (
            <>
              {majors.data.map((major) => (
                <JurusanCard
                  key={major.MajorID}
                  jurusan={major.MajorName}
                  deskripsi={major.MajorDescription}
                  slug={major.MajorSlug}
                />
              ))}
            </>
          )}
        </div>

        <Pagination links={majors.links} />
      </div>

      <Footer />
    </>
  );
}

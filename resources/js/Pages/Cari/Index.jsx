import React, { useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PertanyaanCard from "../../Components/PertanyaanCard/PertanyaanCard";
import Pagination from "../../Components/Pagination/Pagination";

export default function Index({ questions, materi }) {
  const cariLink = (links) => {
    for (let i = 1; i < links.length - 1; i++) {
      if (!links[i].url.includes("&materi=" + materi)) {
        links[i].url += "&materi=" + materi;
      }
    }
  };

  cariLink(questions.links);

  return (
    <>
      <Head title="Hasil Pencarian | Quezt" />

      <Navbar />

      <div className="tw-p-4 tw-mt-40 tw-min-h-screen">
        <div>
          <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
            Hasil Pencarian
          </h1>
        </div>

        <div className="tw-mt-6 tw-grid tw-grid-cols-3 tw-gap-3">
          {questions.total == 0 ? (
            <p className="tw-font-monda">
              Tidak ada materi ditemukan.
            </p>
          ) : (
            <>
              {questions.data.map((question) => (
                <PertanyaanCard
                  key={question.QuestionID}
                  id={question.QuestionID}
                  pertanyaan={question.QuestionTitle}
                  user={question.questionheader.user.UserName}
                />
              ))}
            </>
          )}
        </div>

        <Pagination links={questions.links} />
      </div>

      <Footer />
    </>
  );
}

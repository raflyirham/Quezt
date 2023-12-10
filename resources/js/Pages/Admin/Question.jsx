import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import Pagination from "@/Components/Pagination/Pagination";

import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";

export default function Question({ questions }) {
  const { errors } = usePage().props;

  return (
    <>
      <Head title="Admin Dashboard | Pertanyaan | Quezt" />

      <main className="">
        <div className="d-flex flex-row justify-content-between align-items-start tw-mt-14">
          <AdminSidebar />
          <div className="tw-py-4 tw-px-8 tw-min-h-screen w-full flex-fill">
            <div className="d-flex flex-column gap-4 justify-content-start align-items-start">
              <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
                List Pertanyaan
              </h1>

              {usePage().props.flash.success && (
                <div
                  class="alert alert-success alert-dismissible fade show"
                  role="alert">
                  {usePage().props.flash.success}
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"></button>
                </div>
              )}
              {usePage().props.flash.error && (
                <div className="alert alert-danger">
                  {usePage().props.flash.error}
                </div>
              )}

              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      ID
                    </td>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      Judul Pertanyaan
                    </td>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      Detail Pertanyaan
                    </td>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      Mata Kuliah
                    </td>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      Hapus
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {questions.data.map((question, index) => (
                    <tr className="" key={index}>
                      <td className="tw-p-2 tw-text-center">
                        {question.QuestionID}
                      </td>
                      <td className="tw-p-2">
                        {question.questiondetail.QuestionTitle}
                      </td>
                      <td className="tw-p-2">
                        {question.questiondetail.QuestionDetail}
                      </td>
                      <td className="tw-p-2">{question.course.CourseName}</td>
                      <td className="tw-p-2 tw-px-4 tw-text-center">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target={`#staticBackdrop${question.QuestionID}`}>
                          Hapus
                        </button>
                        <div
                          className="modal fade"
                          id={`staticBackdrop${question.QuestionID}`}
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          tabIndex="-1"
                          aria-labelledby={`staticBackdropLabel${question.QuestionID}`}
                          aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5"
                                  id={`staticBackdropLabel${question.QuestionID}`}>
                                  Hapus Pertanyaan
                                </h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <form
                                  action={`/admin/pertanyaan/delete/${question.QuestionID}`}
                                  method="POST">
                                  <input
                                    type="hidden"
                                    name="_token"
                                    value={
                                      usePage().props.csrf_token.csrf_token
                                    }
                                  />

                                  <div className="mb-3">
                                    <p className="tw-font-monda">{`Apakah kamu yakin ingin menghapus pertanyaan "${question.questiondetail.QuestionTitle}"?`}</p>
                                  </div>

                                  <div className="d-flex gap-1">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal">
                                      Batal
                                    </button>
                                    <button
                                      type="submit"
                                      className="btn btn-danger">
                                      Hapus
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination links={questions.links} />
          </div>
        </div>
      </main>
    </>
  );
}

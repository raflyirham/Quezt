import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import Pagination from "@/Components/Pagination/Pagination";

import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";

export default function Major({ majors }) {
  const { errors } = usePage().props;

  return (
    <>
      <Head title="Admin Dashboard | Jurusan | Quezt" />

      <main className="">
        <div className="d-flex flex-row justify-content-between align-items-start tw-mt-14">
          <AdminSidebar />
          <div className="tw-py-4 tw-px-8 tw-min-h-screen w-full flex-fill">
            <div className="d-flex flex-column gap-4 justify-content-start align-items-start">
              <h1 className="tw-font-jacques tw-font-bold tw-text-5xl tw-text-[#C70039]">
                List Jurusan
              </h1>

              <button
                type="button"
                className="tw-rounded-full tw-flex tw-justify-items-center tw-gap-2 tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-2 tw-font-monda tw-w-fit tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                <span className="material-symbols-rounded">add</span> Tambah
                Jurusan
              </button>
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        Tambah Jurusan Baru
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form action="/admin/jurusan/add" method="POST">
                        <input
                          type="hidden"
                          name="_token"
                          value={usePage().props.csrf_token.csrf_token}
                        />

                        <div className="mb-3">
                          <label htmlFor="major_name" className="form-label">
                            Nama Jurusan
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="major_name"
                            name="major_name"
                            aria-describedby="nameHelp"
                            required
                          />
                          {errors["major_name"] && (
                            <div className="tw-font-monda tw-text-[#C70039]">
                              {errors["major_name"]}
                            </div>
                          )}
                          <div id="nameHelp" className="form-text">
                            Masukkan nama jurusan.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="major_description"
                            className="form-label">
                            Deskripsi
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="major_description"
                            name="major_description"
                            aria-describedby="descHelp"
                            required
                          />
                          {errors["major_description"] && (
                            <div className="tw-font-monda tw-text-[#C70039]">
                              {errors["major_description"]}
                            </div>
                          )}
                          <div id="descHelp" className="form-text">
                            Masukkan deskripsi singkat mengenai jurusan.
                          </div>
                        </div>

                        <div className="d-flex gap-1">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">
                            Batal
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Tambah
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

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
                      Nama Jurusan
                    </td>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      Deskripsi
                    </td>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      Jumlah Mata Kuliah
                    </td>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      Hapus
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {majors.data.map((major, index) => (
                    <tr className="" key={index}>
                      <td className="tw-p-2 tw-text-center">{major.MajorID}</td>
                      <td className="tw-p-2">{major.MajorName}</td>
                      <td className="tw-p-2">{major.MajorDescription}</td>
                      <td className="tw-p-2">{major.courses.length}</td>
                      <td className="tw-p-2 tw-px-4 tw-text-center">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target={`#staticBackdrop${major.MajorID}`}>
                          Hapus
                        </button>
                        <div
                          className="modal fade"
                          id={`staticBackdrop${major.MajorID}`}
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          tabIndex="-1"
                          aria-labelledby={`staticBackdropLabel${major.MajorID}`}
                          aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5"
                                  id={`staticBackdropLabel${major.MajorID}`}>
                                  Hapus Jurusan
                                </h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <form
                                  action={`/admin/jurusan/delete/${major.MajorID}`}
                                  method="POST">
                                  <input
                                    type="hidden"
                                    name="_token"
                                    value={
                                      usePage().props.csrf_token.csrf_token
                                    }
                                  />

                                  <div className="mb-3">
                                    <p className="tw-font-monda">{`Apakah kamu yakin ingin menghapus jurusan ${major.MajorName}?`}</p>
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

            <Pagination links={majors.links} />
          </div>
        </div>
      </main>
    </>
  );
}

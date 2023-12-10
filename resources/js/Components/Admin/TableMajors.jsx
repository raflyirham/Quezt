import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Index() {
  const major = usePage().props.majors;
  return (
    <>
      <Head title="Course Dashboard | Quezt" />

        <div
          id="content"
          className="tw-py-4 tw-px-8 tw-min-h-screen w-full flex-fill">
          <div className="d-flex flex-column gap-5 justify-content-start align-items-start">
            <h1 className="tw-font-jacques tw-font-bold tw-text-7xl tw-text-[#C70039]">
              Majors List
            </h1>
            <table className="tw-w-full tw-h-auto tw-border-2 tw-border-black">
              <thead className="tw-divide-y-2 tw-divide-black">
                <tr className="tw-bg-[#C70039] tw-divide-x-2 tw-divide-white">
                  <td className="tw-py-4 tw-px-2 tw-font-bold tw-text-center tw-text-xl tw-text-white ">
                    No
                  </td>
                  <td className="tw-py-4 tw-px-2 tw-font-bold tw-text-center tw-text-xl tw-text-white ">
                    Majors
                  </td>
                  <td className="tw-py-4 tw-px-2 tw-font-bold tw-text-center tw-text-xl tw-text-white ">
                    Description
                  </td>
                  <td className="tw-py-4 tw-px-2 tw-font-bold tw-text-center tw-text-xl tw-text-white ">
                    Delete
                  </td>
                </tr>
              </thead>
              <tbody className="tw-divide-y-2 tw-divide-black">
                {major.map((item) => (
                  <tr
                    className="tw-divide-x-2 tw-divide-black"
                    key={item.MajorID}>
                    <td className="tw-p-2 tw-text-center">{item.MajorID}</td>
                    <td className="tw-p-2 ">{item.MajorName}</td>
                    <td className="tw-p-2 ">{item.MajorDescription}</td>
                    <td className="tw-p-2 tw-px-4 tw-text-center ">
                      <button className="tw-px-6 tw-py-2 tw-font-semibold tw-rounded-full tw-border-2 tw-border-[#C70039] hover:tw-bg-[#C70039] hover:tw-text-white active:tw-bg-[#bb073a] tw-ease-out tw-duration-200">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              className="tw-px-10 tw-py-3 tw-rounded-full tw-flex tw-justify-items-center tw-font-bold tw-gap-2 tw-border-4 tw-border-[#C70039] tw-bg-white hover:tw-bg-[#C70039] hover:tw-text-white tw-ease-out tw-duration-200 active:tw-bg-[#bb073a]"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop">
              <span className="material-symbols-rounded">add</span> Add Major
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
                      Add New Course
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form action="/submit" method="POST">
                      <div className="mb-3">
                        <label htmlFor="courseName" className="form-label">
                          Major Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="courseName"
                          aria-describedby="nameHelp"
                        />
                        <div id="nameHelp" className="form-text">
                          Input the name of the Major.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="courseDesc" className="form-label">
                          Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="courseDesc"
                          aria-describedby="descHelp"
                        />
                        <div id="descHelp" className="form-text">
                          Input short description about the Major.
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="tw-px-6 tw-py-2 tw-rounded-lg tw-bg-transparent tw-text-[#C70039] tw-font-medium tw-text-base tw-ml-4 tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-bg-white hover:tw-border-[#d50a43] active:tw-border-[#bb073a] active:tw-bg-gray-300"
                      data-bs-dismiss="modal">
                      Close
                    </button>
                    <button
                      type="submit"
                      className="tw-px-6 tw-py-2 tw-rounded-lg tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-ml-4 tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

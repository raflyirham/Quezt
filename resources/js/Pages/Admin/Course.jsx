import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar";

export default function Index() {
  const course = usePage().props.majors;
  return (
    <>
      <Head title="Course Dashboard | Quezt" />

      <main className="">
        <div className="d-flex flex-row justify-content-between align-items-start tw-mt-14">
          <AdminSidebar />
          <div className="tw-py-4 tw-px-8 tw-min-h-screen w-full flex-fill">

            <div className="d-flex flex-column gap-5 justify-content-start align-items-start">
              <h1 className="tw-font-jacques tw-font-bold tw-text-7xl tw-text-[#C70039]">
                Course List
              </h1>
              <table className="tw-w-full tw-h-auto tw-border-solid">
                <thead>
                  <tr>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      No
                    </td>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      Course
                    </td>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      Description
                    </td>
                    <td className="tw-py-4 tw-font-bold tw-text-center tw-text-xl">
                      Delete
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {course.map((item) => (
                    <tr className="">
                      <td className="tw-p-2 tw-text-center" key={item.MajorID}>
                        {item.MajorID}
                      </td>
                      <td className="tw-p-2">{item.MajorName}</td>
                      <td className="tw-p-2">{item.MajorDescription}</td>
                      <td className="tw-p-2 tw-px-4 tw-text-center"><button className="tw-px-6 tw-py-2 tw-rounded-full">Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="button" className="tw-px-10 tw-py-3 tw-rounded-full tw-flex tw-justify-items-center tw-gap-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <span className="material-symbols-rounded">
                  add
                </span> Add Course
              </button>
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Add New Course</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                      <form action="/submit" method="POST">
                        <div className="mb-3">
                          <label htmlFor="courseName" className="form-label">Course Name</label>
                          <input type="text" className="form-control" id="courseName" aria-describedby="nameHelp" />
                          <div id="nameHelp" className="form-text">Input the name of the course.</div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="courseDesc" className="form-label">Description</label>
                          <input type="text" className="form-control" id="courseDesc" aria-describedby="descHelp" />
                          <div id="descHelp" className="form-text">Input short description about the course.</div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary" >Add</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}

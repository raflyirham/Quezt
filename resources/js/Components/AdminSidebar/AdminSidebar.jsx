import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AdminSidebar() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="w-auto tw-h-16 tw-z-10 tw-bg-white fixed-top tw-py-2 tw-px-4 d-flex flex-row justify-content-between align-items-center">
        <i
          className="fa-solid fa-bars fa-2xl w-auto h-auto"
          onClick={showSidebar}></i>
      </div>
      <nav
        className={
          "tw-h-full lg:tw-h-fit tw-w-1/3 lg:tw-w-auto tw-p-2 nav flex-column tw-duration-300 tw-transition-all tw-fixed lg:tw-sticky tw-top-16 tw-bg-white tw-shadom-sm lg:tw-shadow-none " +
          (sidebar ? "d-block" : "d-none")
        }>
        <ul className="">
          <li className="tw-py-4 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link
              className="p-0 tw-text-left nav-link active"
              aria-current="page"
              href="/">
              Home
            </Link>
          </li>
          <li className="tw-py-4 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link
              className="p-0 tw-text-left nav-link active"
              aria-current="page"
              href="/Admin">
              Dashboard
            </Link>
          </li>
          <li className="tw-py-4 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link className="p-0 tw-text-left nav-link" href="/Admin/Course">
              Course
            </Link>
          </li>
          <li className="tw-py-4 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link className="p-0 tw-text-left nav-link" href="/Admin/Tutor">
              Tutor
            </Link>
          </li>
          <li className="tw-py-4 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link className="p-0 tw-text-left nav-link" href="/Admin/Question">
              Question
            </Link>
          </li>
          <li className="tw-py-4 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link className="p-0 tw-text-left nav-link" href="/Admin/Profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AdminSidebar() {
  const { url, component } = usePage();
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="w-auto tw-h-16 tw-z-10 tw-bg-white fixed-top tw-py-2 tw-px-4 d-flex flex-row justify-content-between align-items-center tw-shadow-sm">
        <span
          className="material-symbols-rounded tw-text-5xl tw-cursor-pointer hover:tw-text-[#C70039] active:tw-text-red-800 tw-duration-150 tw-ease-out"
          onClick={showSidebar}>
          menu
        </span>
        <h1></h1>
      </div>
      <nav
        className={
          "tw-h-full tw-w-full lg:tw-w-auto nav flex-column tw-duration-300 tw-fixed lg:tw-sticky tw-top-16 tw-bg-white tw-shadom-sm lg:tw-shadow-none max-lg:tw-border-2 tw-border-red-700 " +
          (sidebar ? "d-block" : "d-none")
        }>
        <ul className="tw-w-full">
          <li className="tw-py-6 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link
              className={
                (url === "/" ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
              }
              href="/">
              <span className="material-symbols-rounded">home</span>
              Home
            </Link>
          </li>
          <li className="tw-py-6 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link
              className={
                (url === "/Admin" ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
              }
              href="/Admin">
              <span className="material-symbols-rounded">space_dashboard</span>
              Dashboard
            </Link>
          </li>
          <li className="tw-py-6 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item tw-space-y-2">
            <Link
              className={
                (url.startsWith('/Admin/Lists') ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out tw-cursor-pointer"
              }
              href="/Admin/Lists"
              onClick={showDropdown}>
              <span className="material-symbols-rounded">school</span>
              Majors&nbsp;and&nbsp;Courses
            </Link>
            <div
              className={
                (url.startsWith("/Admin/Lists") ? "tw-block" : "tw-hidden") +
                " tw-flex tw-flex-col tw-ml-8 tw-gap-2"
              }>
              <Link
                className={
                  (url === "/Admin/Lists/Majors" ? "tw-text-red-500" : "") +
                  " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
                }
                href="/Admin/Lists/Majors">
                Majors
              </Link>
              <Link
                className={
                  (url === "/Admin/Lists/Courses" ? "tw-text-red-500" : "") +
                  " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
                }
                href="/Admin/Lists/Courses">
                Course
              </Link>
            </div>
          </li>
          <li className="tw-py-6 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link
              className={
                (url === "/Admin/Tutor" ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
              }
              href="/Admin/Tutor">
              <span className="material-symbols-rounded">groups</span>
              Tutor
            </Link>
          </li>
          <li className="tw-py-6 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link
              className={
                (url === "/Admin/Question" ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
              }
              href="/Admin/Question">
              <span className="material-symbols-rounded">quiz</span>
              Question
            </Link>
          </li>
          <li className="tw-py-6 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item ">
            <Link
              className={
                (url === "/Admin/Profile" ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
              }
              href="/Admin/Profile">
              <span className="material-symbols-rounded">account_circle</span>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

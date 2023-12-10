import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AdminSidebar() {
  const { url, component } = usePage();
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
                (url === "/admin" ? "tw-text-red-500" : "") +
                (url === "/admin/" ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
              }
              href="/admin">
              <span className="material-symbols-rounded">space_dashboard</span>
              Dashboard
            </Link>
          </li>
          <li className="tw-py-6 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item tw-space-y-2">
            <Link
              className={
                (url === "/admin/jurusan" ? "tw-text-red-500" : "") +
                (url === "/admin/jurusan/" ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out tw-cursor-pointer"
              }
              href="/admin/jurusan">
              <span className="material-symbols-rounded">school</span>
              Jurusan
            </Link>
          </li>
          <li className="tw-py-6 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item tw-space-y-2">
            <Link
              className={
                (url === "/admin/mata-kuliah" ? "tw-text-red-500" : "") +
                (url === "/admin/mata-kuliah/" ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out tw-cursor-pointer"
              }
              href="/admin/mata-kuliah">
              <span class="material-symbols-rounded">local_library</span>
              Mata&nbsp;Kuliah
            </Link>
          </li>
          <li className="tw-py-6 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link
              className={
                (url === "/admin/tutor" ? "tw-text-red-500" : "") +
                (url === "/admin/tutor/" ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
              }
              href="/admin/tutor">
              <span className="material-symbols-rounded">groups</span>
              Tutor
            </Link>
          </li>
          <li className="tw-py-6 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link
              className={
                (url === "/admin/pertanyaan" ? "tw-text-red-500" : "") +
                (url === "/admin/pertanyaan/" ? "tw-text-red-500" : "") +
                " p-0 tw-flex tw-items-center tw-justify-start gap-2 tw-text-left tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
              }
              href="/admin/pertanyaan">
              <span className="material-symbols-rounded">quiz</span>
              Question
            </Link>
          </li>
          <li className="tw-py-4 tw-px-8 lg:tw-pr-14 lg:tw-pl-4 nav-item">
            <Link
              className="p-0 tw-text-left tw-flex tw-items-center tw-justify-start gap-2 tw-font-semibold tw-text-lg hover:tw-text-red-700 tw-duration-200 tw-ease-out"
              aria-current="page"
              href="/">
              <span class="material-symbols-rounded">home</span>
              Beranda
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

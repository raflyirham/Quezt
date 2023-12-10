import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import { usePage } from "@inertiajs/react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className="tw-shadow-lg tw-flex tw-flex-row tw-p-4 tw-justify-between tw-fixed tw-top-0 tw-z-50 tw-bg-white tw-w-full">
        <div className="tw-flex tw-flex-row tw-gap-x-2 tw-items-baseline">
          <Link href="/">
            <p className="tw-font-jacques tw-font-medium tw-text-3xl tw-text-[#C70039] hover:tw-text-[#d50a43] active:tw-text-[#bb073a]">
              Quezt
            </p>
          </Link>

          {usePage().props.user_data &&
            usePage().props.user_data.RoleID === 2 && (
              <div className="tw-px-3 tw-py-1 tw-bg-[#C70039] tw-font-monda tw-text-base tw-text-white tw-rounded-full">
                <p className="">Tutor</p>
              </div>
            )}

          <div className="tw-flex tw-flex-row tw-gap-x-6 tw-justify-center tw-items-center tw-ml-4 max-lg:tw-hidden">
            <Link href="/">
              <p className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039] hover:tw-text-[#d50a43] hover:tw-underline active:tw-text-[#bb073a] tw-duration-500">
                Beranda
              </p>
            </Link>
            <Link href="/jurusan">
              <p className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039] hover:tw-text-[#d50a43] hover:tw-underline active:tw-text-[#bb073a] tw-duration-500">
                Jurusan
              </p>
            </Link>
            <Link href="/mata-kuliah">
              <p className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039] hover:tw-text-[#d50a43] hover:tw-underline active:tw-text-[#bb073a] tw-duration-500">
                Mata Kuliah
              </p>
            </Link>
            <Link href="/tutor">
              <p className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039] hover:tw-text-[#d50a43] hover:tw-underline active:tw-text-[#bb073a] tw-duration-500">
                Tutor
              </p>
            </Link>
          </div>
        </div>

        <div>
          {usePage().props.user_data ? (
            <>
              <div>
                <div className="q-dropdown tw-inline-block tw-relative">
                  <button className="tw-bg-[#C70039] tw-text-white tw-font-semibold tw-py-2 tw-px-4 tw-rounded tw-inline-flex tw-items-center">
                    <span className="tw-mr-1 tw-uppercase">
                      {usePage().props.user_data.UserName}
                    </span>
                    <svg
                      className="tw-fill-current tw-h-4 tw-w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="q-dropdown-menu tw-absolute tw-hidden tw-text-white tw-pt-1 tw-shadow-lg">
                    {usePage().props.user_data.RoleID === 3 ? (
                      <li>
                        <Link
                          className="tw-bg-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200 tw-py-2 tw-px-4 tw-block tw-whitespace-no-wrap"
                          href="/admin">
                          Dashboard
                        </Link>
                      </li>
                    ) : (
                      <></>
                    )}
                    <li>
                      <Link
                        className="tw-bg-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200 tw-py-2 tw-px-4 tw-block tw-whitespace-no-wrap"
                        href={`/profile/${
                          usePage().props.user_data.UserUsername
                        }`}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="tw-bg-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200 tw-py-2 tw-px-4 tw-block tw-whitespace-no-wrap"
                        href="/pengaturan">
                        Pengaturan
                      </Link>
                    </li>
                    <li>
                      <form action="/keluar" method="POST">
                        <input
                          type="hidden"
                          name="_token"
                          value={usePage().props.csrf_token.csrf_token}
                        />
                        <button
                          type="submit"
                          className="tw-bg-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200 tw-py-2 tw-px-4 tw-block tw-whitespace-no-wrap tw-w-full tw-text-left">
                          Keluar
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link href="/masuk">
                <button className="tw-bg-[#fff] tw-text-[#C70039] tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-ml-4 tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-border-[#d50a43] active:tw-border-[#bb073a]">
                  Masuk
                </button>
              </Link>

              <Link href="/daftar">
                <button className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-ml-4 tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200">
                  Daftar
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      <div
        className={`tw-hidden tw-fixed tw-bottom-4 tw-left-1/2 tw-translate-x-[-50%] tw-min-w-[80%] ${
          show ? "max-lg:tw-block" : "max-lg:tw-hidden"
        } tw-duration-300`}>
        <div className="tw-flex tw-flex-row tw-justify-evenly tw-items-center tw-px-6 tw-py-3 tw-bg-white tw-shadow-2xl tw-border-[1px] tw-border-[#C70039] tw-rounded-full">
          <Link
            href="/"
            className="tw-text-center tw-font-monda tw-font-bold tw-text-sm tw-text-[#C70039] hover:tw-text-[#d50a43] hover:tw-underline active:tw-text-[#bb073a] tw-duration-500">
            <i className="fa-solid fa-house fa-2xl"></i>
            <p className="tw-mt-1">Beranda</p>
          </Link>

          <Link
            href="/jurusan"
            className="tw-text-center tw-font-monda tw-font-bold tw-text-sm tw-text-[#C70039] hover:tw-text-[#d50a43] hover:tw-underline active:tw-text-[#bb073a] tw-duration-500">
            <i className="fa-solid fa-graduation-cap fa-2xl"></i>
            <p className="tw-mt-1">Jurusan</p>
          </Link>

          <Link
            href="/mata-kuliah"
            className="tw-text-center tw-font-monda tw-font-bold tw-text-sm tw-text-[#C70039] hover:tw-text-[#d50a43] hover:tw-underline active:tw-text-[#bb073a] tw-duration-500">
            <i className="fa-solid fa-book fa-2xl"></i>
            <p className="tw-mt-1">Mata Kuliah</p>
          </Link>
          <Link
            href="/tutor"
            className="tw-text-center tw-font-monda tw-font-bold tw-text-sm tw-text-[#C70039] hover:tw-text-[#d50a43] hover:tw-underline active:tw-text-[#bb073a] tw-duration-500">
            <i className="fa-solid fa-chalkboard-user fa-2xl"></i>
            <p className="tw-mt-1">Tutor</p>
          </Link>
        </div>
      </div>
    </>
  );
}

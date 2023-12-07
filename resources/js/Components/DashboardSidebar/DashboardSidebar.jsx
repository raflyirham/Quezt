import React from "react";
import { Link } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";

export default function DashboardSidebar() {
  return (
    <div>
      <div>
        <h2 className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
          Akun
        </h2>

        <div className="tw-flex tw-flex-col tw-mt-2 tw-gap-y-1">
          <Link href="/pengaturan/detail">
            {usePage().url === "/pengaturan/detail" ? (
              <p className="tw-font-monda tw-text-base tw-p-2 tw-bg-[#98042e] tw-text-white tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                Detail Akun
              </p>
            ) : (
              <p className="tw-font-monda tw-text-base tw-p-2 hover:tw-bg-[#C70039] hover:tw-text-white hover:tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                Detail Akun
              </p>
            )}
          </Link>

          <Link href="/pengaturan/ubah-email">
            {usePage().props.uri.uri.includes("pengaturan/ubah-email") ? (
              <p className="tw-font-monda tw-text-base tw-p-2 tw-bg-[#98042e] tw-text-white tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                Ubah Email
              </p>
            ) : (
              <p className="tw-font-monda tw-text-base tw-p-2 hover:tw-bg-[#C70039] hover:tw-text-white hover:tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                Ubah Email
              </p>
            )}
          </Link>

          <Link href="/pengaturan/ubah-password">
            {usePage().props.uri.uri.includes("pengaturan/ubah-password") ? (
              <p className="tw-font-monda tw-text-base tw-p-2 tw-bg-[#98042e] tw-text-white tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                Ubah Password
              </p>
            ) : (
              <p className="tw-font-monda tw-text-base tw-p-2 hover:tw-bg-[#C70039] hover:tw-text-white hover:tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                Ubah Password
              </p>
            )}
          </Link>

          <Link href="/pengaturan/ubah-nama">
            {usePage().props.uri.uri.includes("pengaturan/ubah-nama") ? (
              <p className="tw-font-monda tw-text-base tw-p-2 tw-bg-[#98042e] tw-text-white tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                Ubah Nama
              </p>
            ) : (
              <p className="tw-font-monda tw-text-base tw-p-2 hover:tw-bg-[#C70039] hover:tw-text-white hover:tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                Ubah Nama
              </p>
            )}
          </Link>

          <Link href="/pengaturan/ubah-avatar">
            {usePage().props.uri.uri.includes("pengaturan/ubah-avatar") ? (
              <p className="tw-font-monda tw-text-base tw-p-2 tw-bg-[#98042e] tw-text-white tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                Ubah Avatar
              </p>
            ) : (
              <p className="tw-font-monda tw-text-base tw-p-2 hover:tw-bg-[#C70039] hover:tw-text-white hover:tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                Ubah Avatar
              </p>
            )}
          </Link>
        </div>
      </div>

      {usePage().props.user.userroles.some((role) => role.RoleID !== 1) && (
        <>
          <div className="tw-mt-4">
            <h2 className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
              Role
            </h2>

            <div className="tw-flex tw-flex-col tw-mt-2 tw-gap-y-1">
              <Link href="/pengaturan/detail-role">
                {usePage().props.uri.uri.includes("pengaturan/detail-role") ? (
                  <p className="tw-font-monda tw-text-base tw-p-2 tw-bg-[#98042e] tw-text-white tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                    Detail Role
                  </p>
                ) : (
                  <p className="tw-font-monda tw-text-base tw-p-2 hover:tw-bg-[#C70039] hover:tw-text-white hover:tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                    Detail Role
                  </p>
                )}
              </Link>

              <Link href="/pengaturan/ubah-role">
                {usePage().props.uri.uri.includes("pengaturan/ubah-role") ? (
                  <p className="tw-font-monda tw-text-base tw-p-2 tw-bg-[#98042e] tw-text-white tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                    Ubah Role
                  </p>
                ) : (
                  <p className="tw-font-monda tw-text-base tw-p-2 hover:tw-bg-[#C70039] hover:tw-text-white hover:tw-rounded tw-duration-300 tw-w-full tw-border-b-[1px] tw-border-[#C70039]">
                    Ubah Role
                  </p>
                )}
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

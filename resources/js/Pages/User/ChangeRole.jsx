import React from "react";
import Index from "./Index";

import { usePage } from "@inertiajs/react";

export default function ChangeName({ user }) {
  const { errors } = usePage().props;

  return (
    <Index>
      <div className="tw-w-[70%] tw-shadow-lg tw-p-8 max-lg:tw-w-full tw-h-fit">
        <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
          Ubah Role
        </h2>

        <div className="tw-mt-3">
          <h3 className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
            Role Saat Ini:
          </h3>
          <p className="tw-font-monda">{user.role.RoleName}</p>
        </div>

        <form action="ubah-role" method="POST">
          <input
            type="hidden"
            name="_token"
            value={usePage().props.csrf_token.csrf_token}
          />

          <div className="tw-flex tw-flex-col tw-mt-3">
            <label
              htmlFor="role"
              className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
              Pilih Role:
            </label>

            <select
              name="role"
              id="role"
              className="tw-p-2 tw-border-[2px] tw-rounded tw-mt-1">
              {user.userroles.map((role, index) => (
                <option value={role.role.RoleName} key={index}>
                  {role.role.RoleName}
                </option>
              ))}
            </select>
            {errors.role && (
              <div className="tw-font-monda tw-text-[#C70039]">
                {errors.role}
              </div>
            )}
          </div>

          <div className="tw-mt-3">
            <button
              type="submit"
              className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] tw-active:bg-[#bb073a] tw-duration-200">
              Ubah Role
            </button>
          </div>
        </form>

        {usePage().props.flash.success && (
          <div className="tw-py-2 tw-px-3 tw-bg-green-500 tw-text-white tw-font-monda tw-font-bold tw-rounded tw-mt-2">
            {usePage().props.flash.success}
          </div>
        )}
        {usePage().props.flash.error && (
          <div className="tw-py-2 tw-px-3 tw-bg-red-500 tw-text-white tw-font-monda tw-font-bold tw-rounded tw-mt-2">
            {usePage().props.flash.error}
          </div>
        )}
      </div>
    </Index>
  );
}

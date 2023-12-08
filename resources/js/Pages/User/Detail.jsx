import React from "react";
import Index from "./Index";
import { Head, Link } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";

export default function Detail({ user }) {
  return (
    <Index>
      <div className="tw-w-[70%] tw-shadow-lg tw-p-8 max-lg:tw-w-full tw-h-fit">
        <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
          Detail Akun
        </h2>

        <div className="tw-mt-3">
          <h3 className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
            Nama:
          </h3>
          <p className="tw-font-monda tw-uppercase">{user.UserName}</p>
        </div>

        <div className="tw-mt-3">
          <h3 className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
            Email:
          </h3>
          <p className="tw-font-monda">{user.email}</p>
        </div>

        <div className="tw-mt-3">
          <h3 className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
            Username:
          </h3>
          <p className="tw-font-monda">{user.UserUsername}</p>
        </div>

        <div className="tw-mt-3">
          <h3 className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
            Paket:
          </h3>
          <p className="tw-font-monda">
            {user.membership.membershiptype.MembershipTypeName}
          </p>
        </div>
      </div>
    </Index>
  );
}

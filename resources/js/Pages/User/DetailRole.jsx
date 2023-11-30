import React from "react";
import Index from "./Index";
import { Head, Link } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";

export default function DetailRole({ user }) {
  return (
    <Index>
      <div className="tw-w-[70%] tw-shadow-lg tw-p-8 max-lg:tw-w-full">
        <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
          Detail Role
        </h2>

        <div className="tw-mt-3">
          <h3 className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
            Role Saat Ini:
          </h3>
          <p className="tw-font-monda">{user.role.RoleName}</p>
        </div>

        <div className="tw-mt-3">
          <h3 className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
            Role yang Dimiliki:
          </h3>
          <ul className="tw-list-disc tw-list-inside">
            {user.userroles.map((role, index) => (
              <li key={index} className="tw-font-monda">
                {role.role.RoleName}
              </li>
            ))}
          </ul>
          {/* <p className="tw-font-monda">{user.role.RoleName}</p> */}
        </div>
      </div>
    </Index>
  );
}

import React from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function ProfileContentCard({
  link,
  title,
  detail,
  courseName,
  majorName,
  date,
  description,
}) {
  return (
    <Link
      className="tw-mt-3 tw-shadow-lg tw-py-6 tw-px-8 tw-break-all"
      href={link}>
      <h3 className="tw-font-monda tw-font-bold tw-text-[#C70039] tw-text-lg">
        {title}
      </h3>

      <p className="tw-font-monda tw-text-base tw-mt-2">{detail}</p>

      <div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-mt-4 max-lg:tw-flex-col max-lg:tw-items-start">
        <h4 className="tw-font-monda tw-font-bold tw-text-sm  tw-text-[#C70039]">{`${courseName} | ${majorName}`}</h4>

        <p className="tw-font-monda tw-mt-2 tw-text-sm">{date}</p>
      </div>

      <div className="tw-font-monda tw-font-bold tw-text-[#C70039] tw-mt-4">
        {description}
      </div>
    </Link>
  );
}

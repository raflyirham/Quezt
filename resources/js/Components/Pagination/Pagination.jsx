import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

    return (
        <div className="tw-mt-6 tw-flex tw-flex-row tw-gap-x-1">
            {links.map((link, index) => (
                <Link href={link.url} key={index}>
                    <button
                        key={index}
                        className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-font-monda tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200"
                    >
                        {renderHTML(link.label)}
                    </button>
                </Link>
            ))}
        </div>
    );
}

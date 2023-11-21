import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

    return (
        <div className="mt-6 flex flex-row gap-x-1">
            {links.map((link, index) => (
                <Link href={link.url} key={index}>
                    <button
                        key={index}
                        className="bg-[#C70039] text-white font-medium text-base px-4 py-1 rounded-md font-monda border-[2px] border-[#C70039] hover:bg-[#d50a43] active:bg-[#bb073a] duration-200"
                    >
                        {renderHTML(link.label)}
                    </button>
                </Link>
            ))}
        </div>
    );
}

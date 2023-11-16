import React from "react";
import Index from "./Index";
import { Head, Link } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";

export default function DetailRole({ user }) {
    return (
        <Index>
            <div className="w-[70%] shadow-lg p-8">
                <h2 className="font-monda font-bold text-xl text-[#C70039]">
                    Detail Role
                </h2>

                <div className="mt-3">
                    <h3 className="font-monda font-bold text-lg text-[#C70039]">
                        Role Saat Ini:
                    </h3>
                    <p className="font-monda">{user.role.RoleName}</p>
                </div>

                <div className="mt-3">
                    <h3 className="font-monda font-bold text-lg text-[#C70039]">
                        Role yang Dimiliki:
                    </h3>
                    <ul className="list-disc list-inside">
                        {user.userroles.map((role, index) => (
                            <li key={index} className="font-monda">
                                {role.role.RoleName}
                            </li>
                        ))}
                    </ul>
                    {/* <p className="font-monda">{user.role.RoleName}</p> */}
                </div>
            </div>
        </Index>
    );
}

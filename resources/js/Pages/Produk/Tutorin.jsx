import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Tutorin() {
  return (
    <>
      <Head title="Produk Quezt Tutorin | Quezt" />

      <Navbar />

      <div className="tw-p-4 tw-mt-40 tw-min-h-screen">
        <div>
          <h1 className="tw-font-jacques tw-font-bold tw-text-4xl tw-text-[#C70039]">
            Produk Quezt Tutorin
          </h1>
        </div>
      </div>

      <Footer />
    </>
  );
}

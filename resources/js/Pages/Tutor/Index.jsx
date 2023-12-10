import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Pagination from "../../Components/Pagination/Pagination";

export default function Index({ tutors }) {
  return (
    <>
      <Head title="Tutor | Quezt" />

      <Navbar />

      <div className="tw-min-h-screen tw-p-4 max-lg:tw-pb-16">
        <div className="tw-mt-[120px]">
          <h1 className="tw-font-monda tw-font-bold tw-text-4xl tw-text-[#C70039]">
            Tutorin
          </h1>
          <p className="tw-font-monda tw-font-bold tw-text-2xl tw-text-[#000]">
            Cari Tutor terbaik dan paling sesuai dengan kamu!
          </p>
        </div>

        <div className="tw-mt-8">
          {tutors.data.length > 0 ? (
            <>
              <div className="tw-mt-4 tw-grid tw-grid-cols-6 tw-gap-y-10 tw-gap-x-6 tw-mb-8 max-lg:tw-grid-cols-2">
                {tutors.data.map((tutor, index) => (
                  <div className="tw-rounded tw-shadow" key={index}>
                    <img
                      src={tutor.UserAvatar}
                      className="tw-w-full tw-h-[250px]"
                    />

                    <div className="px-3 py-3">
                      <h2 className="tw-font-monda tw-font-bold tw-text-xl tw-text-[#C70039]">
                        {tutor.UserName}
                      </h2>

                      <div className="tw-font-monda tw-font-bold tw-text-base tw-text-[#C70039] tw-mt-4">
                        <Link href={`/profile/${tutor.UserUsername}`}>
                          {"Lihat Tutor >"}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Pagination links={tutors.links} />
            </>
          ) : (
            <p>Belum ada tutor.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

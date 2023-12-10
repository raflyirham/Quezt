import React, { useState, useRef } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import SmallCard from "@/Components/SmallCard/SmallCard";
import Navbar from "../Components/Navbar/Navbar";
import JurusanCard from "../Components/JurusanCard/JurusanCard";
import Footer from "../Components/Footer/Footer";

import { useRecaptcha } from "@/Composables/ReCaptcha";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Home({ majors }) {
  const { errors } = usePage().props;
  useRecaptcha();

  const [tanya, setTanya] = useState("");
  const [courses, setCourses] = useState([]);
  const courseRef = useRef(null);

  const handleMajorSelect = (e) => {
    const majorId = e.target.value;

    for (let i = 0; i < majors.length; i++) {
      if (majors[i].MajorID == majorId) {
        setCourses(majors[i].courses);
        courseRef.current.value = "DEFAULT";
        break;
      }
    }
  };

  return (
    <>
      <Head title="Beranda | Quezt" />

      <Navbar />

      <div className="tw-flex tw-flex-row tw-items-center tw-bg-[#C70039] tw-min-h-screen tw-p-4 max-lg:tw-flex-col max-lg:tw-items-start max-lg:tw-pt-[100px] max-lg:tw-justify-center">
        <div className="tw-flex tw-flex-col tw-w-[45%] max-lg:tw-w-full">
          <h1 className="tw-text-6xl tw-text-white tw-font-bold tw-font-monda max-lg:tw-text-4xl">
            Temukan Materi Mata Kuliah Kamu
          </h1>

          <div className="tw-flex tw-flex-row tw-mt-4 max-lg:tw-flex-col max-lg:tw-w-full">
            <form
              action="cari"
              method="GET"
              className="tw-w-full max-lg:tw-flex-col max-lg:tw-w-full">
              <input
                id="materi"
                name="materi"
                type="text"
                className="tw-w-[80%] tw-px-4 tw-py-2 tw-rounded max-lg:tw-w-full"
                placeholder="Cari materi perkuliahanmu..."
                required></input>

              <button className="tw-bg-[#FF7B7B] tw-w-[15%] tw-p-2 tw-rounded tw-font-monda tw-text-white tw-font-bold tw-ml-2 max-lg:tw-w-full max-lg:tw-ml-0">
                Cari
              </button>
            </form>
          </div>

          <div className="tw-mt-8">
            <p className="tw-font-monda tw-text-white">
              Atau cari mata kuliah populer:
            </p>

            <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-3 tw-mt-4">
              <SmallCard
                text="Alogritma dan Pemrograman"
                slug="algoritma-dan-pemrograman"
              />
              <SmallCard text="Ilmu Sosial Dasar" slug="ilmu-sosial-dasar" />
              <SmallCard text="Kecerdasan Buatan" slug="kecerdasan-buatan" />
              <SmallCard text="Ekonomi Mikro" slug="ekonomi-mikro" />
              <SmallCard text="Kalkulus 2" slug="kalkulus-2" />
            </div>
          </div>
        </div>

        <div className="tw-flex tw-flex-col tw-w-[55%] max-lg:tw-hidden">
          <img src="assets/img/home/illustration.png" />
        </div>
      </div>

      {(usePage().props["user_data"] == null ||
        usePage().props["user_data"].RoleID != 2) && (
        <div className="tw-p-4 tw-mb-2 tw-mt-4">
          <div className="tw-shadow-lg tw-p-4">
            <h2 className="tw-font-monda tw-font-bold tw-text-3xl tw-text-[#C70039]">
              Tanyakan Materi Perkuliahan Kamu
            </h2>

            <form
              action="/"
              method="POST"
              className="tw-flex tw-flex-col tw-gap-y-6 tw-mt-4">
              <input
                type="hidden"
                name="_token"
                value={usePage().props.csrf_token.csrf_token}
              />

              <div className="tw-flex tw-flex-col">
                <label
                  htmlFor="judul_pertanyaan"
                  className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
                  Judul Pertanyaan
                </label>
                <input
                  id="judul_pertanyaan"
                  name="judul_pertanyaan"
                  placeholder="Masukkan judul pertanyaan kamu..."
                  type="text"
                  className="tw-p-2 tw-border-[1px] tw-border-[#000] tw-rounded tw-mt-2"
                  required
                />
                {usePage().props.errors.judul_pertanyaan && (
                  <div className="tw-font-monda tw-text-[#C70039]">
                    {usePage().props.errors.judul_pertanyaan}
                  </div>
                )}
              </div>

              <div className="tw-flex tw-flex-col">
                <input type="hidden" name="tanya" value={tanya} />
                <label className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
                  Detail Pertanyaan
                </label>
                <CKEditor
                  id="tanya"
                  name="tanya"
                  editor={ClassicEditor}
                  data=""
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setTanya(data);
                  }}
                  config={{
                    toolbar: [
                      "undo",
                      "redo",
                      "|",
                      "bold",
                      "italic",
                      "|",
                      "link",
                      "|",
                      "bulletedList",
                      "numberedList",
                      "blockQuote",
                    ],
                    heading: {
                      options: [
                        {
                          model: "paragraph",
                          title: "Paragraph",
                          class: "ck-heading_paragraph",
                        },
                        {
                          model: "heading1",
                          view: "h1",
                          title: "Heading 1",
                          class: "ck-heading_heading1",
                        },
                        {
                          model: "heading2",
                          view: "h2",
                          title: "Heading 2",
                          class: "ck-heading_heading2",
                        },
                      ],
                    },
                  }}
                />
                {usePage().props.errors.tanya && (
                  <div className="tw-font-monda tw-text-[#C70039]">
                    {usePage().props.errors.tanya}
                  </div>
                )}
              </div>

              <div className="tw-flex tw-flex-col">
                <label
                  htmlFor="jurusan"
                  className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
                  Jurusan
                </label>

                <select
                  name="jurusan"
                  id="jurusan"
                  className="tw-p-2 tw-border-[1px] tw-border-[#d6d6d6] tw-rounded tw-mt-2"
                  required
                  defaultValue="Pilih Jurusan"
                  onChange={handleMajorSelect}>
                  <option value="Pilih Jurusan" disabled hidden>
                    Pilih Jurusan
                  </option>
                  {majors.map((major, index) => (
                    <option key={index} value={major.MajorID}>
                      {major.MajorName}
                    </option>
                  ))}
                </select>

                {usePage().props.errors.jurusan && (
                  <div className="tw-font-monda tw-text-[#C70039]">
                    {usePage().props.errors.jurusan}
                  </div>
                )}
              </div>

              <div className="tw-flex tw-flex-col">
                <label
                  htmlFor="mata_kuliah"
                  className="tw-font-monda tw-font-bold tw-text-lg tw-text-[#C70039]">
                  Mata Kuliah
                </label>

                <select
                  ref={courseRef}
                  name="mata_kuliah"
                  id="mata_kuliah"
                  className="tw-p-2 tw-border-[1px] tw-border-[#d6d6d6] tw-rounded tw-mt-2"
                  required
                  defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled hidden>
                    Pilih Mata Kuliah
                  </option>
                  {courses.map((course, index) => (
                    <option key={index} value={course.CourseID}>
                      {course.CourseName}
                    </option>
                  ))}
                </select>

                {usePage().props.errors.mata_kuliah && (
                  <div className="tw-font-monda tw-text-[#C70039]">
                    {usePage().props.errors.mata_kuliah}
                  </div>
                )}
              </div>

              <div
                className="g-recaptcha tw-mt-2"
                data-sitekey={
                  usePage().props.config.google_recaptcha_key
                }></div>
              {errors["g-recaptcha-response"] && (
                <div className="tw-font-monda tw-text-[#C70039]">
                  {errors["g-recaptcha-response"]}
                </div>
              )}

              <button className="tw-bg-[#C70039] tw-text-white tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-font-monda tw-w-fit tw-border-[2px] tw-border-[#C70039] hover:tw-bg-[#d50a43] active:tw-bg-[#bb073a] tw-duration-200">
                Kirim Pertanyaan
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="tw-px-4 tw-py-10">
        <h2 className="tw-font-monda tw-text-2xl tw-text-[#C70039]">
          Jurusan Kuliah
        </h2>
        <p className="tw-font-monda">
          Bingung cari materi perkuliahan? Cari berdasarkan jurusan kuliah kamu.
        </p>

        <div className="tw-grid tw-grid-cols-4 tw-gap-4 tw-mt-6 max-lg:tw-grid-cols-1">
          <JurusanCard
            jurusan={"Teknik Informatika"}
            deskripsi={
              "Jurusan Teknik Informatika merupakan cabang ilmu yang berkaitan dengan pengembangan dan penerapan teknologi informasi dalam berbagai bidang."
            }
            slug={"teknik-informatika"}
          />

          <JurusanCard
            jurusan={"Ilmu Ekonomi"}
            deskripsi={
              "Jurusan Ilmu Ekonomi membahas prinsip-prinsip dasar yang mendasari pengelolaan sumber daya ekonomi di tingkat individual, perusahaan, dan tingkat makroekonomi."
            }
            slug={"ilmu-ekonomi"}
          />

          <JurusanCard
            jurusan={"Geografi"}
            deskripsi={
              "Jurusan Geografi membahas pemahaman tentang pola spasial dan hubungan antara manusia dan lingkungan fisik."
            }
            slug={"geografi"}
          />

          <JurusanCard
            jurusan={"Astronomi"}
            deskripsi={
              "Jurusan Astronomi memperkenalkan mahasiswa pada penelitian dan eksplorasi luar angkasa serta fenomena-fenomena astronomi."
            }
            slug={"astronomi"}
          />
        </div>

        <Link href="/jurusan" className="tw-inline-block tw-mt-4">
          <p className="tw-font-monda tw-font-bold tw-text-base tw-text-[#C70039]  tw-inline">
            {"Lihat Jurusan Lainnya >"}
          </p>
        </Link>
      </div>

      <div className="tw-p-4 tw-mb-16 tw-z-[-999px]">
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-px-4 tw-py-14 tw-rounded tw-bg-gradient-to-b tw-from-[#C70039] tw-to-[#B23358] tw-min-h-[500px]">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-[35%] tw-text-center max-lg:tw-w-[80%]">
            <h3 className="tw-font-monda tw-font-bold tw-text-5xl tw-text-[#fff] tw-mb-4 max-md:tw-text-3xl max-lg:tw-text-4xl">
              Butuh Bantuan Materi Perkuliahan?
            </h3>
            <p className="tw-font-monda tw-font-normal tw-text-xl tw-text-[#fff] tw-mb-4 max-md:tw-text-lg">
              Jangan khawatir! Tutor siap membantu kamu.
            </p>

            <Link href="/tutor">
              <button className="tw-bg-[#FF7B7B] tw-text-[#fff] tw-font-medium tw-text-base tw-px-4 tw-py-1 tw-rounded-md tw-ml-4 tw-font-monda tw-border-[2px] tw-border-[#FF7B7B] hover:tw-bg-[#fc8f8f] hover:tw-border-[#fc8f8f] active:tw-bg-[#f97070] active:tw-border-[#f97070] tw-duration-300">
                {"Cari Tutor >"}
              </button>
            </Link>
          </div>
        </div>
        <div className="tw-absolute tw-mt-[-430px] max-lg:tw-hidden max-xl:tw-w-[350px] max-xl:tw-mt-[-350px]">
          <img
            src="assets/img/home/illustration-2.png"
            className="tw-w-[450px]"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

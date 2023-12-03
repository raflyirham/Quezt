import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";

import Footer from "../../Components/Footer/Footer";

export default function Index() {
  return (
    <>
      <Head title="Admin | Quezt" />
      <nav className="disable- navbar navbar-expand-lg bg-body-tertiary">
        <div className="disable-tailwind container-fluid">
          <a className="disable-tailwind navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="disable-tailwind navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="disable-tailwind navbar-toggler-icon"></span>
          </button>
          <div
            className="disable-tailwind collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="disable-tailwind navbar-nav me-auto mb-2 mb-lg-0">
              <li className="disable-tailwind nav-item">
                <a
                  className="disable-tailwind nav-link active"
                  aria-current="page"
                  href="#">
                  Home
                </a>
              </li>
              <li className="disable-tailwind nav-item">
                <a className="disable-tailwind nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="disable-tailwind nav-item dropdown">
                <a
                  className="disable-tailwind nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul className="disable-tailwind dropdown-menu">
                  <li>
                    <a className="disable-tailwind dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="disable-tailwind dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="disable-tailwind dropdown-divider" />
                  </li>
                  <li>
                    <a className="disable-tailwind dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="disable-tailwind nav-item">
                <a
                  className="disable-tailwind nav-link disabled"
                  aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="disable-tailwind d-flex" role="search">
              <input
                className="disable-tailwind form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="disable-tailwind btn btn-outline-success"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <button
        type="button"
        className="disable-tailwind btn btn-outline-primary">
        Primary
      </button>
      <button
        type="button"
        className="disable-tailwind btn btn-outline-secondary">
        Secondary
      </button>
      <button
        type="button"
        className="disable-tailwind btn btn-outline-success">
        Success
      </button>
      <button type="button" className="disable-tailwind btn btn-outline-danger">
        Danger
      </button>
      <button
        type="button"
        className="disable-tailwind btn btn-outline-warning">
        Warning
      </button>
      <button type="button" className="disable-tailwind btn btn-outline-info">
        Info
      </button>
      <button type="button" className="disable-tailwind btn btn-outline-light">
        Light
      </button>
      <button type="button" className="disable-tailwind btn btn-outline-dark">
        Dark
      </button>

      <div className="p-4 mt-40 min-h-screen">
        <div>
          <h1 className="font-jacques font-bold text-4xl text-[#C70039]">
            Admin
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

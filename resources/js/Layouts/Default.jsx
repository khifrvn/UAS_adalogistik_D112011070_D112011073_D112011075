//import react
import React from "react";

//import link
import { Link } from '@inertiajs/inertia-react';

function Layout({ children }) {

    return (
        <>
            <header>
                    <nav class = "navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
                    <div class = "container">
                        <a class = "navbar-brand d-flex justify-content-between align-items-center order-lg-0" href = "index.html">
                            <span class = "text-uppercase fw-lighter ms-2">adalogistik</span>
                        </a>

                        <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                            <span class = "navbar-toggler-icon"></span>
                        </button>

                        <div class = "collapse navbar-collapse order-lg-1" id = "navMenu">
                            <ul class = "navbar-nav mx-auto text-center">
                                <li class = "nav-item px-2 py-2">
                                    <a class = "nav-link text-uppercase text-dark" href = "/">Beranda</a>
                                </li>
                                <li class = "nav-item px-2 py-2">
                                    <a class = "nav-link text-uppercase text-dark" href = "/posts">Barang</a>
                                </li>
                                <li class = "nav-item px-2 py-2">
                                    <a class = "nav-link text-uppercase text-dark" href = "/tentang">Tentang Kami</a>
                                </li>
                                <li class = "nav-item px-2 py-2">
                                    <a class = "nav-link text-uppercase text-dark" href = "/kontak">Kontak Kami</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mt-5">
                { children }
            </main>
        </>
    )
}

export default Layout


//import React
import React from "react";

//import layout
import Layout from "../../Layouts/Default";

//import Link
import { Link } from "@inertiajs/inertia-react";

export default function TentangIndex({ posts, session }) {

    return (
        <Layout>
            <div style={{ marginTop: '100px' }}></div>

            <div id="carouselExample" class="carousel slide">
             <div class="carousel-inner text-center">
                <div class="carousel-item active">
                    <img src="images/warung2.jpg" class="d-block w-100" alt="..."></img>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '50px' }}></div>

            <div class="d-flex justify-content-center">
                <h3 className="font-weight-bold mb-3 text-center">Tentang Kami</h3>
            </div>

                {session.success && (
                    <div className="alert alert-success border-0 shadow-sm rounded-3">
                        {session.success}
                    </div>
                )}


            <div style={{ marginBottom: '50px' }}></div>

            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-12">
                        <p>
                            Selamat datang di Website Logistik Warung! Kami adalah platform inovatif yang didedikasikan untuk
                            memudahkan kegiatan logistik bagi pemilik warung dan pedagang kecil di seluruh Indonesia. Dibangun
                            dengan tujuan untuk mengurangi hambatan logistik, kami menyediakan berbagai solusi yang dapat
                            membantu meningkatkan efisiensi dan produktivitas bisnis Anda.
                        </p>
                        <p>
                            Visi kami adalah menciptakan ekosistem logistik yang terintegrasi dan terjangkau bagi para pemilik
                            warung dan pedagang kecil di Indonesia. Kami ingin menjadi mitra yang dapat diandalkan dan membantu
                            meningkatkan potensi pertumbuhan bisnis Anda, sehingga Anda dapat fokus pada hal-hal yang lebih
                            penting.
                        </p>
                        <p>
                            Kami berkomitmen untuk terus berinovasi dan meningkatkan layanan kami agar dapat memberikan solusi
                            logistik yang terbaik untuk Anda. Bergabunglah dengan kami sekarang dan nikmati pengalaman logistik
                            yang lebih mudah, cepat, dan andal untuk usaha warung Anda!
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '50px' }}></div>

            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                <p>&copy; 2023 adalogistik. All rights reserved.</p>
                </div>
            </div>

        </Layout>
    )
}


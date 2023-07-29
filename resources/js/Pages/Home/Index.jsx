//import React
import React from "react";

//import layout
import Layout from "../../Layouts/Default";

//import Link
import { Link } from "@inertiajs/inertia-react";

export default function HomeIndex({ posts, session }) {

    return (
        <Layout>
            <div style={{ marginTop: '100px' }}></div>

            <div id="carouselExample" class="carousel slide">
             <div class="carousel-inner text-center">
                <div class="carousel-item active">
                    <img src="images/warung.jpg" class="d-block w-100" alt="..."></img>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '50px' }}>

            <h3 className="font-weight-bold mb-3">Data Barang Terkini</h3>

                {session.success && (
                    <div className="alert alert-success border-0 shadow-sm rounded-3">
                        {session.success}
                    </div>
                )}

                <div className="card border-0 rounded shadow p-3">
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Nama Barang</th>
                                    <th scope="col">Harga</th>
                                    <th scope="col">Stok</th>
                                </tr>
                            </thead>
                            <tbody>
                                { posts.map((post, index) => (
                                    <tr key={ index }>
                                        <td>{ post.nama_barang }</td>
                                        <td>Rp. { post.harga }</td>
                                        <td>{ post.stok }</td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
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


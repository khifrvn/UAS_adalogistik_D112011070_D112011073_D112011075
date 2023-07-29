//import React
import React from "react";

//import layout
import Layout from "../../Layouts/Default";

//import Link
import { Link } from "@inertiajs/inertia-react";

import { Inertia } from '@inertiajs/inertia';

export default function PostIndex({ posts, session }) {

    // method delete post
    const deletePost = async (id) => {
        Inertia.delete(`/posts/${id}`);
    }

    return (
        <Layout>

            <div style={{ marginTop: '120px' }}>
            <div class="d-flex justify-content-center">
                <h3 className="font-weight-bold mb-3 text-center">Kelola Barang</h3>
            </div>
            <div class="d-flex justify-content-end">
                <Link href="/posts/create" className="btn btn-success btn-md mb-3 ml-auto">Tambah Barang</Link>
            </div>

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
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { posts.map((post, index) => (
                                    <tr key={ index }>
                                        <td>{ post.nama_barang }</td>
                                        <td>Rp. { post.harga }</td>
                                        <td>{ post.stok }</td>
                                        <td className="text-center">
                                            <Link href={`/posts/${post.id}/edit`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                            <button onClick={() => deletePost(post.id)} className="btn btn-sm btn-danger">Delete</button>
                                        </td>
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


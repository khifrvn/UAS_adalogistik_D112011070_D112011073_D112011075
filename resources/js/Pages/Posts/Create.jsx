import React, { useState } from "react";
import Layout from "../../Layouts/Default";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function CreatePost({ errors }) {
  const [nama_barang, setNamaBarang] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');

  const storePost = async (e) => {
    e.preventDefault();

    Inertia.post('/posts', {
        nama_barang: nama_barang,
        harga: harga,
        stok: stok,
    })
  };

  return (
    <Layout>
      <div className="row" style={{ marginTop: '100px' }}>
        <div className="col-12">
          <div className="card border-0 rounded shadow p-3 border-top-success">
            <div className="card-header">
              <span className="font-weight-bold">Tambah Barang</span>
            </div>
            <div className="card-body">
              <form onSubmit={storePost}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Nama Barang</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nama_barang}
                    onChange={(e) => setNamaBarang(e.target.value)}
                    placeholder="Masukan Nama Barang"
                  />
                  {errors.title && (
                    <div className="alert alert-danger">
                      {errors.nama_barang}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Harga</label>
                  <input
                    type="text"
                    className="form-control"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    placeholder="Masukan Harga"
                  />
                  {errors.title && (
                    <div className="alert alert-danger">
                      {errors.harga}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Stok</label>
                  <input
                    type="text"
                    className="form-control"
                    value={stok}
                    onChange={(e) => setStok(e.target.value)}
                    placeholder="Masukan Jumlah Stok"
                  />
                  {errors.title && (
                    <div className="alert alert-danger">
                      {errors.stok}
                    </div>
                  )}
                </div>
                <div>
                  <button type="submit" className="btn btn-md btn-success me-2">
                    <i className="fa fa-save"></i> Save
                  </button>
                  <InertiaLink href="/posts" className="btn btn-md btn-warning">
                    <i className="fa fa-redo"></i> Cancel
                  </InertiaLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

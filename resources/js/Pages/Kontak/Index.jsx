//import React
import React from "react";

//import layout
import Layout from "../../Layouts/Default";

//import Link
import { Link } from "@inertiajs/inertia-react";

export default function KontakIndex({ posts, session }) {

    return (
        <Layout>
            <div style={{ marginTop: '100px' }}></div>

            <div id="carouselExample" class="carousel slide">
             <div class="carousel-inner text-center">
                <div class="carousel-item active">
                    <img src="images/warung3.jpg" class="d-block w-100" alt="..."></img>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '50px' }}></div>

            <div class="d-flex justify-content-center">
                <h3 className="font-weight-bold mb-3 text-center">Bergabung Dengan Kami</h3>
            </div>

                {session.success && (
                    <div className="alert alert-success border-0 shadow-sm rounded-3">
                        {session.success}
                    </div>
                )}


            <div style={{ marginBottom: '30px' }}></div>

            <div class="container mt-5">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <form action="#" method="POST">
                  <div class="form-group">
                    <label for="name">Nama</label>
                    <input type="text" class="form-control" id="name" name="name" required></input>
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" required></input>
                  </div>
                  <div class="form-group">
                    <label for="message">Pesan</label>
                    <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
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


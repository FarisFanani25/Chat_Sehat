import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import blogImage1 from "../../Asset/Blog1.jpeg";
import blogImage2 from "../../Asset/Blog2.jpeg";
import blogImage3 from "../../Asset/Blog3.jpeg";

function Blog() {
  const [showFullText, setShowFullText] = useState({
    1: false,
    2: false,
    3: false,
  });

  const toggleFullText = (id) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="blog-area pb-5">
      <div className="container">
        <div className="row justify-content-center">
          {/* Blog Item 1 */}
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="single-blog blog-style-one">
              <div className="blog-image">
                <Link to="/blog/1">
                  <img src={blogImage1} alt="Blog 1" />
                </Link>
                <Link to="/blog/1" className="category">Berita</Link>
              </div>
              <div className="blog-content">
                <h5 className="blog-title">
                  <Link to="/blog/1">
                    Empat Pengedar-Pemakai Narkoba di Buleleng Ditangkap Polisi
                  </Link>
                </h5>
                <span><i className="lni lni-calendar"></i> 7/10/2024</span>
                <span><i className="lni lni-comments-alt"></i> 24 Komen</span>
                <p className="text">
                  {showFullText[1]
                    ? "Sebanyak empat pelaku penyalahgunaan narkoba..."
                    : "Polisi berhasil menangkap empat pelaku narkoba..."}
                </p>
                <Link
                  className="more"
                  to={`/blog/1`}
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>

          {/* Ulangi untuk Blog Item 2 dan Blog Item 3 */}
          {/* Blog Item 2 */}
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="single-blog blog-style-one">
              <div className="blog-image">
                <Link to="/blog/2">
                  <img src={blogImage2} alt="Blog 2" />
                </Link>
                <Link to="/blog/2" className="category">Jurnal</Link>
              </div>
              <div className="blog-content">
                <h5 className="blog-title">
                  <Link to="/blog/2">
                    Analisis Fenomena Penyalahgunaan Narkoba pada Remaja
                  </Link>
                </h5>
                <span><i className="lni lni-calendar"></i> 14/04/2024</span>
                <span><i className="lni lni-comments-alt"></i> 15 Komen</span>
                <Link className="more" to={`/blog/2`}>
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Item 3 */}
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="single-blog blog-style-one">
              <div className="blog-image">
                <Link to="/blog/3">
                  <img src={blogImage3} alt="Blog 3" />
                </Link>
                <Link to="/blog/3" className="category">Buku</Link>
              </div>
              <div className="blog-content">
                <h5 className="blog-title">
                  <Link to="/blog/3">
                    Pedoman Pencegahan Penyalahgunaan Narkoba Bagi Remaja
                  </Link>
                </h5>
                <span><i className="lni lni-calendar"></i> 05/10/2014</span>
                <span><i className="lni lni-comments-alt"></i> 18 komen</span>
                <Link className="more" to={`/blog/3`}>
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

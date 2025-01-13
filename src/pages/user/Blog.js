import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  // State to store articles fetched from the API
  const [articles, setArticles] = useState([]);

  // Fetch articles from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:8000/api/artikeluser")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data); // Set the fetched articles to state
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <section className="blog-area pb-5">
      <div className="container">
        <div className="row justify-content-center">
          {articles.map((article) => (
            <div key={article.id_artikel} className="col-lg-4 col-md-6 col-sm-10">
              <div className="single-blog blog-style-one">
                <div className="blog-image">
                  <Link to={`/blog/${article.id_artikel}`}>
                    <img
                      src={`http://localhost:8000/storage/${article.image}`}
                      alt={article.title}
                    />
                  </Link>
                  <Link to={`/blog/${article.id_artikel}`} className="category">
                    {article.role}
                  </Link>
                </div>
                <div className="blog-content">
                  <h5 className="blog-title">
                    <Link to={`/blog/${article.id_artikel}`}>
                      {article.title}
                    </Link>
                  </h5>
                  <span>
                    <i className="lni lni-calendar"></i> {new Date(article.created_at).toLocaleDateString()}
                  </span>
                  <span>
                    <i className="lni lni-comments-alt"></i> 0 Komen
                  </span>
                  <p className="text">
                    {article.content.length > 150
                      ? article.content.substring(0, 150) + "..."
                      : article.content}
                  </p>
                  <Link className="more" to={`/blog/${article.id_artikel}`}>
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
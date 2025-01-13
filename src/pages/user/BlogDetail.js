import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

function BlogDetail() {
  const { id } = useParams(); // Get the article ID from URL
  const [article, setArticle] = useState(null); // State to store article details

  // Fetch article data when the component mounts
  useEffect(() => {
    fetch(`http://localhost:8000/api/artikeluser/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data); // Set the article data to state
      })
      .catch((error) => console.error("Error fetching article:", error));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="single-blog">
        <img
          src={`http://localhost:8000/storage/${article.image}`}
          alt={article.title}
          className="img-fluid"
        />
        <h2>{article.title}</h2>
        <p><i className="lni lni-calendar"></i> {new Date(article.created_at).toLocaleDateString()}</p>
        <div className="category">{article.role}</div>
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
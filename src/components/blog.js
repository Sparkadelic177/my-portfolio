import React from "react";
import "../styles/blog.css";

const Blog = ({ title, thumbnail, pubDate, link }) => {
  return (
    <a className="blog_container" href={link} target="_blank">
      <h2 className="blog_title">{title}</h2>
      <div className="image_container">
        <img className="blog_image" src={thumbnail} alt={title} />
      </div>
      {/* <p className="blog_date">{pubDate}</p> */}
    </a>
  );
};

export default Blog;

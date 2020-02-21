import React, { useState, useEffect } from "react";
import Blog from "../components/blog";
import feed from "rss-to-json";
import axios from "axios";
import "../styles/blogs.css";
const Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sparkyevangelista"
      )
      .then(res => setData(res.data.items))
      .catch(error => console.log(error));
  }, []);

  console.log(data);
  return (
    <div id="blogs_container">
      {data.map((blog, index) => {
        return (
          <Blog
            key={index}
            title={blog.title}
            pubDate={blog.pubDate}
            link={blog.link}
            thumbnail={blog.thumbnail}
          />
        );
      })}
    </div>
  );
};

export default Blogs;

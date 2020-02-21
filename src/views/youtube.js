import React, { useEffect, useState } from "react";
import "../styles/youtube.css";
import axios from "axios";

const YouTube = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://feed2json.org/convert?url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCwSKlD8oNKTnQ19Tbe5stUg"
      )
      .then(res => {
        setData(res.data);
        setItems(res.data.items);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="youtube_container">
      <section className="leftside_youtube">
        <h2> {data.title}</h2>
        <div
          className="g-ytsubscribe"
          data-channelid="UCwSKlD8oNKTnQ19Tbe5stUg"
          data-layout="default"
          data-theme="dark"
          data-count="default"
        ></div>
        <div className="youtubeImage_container">
          <a href={data.home_page_url}>
            <img
              id="youtubeImage"
              src={require("../images/youtubeImage.JPG")}
            />
          </a>
        </div>
      </section>
      <section className="rightside_youtube">
        <h2> Youtube Videos </h2>
        {items.map((video, key) => {
          return (
            <h3 className="video_titles" key={key}>
              <a className="video_title_link" href={video.url} target="_blank">
                {video.title}
              </a>
            </h3>
          );
        })}
      </section>
    </div>
  );
};

export default YouTube;

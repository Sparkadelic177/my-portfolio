import React, { Component } from "react";
import "../styles/content.css";

//this page is going to hold all of my medium blogs and youtube videos
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="content_container">
        <section className="youtube_content">
          Youtube videos go here
          <div
            class="g-ytsubscribe"
            data-channelid="UCwSKlD8oNKTnQ19Tbe5stUg"
            data-layout="default"
            data-theme="dark"
            data-count="default"
          ></div>
        </section>
        <section className="medium_content">
          <div>
            <p>Medium blogs go here</p>
          </div>
        </section>
      </div>
    );
  }
}

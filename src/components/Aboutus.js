import { useState } from "react";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../components/css/home.css";

class Aboutus extends Component {
  render() {
    return (
      <>
        <section class="about" id="about">
          <h1 class="heading">
            
            <span> about </span> us
          </h1>

          <div class="row">
          <div class="video-container">
            <video src={require("../images/about-vid.mp4")} loop autoplay muted></video>
            <h3>Best salon in kathmandu</h3>
        </div>

            <div class="content">
              <h3>why choose us?</h3>
              <p>
                The Nailroom is a top-notch nail salon in kathmandu, Since 2021.
                Our nail salon is the most affordable and professional. We focus
                on customer safety, needs, and satisfaction. Our goal is to make
                your visit to our nail salon an experience, which enhances your
                life and wellbeing for years to come. We guaranteed that when
                you leave our nail salon, you will experience a feeling of
                renewed vitality. Most of all, you’ll be content. Whether you
                came in for a treatment, or just stopped by for a quick polish
                change on your toes, you’ll never get the sense that you
                overpaid. We know you work hard, and we want you to leave
                feeling rewarded and relaxed.
              </p>
              <p>
                Our nail salon understands that Safety and Sanitation are key to
                your peace of mind. Our implements are medically sterilized and
                disinfected after each use. Buffers and files are used only once
                then discarded. All pedicure procedures are done with liner
                protection. And above all, staffs are trained to follow a proper
                sanitization protocol that puts clients' hygiene as the number
                one priority. If you’re in need of Nail treatments or wish to
                know why so many kathmandu residents come to our nail salon,
                come to visit us today.
              </p>
              <a href="#" class="btn">
                learn more
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Aboutus;

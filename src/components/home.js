import { useState } from "react";
import React from "react";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../components/css/home.css";


class Home extends Component {
    render() {
      return (
        <>
        <section class="home" id="home">

<div class="content">
    <h3>Welcome To The Nailroom </h3>
    <span> natural & beautiful nails </span>
    <p>.</p>
    <a href="#" class="btn">Set appointment</a>
</div>

</section>




</>
      );
    }
}


export default Home;
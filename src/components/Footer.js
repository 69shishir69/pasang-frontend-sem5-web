import { useState } from "react";
import React from "react";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../components/css/footer.css";

class Footer extends Component {
  render() {
    return (
      <form>
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="footer-col">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">our services</a>
                  </li>
                  <li>
                    <a href="#">privacy policy</a>
                  </li>
                  {/* <li><a href="#">affiliate program</a></li> */}
                </ul>
              </div>
              <div class="footer-col">
                <h4> Open Hours</h4>
                <ul>
                  <li>
                    <a href="#">Mon:10am-8pm</a>
                  </li>
                  <li>
                    <a href="#">Tue: CLOSED</a>
                  </li>
                  <li>
                    <a href="#">Wed to Sun: 10am-8pm</a>
                  </li>
                  <li>
                    <a href="#">payment options</a>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <a href="#">Customer services</a>
                  </li>
                  <li>
                    <a href="#">Nailroom121@gmail.com</a>
                  </li>
                  <li>
                    <a href="#">Contact Number</a>
                  </li>
                  <li>
                    <a href="#">9801232148</a>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Follow us</h4>
                <div class="social-links">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </form>
    );
  }
}

export default Footer;

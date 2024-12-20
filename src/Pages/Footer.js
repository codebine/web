/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer" class="footer dark-background">
        <div class="footer-top">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-4 col-md-6 footer-about">
                <a href="index.html" class="logo d-flex align-items-center">
                  <span class="sitename">Web</span>
                </a>
                <div class="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p class="mt-3">
                    <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span>info@example.com</span>
                  </p>
                </div>
                <div class="social-links d-flex mt-4">
                  <a href="">
                    <i class="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <a href="#"> Home</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="#"> About us</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="#"> Services</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="#"> Terms of service</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="#"> Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="#"> Web Design</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="#"> Web Development</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="#"> Product Management</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="#"> Marketing</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="#"> Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-12 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Subscribe to our newsletter and receive the latest news about
                  our products and services!
                </p>
                <form
                  action="forms/newsletter.php"
                  method="post"
                  class="php-email-form"
                >
                  <div class="newsletter-form">
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                  </div>
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="copyright">
          <div class="container text-center">
            <p>
              © <span>Copyright</span> <strong class="px-1 sitename">Web</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

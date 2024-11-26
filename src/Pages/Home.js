/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import bg from "../img/hero-bg.jpg";
import about from "../img/about.jpg";
import ico_1 from "../img/service-icon-1.png";
import ico_2 from "../img/service-icon-2.png";
import ico_3 from "../img/service-icon-3.png";
import ico_4 from "../img/service-icon-4.png";
import arrow from "../img/arrow-circle.png";
import bg_1 from "../img/features-bg.jpg";
import bg_2 from "../img/valuable-skill.jpg";
import bg_3 from "../img/play-video.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="hero" className="hero section dark-background">
        <img src={bg} alt="" data-aos="fade-in" />

        <div className="container">
          <div
            className="row justify-content-center text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-xl-6 col-lg-8">
              <h2>
                Powerful Digital Solutions With Web<span>.</span>
              </h2>
              <p>We are team of talented digital marketers</p>
            </div>
          </div>
          {/* 
          <div
            className="row gy-4 mt-5 justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className="col-xl-2 col-md-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <i className="bi bi-binoculars"></i>
                <h3>
                  <a>Lorem Ipsum</a>
                </h3>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <i className="bi bi-bullseye"></i>
                <h3>
                  <a>Dolor Sitema</a>
                </h3>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon-box">
                <i className="bi bi-fullscreen-exit"></i>
                <h3>
                  <a>Sedare Perspiciatis</a>
                </h3>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="icon-box">
                <i className="bi bi-card-list"></i>
                <h3>
                  <a>Magni Dolores</a>
                </h3>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="icon-box">
                <i className="bi bi-gem"></i>
                <h3>
                  <a>Nemos Enimade</a>
                </h3>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section class="service-area sec-pad">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-4 col-xl-4">
              <div class="title">
                <span>What We Do</span>
                <h2>We work performed for client happy.</h2>
                <div class="cmn-btn">
                  <a><NavLink to='/Services'>View All Services</NavLink></a>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-lg-8 col-xl-8">
              <div class="row g-4">
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div class="single-service">
                    <span class="count">01</span>
                    <div class="service-icon">
                      <img src={ico_1} alt="Web Design" />
                    </div>
                    <div class="service-content">
                      <h4>Web Design</h4>
                      <p>
                        Fusce ornare mauris nisi, id fringilla turpis vehicula
                        justo lectus, ultricies nec sem.
                      </p>
                      <a href="/service-details">
                        Read More <img src={arrow} alt="Read More" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div class="single-service">
                    <span class="count">02</span>
                    <div class="service-icon">
                      <img src={ico_2} alt="App Design" />
                    </div>
                    <div class="service-content">
                      <h4>App Design</h4>
                      <p>
                        Maecenas ut est in ante imperdiet laoreet eu quis elit.
                        Phasellus Door.
                      </p>
                      <a href="/service-details">
                        Read More <img src={arrow} alt="Read More" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div class="single-service">
                    <span class="count">03</span>
                    <div class="service-icon">
                      <img src={ico_3} alt="Developing" />
                    </div>
                    <div class="service-content">
                      <h4>Developing</h4>
                      <p>
                        Etiam eu ullamcorper ipsum. Pellentesque eu ipsum luctus
                        libero euismod.
                      </p>
                      <a href="/service-details">
                        Read More <img src={arrow} alt="Read More" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <div class="single-service">
                    <span class="count">04</span>
                    <div class="service-icon">
                      <img src={ico_4} alt="Graphic Design" />
                    </div>
                    <div class="service-content">
                      <h4>Graphic Design</h4>
                      <p>
                        Quisque in massa nunc. Etiam blandit tortor nisl, auctor
                        vulputate felis convallis at.
                      </p>
                      <a href="/service-details">
                        Read More <img src={arrow} alt="Read More" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about  */}
      <section id="about" class="about section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-6 order-1 order-lg-2">
              <img src={about} class="img-fluid" alt="" />
            </div>
            <div class="col-lg-6 order-2 order-lg-1 content">
              <h3>Voluptatem dignissimos provident</h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check2-all"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i class="bi bi-check2-all"></i>{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i class="bi bi-check2-all"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
              <div class="cmn-btn my-5">
                <a href="/service">View More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about  */}
      {/* features */}
      <section id="features" class="features section">
        <div class="container">
          <div class="row gy-4">
            <div
              class="features-image col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={bg_1} alt="" />
            </div>
            <div class="col-lg-6">
              <div
                class="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i class="bi bi-archive flex-shrink-0"></i>
                <div>
                  <h4>Est labore ad</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
              </div>

              <div
                class="features-item d-flex mt-5 ps-0 ps-lg-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i class="bi bi-basket flex-shrink-0"></i>
                <div>
                  <h4>Harum esse qui</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>

              <div
                class="features-item d-flex mt-5 ps-0 ps-lg-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i class="bi bi-broadcast flex-shrink-0"></i>
                <div>
                  <h4>Aut occaecati</h4>
                  <p>
                    Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                    maiores omnis facere
                  </p>
                </div>
              </div>

              <div
                class="features-item d-flex mt-5 ps-0 ps-lg-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i class="bi bi-camera-reels flex-shrink-0"></i>
                <div>
                  <h4>Beatae veritatis</h4>
                  <p>
                    Expedita veritatis consequuntur nihil tempore laudantium
                    vitae denat pacta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features */}
      {/* services */}
      <section id="services" class="services section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div class="container">
          <div class="row gy-4">
            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-activity"></i>
                </div>
                <a class="stretched-link">
                  <h3>Nesciunt Mete</h3>
                </a>
                <p>
                  Provident nihil minus qui consequatur non omnis maiores. Eos
                  accusantium minus dolores iure perferendis tempore et
                  consequatur.
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-broadcast"></i>
                </div>
                <a class="stretched-link">
                  <h3>Eosle Commodi</h3>
                </a>
                <p>
                  Ut autem aut autem non a. Sint sint sit facilis nam iusto
                  sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-easel"></i>
                </div>
                <a class="stretched-link">
                  <h3>Ledo Markt</h3>
                </a>
                <p>
                  Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                  Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-bounding-box-circles"></i>
                </div>
                <a class="stretched-link">
                  <h3>Asperiores Commodit</h3>
                </a>
                <p>
                  Non et temporibus minus omnis sed dolor esse consequatur.
                  Cupiditate sed error ea fuga sit provident adipisci neque.
                </p>
                <a class="stretched-link"> </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-calendar4-week"></i>
                </div>
                <a class="stretched-link">
                  <h3>Velit Doloremque</h3>
                </a>
                <p>
                  Cumque et suscipit saepe. Est maiores autem enim facilis ut
                  aut ipsam corporis aut. Sed animi at autem alias eius labore.
                </p>
                <a class="stretched-link"> </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-chat-square-text"></i>
                </div>
                <a class="stretched-link">
                  <h3>Dolori Architecto</h3>
                </a>
                <p>
                  Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                  neque non et debitis iure. Corrupti recusandae ducimus enim.
                </p>
                <a class="stretched-link"> </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      {/* why choose  */}
      <section class="why-choose-us sec-mar">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-6 col-xl-6">
              <div class="title black">
                <span>Why Choose Finibus</span>
                <h2 class="mb-15">
                  Success is just around the next online corner
                </h2>
              </div>
              <div class="video-demo">
                <img src={bg_3} alt="Play Video" />
                <div class="play-btn">
                  <div class="popup-video">
                    <i class="fas fa-play"></i> Play now
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-6">
              <div class="valuable-skills">
                <img src={bg_2} alt="Valuable Skills" />
                <div class="single-bar pt-0">
                  <h6>Web Design</h6>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "85%" }}></div>
                    <span>85%</span>
                  </div>
                </div>
                <div class="single-bar">
                  <h6>App Development</h6>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "75%" }}></div>
                    <span>75%</span>
                  </div>
                </div>
                <div class="single-bar">
                  <h6>Backend</h6>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "55%" }}></div>
                    <span>55%</span>
                  </div>
                </div>
                <div class="single-bar">
                  <h6>Video Animation</h6>
                  <div class="progress-bar">
                    <div class="progress" style={{ width: "65%" }}></div>
                    <span>65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why choose  */}
      {/* call to action  */}
      <section class="lets-talk sec-pad">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-9 col-lg-8 col-xl-7">
              <div class="title special">
                <span>Let’s Talk</span>
                <h2>
                  About Your Next <br />
                  <b>Project</b> On Your Mind
                </h2>
              </div>
            </div>
            <div class="col-md-3 col-lg-4 col-xl-5 text-end">
              <div class="getin-touch">
                <div class="cmn-btn">
                  <a href="/contact">Get In Touch</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* call to action  */}
    </div>
  );
};

export default Home;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import bg from "../img/hero-bg.jpg";
import about from "../img/about.jpg";
// import bg_1 from "../img/features-bg.jpg";
import bg_2 from "../img/valuable-skill.jpg";
import bg_3 from "../img/play-video.jpg";
import c1 from "../img/c-1.jpg";
import c2 from "../img/c-2.jpg";
import thumb1 from "../img/thumb1.png";
import thumb2 from "../img/thumb2.png";
import shape1 from "../img/shape1.svg";
import shape2 from "../img/shape2.svg";
// import { NavLink } from "react-router-dom";

const Home = () => {

  return (
    <div>
      {/* Head  */}
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
      {/* Head  */}
      {/* Intro  */}
      <div class="section large-padding-tb overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="optech-thumb extra-mr">
                <img
                  data-aos="fade-up"
                  data-aos-duration="600"
                  alt="Main IT Solutions Thumbnail"
                  class="h-auto w-100 aos-init aos-animate"
                  sizes="100vw"
                  decoding="async" src={thumb1} />
                <div class="optech-thumb-position aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
                  <img
                    alt="Additional IT Solutions Thumbnail" class="h-auto w-100" decoding="async" src={thumb2} />
                </div>
                <div class="optech-shape1">
                  <img
                    alt="Decorative Shape 1"
                    width="133"
                    height="200"
                    decoding="async"
                    src={shape1} />
                </div>
                <div class="optech-shape2">
                  <img
                    alt="Decorative Shape 2"
                    width="104"
                    height="107"
                    decoding="async"
                    src={shape2} />
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-end">
              <div class="optech-default-content ml40">
                <h2>More than 25+ years we provide IT solutions</h2>
                <h5>During this time, we’ve built a reputation for excellent client satisfaction as evidenced by our achievements.</h5>
                <p>Each demo built with Teba will look unique. You can customize almost any aspect of your website's appearance with just a few clicks. Each demo built with Teba will offer a different design.</p>
                <div class="optech-extra-mt">
                  <a class="optech-default-btn" data-text="More About Us" href="/about-us">
                    <span class="btn-wraper">More About Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Intro  */}

      {/*Services*/}
      <div className="bg-light1">
        <div class="sectin  optech-section-padding">
          <div class="container">
            <div class="optech-section-title center">
              <h2>Our awesome services to give you success</h2>
            </div>
          </div>
          <div class="swiper-wrapper justify-content-center">
            <div class="swiper-slide swiper-slide-active" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="0">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <i class="fa fa-grav" aria-hidden="true"></i>

                </div>
                <div class="optech-iconbox-data">
                  <h5>Data Tracking <br /> Security</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-next" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="1">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon5.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>IT Management <br /> Service</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="2">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon6.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>UI/UX &amp; Br/anding <br /> Identity</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="3">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon7.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>Web &amp; Mobile App <br /> Development</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-wrapper justify-content-center mt-5">
            <div class="swiper-slide swiper-slide-active" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="0">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <i class="fa fa-grav" aria-hidden="true"></i>

                </div>
                <div class="optech-iconbox-data">
                  <h5>Data Tracking <br /> Security</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-next" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="1">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon5.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>IT Management <br /> Service</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="2">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon6.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>UI/UX &amp; Br/anding <br /> Identity</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide" style={{ width: "292.167px", marginRight: "30px" }} data-swiper-slide-index="3">
              <div class="optech-iconbox-wrap">
                <div class="optech-iconbox-icon">
                  <img alt="icon" width="36" height="36" decoding="async"
                    src="/assets/images/iconbox/icon7.svg" style={{ color: "transparent" }} />
                </div>
                <div class="optech-iconbox-data">
                  <h5>Web &amp; Mobile App <br /> Development</h5>
                  <p>Developing a comprehensive IT strategy that aligns.</p>
                  <a class="optech-icon-btn" href="/service-details">
                    <i class="icon-show ri-arrow-right-line"></i>
                    <span>Learn More</span>
                    <i class="icon-hide ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Services*/}

      {/* About  */}
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
        <div class="container my-5">
          <div class="row">
            <div class="col-lg-6 col-xl-6">
              <div class="about-right">
                <div class="group-images">
                  <img
                    src={c1}
                    alt="About Bottom "
                  />
                  <div class="about-top">
                    <img
                      src={c2}
                      alt="About Top "
                    />
                  </div>
                  <div class="about-skills">
                    <div class="signle-skill">
                      <svg
                        class="CircularProgressbar progress-bar-circle"
                        viewBox="0 0 100 100"
                      >
                        <path
                          class="CircularProgressbar-trail"
                          d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                          stroke-width="8"
                          fill-opacity="0"
                        ></path>
                        <path
                          class="CircularProgressbar-path"
                          d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                          stroke-width="8"
                          fill-opacity="0"
                          style={{
                            strokeDasharray: "289.027",
                            strokeDashoffset: "43.354",
                          }}
                        ></path>
                        <text class="CircularProgressbar-text" x="50" y="50">
                          85%
                        </text>
                      </svg>
                      <div class="skill-content">
                        <h6>Web</h6>
                        <p>Clean Design</p>
                      </div>
                    </div>

                    <div class="signle-skill xsm">
                      <svg
                        class="CircularProgressbar progress-bar-circle"
                        viewBox="0 0 100 100"
                      >
                        <path
                          class="CircularProgressbar-trail"
                          d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                          stroke-width="8"
                          fill-opacity="0"
                        ></path>
                        <path
                          class="CircularProgressbar-path"
                          d="
                          M 50,50
                          m 0,-46
                          a 46,46 0 1 1 0,92
                          a 46,46 0 1 1 0,-92
                        "
                          stroke-width="8"
                          fill-opacity="0"
                          style={{
                            strokeDasharray: "289.027",
                            strokeDashoffset: "92.4885",
                          }}
                        ></path>
                        <text class="CircularProgressbar-text" x="50" y="50">
                          68%
                        </text>
                      </svg>
                      <div class="skill-content">
                        <h6>App</h6>
                        <p>Developing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <div class="about-left">
                <div class="title black">
                  <h2 class="mb-15">Direction with our company.</h2>
                </div>
                <p>
                  Integer purus odio, placerat nec rhoncus in, ullamcorper nec
                  dolor. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Praesent nec neque at
                  dolor venenatis consectetur eu quis est. Donec lacinia
                  placerat felis non aliquam. Integer purus odio.
                </p>
                <div class="cmn-btn">
                  <a href="/about">About More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* About  */}

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
                <span>Why Choose Us</span>
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

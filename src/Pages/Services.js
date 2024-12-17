import React from "react";
import "../css/services.css";
import "../css/main.css";
// import ico_1 from "../img/service-icon-1.png";
// import ico_2 from "../img/service-icon-2.png";
// import ico_3 from "../img/service-icon-3.png";
// import ico_4 from "../img/service-icon-4.png";
// import ico_5 from "../img/service-icon-5.png";
// import ico_6 from "../img/service-icon-6.png";
// import ico_7 from "../img/service-icon-7.png";
// import arrow from "../img/arrow-circle.png";
import step_1 from "../img/step-1.png"
import step_2 from "../img/step-2.jpg"
import step_3 from "../img/step-3.jpg"

const Services = () => {
  return (
    <div>
      {/* Head  */}
      <section>
      <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <h1>Services</h1>
                <nav>
                  <a href="/">Home</a>
                  <i class="bi bi-slash"></i>
                  <span>Services</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
      {/* Head  */}
      {/* Services  */}
      {/* <section className="service-area sec-pad">
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-12">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="single-service">
              <span className="count">01</span>
              <div className="service-icon">
                <img src={ico_1} alt="Web Design Icon" />
              </div>
              <div className="service-content">
                <h4>Web Design</h4>
                <p>Integer purus odio, placerat in in, ullamcorper nec dolor.</p>
                <a href="/service-details">
                  Read More
                  <img src={arrow} alt="Arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="single-service">
              <span className="count">02</span>
              <div className="service-icon">
                <img src={ico_2} alt="App Design Icon" />
              </div>
              <div className="service-content">
                <h4>App Design</h4>
                <p>Integer purus odio, placerat in in, ullamcorper nec dolor.</p>
                <a href="/service-details">
                  Read More
                  <img src={arrow} alt="Arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="single-service">
              <span className="count">03</span>
              <div className="service-icon">
                <img src={ico_3} alt="Developing Icon" />
              </div>
              <div className="service-content">
                <h4>Developing</h4>
                <p>Integer purus odio, placerat in in, ullamcorper nec dolor.</p>
                <a href="/service-details">
                  Read More
                  <img src={arrow} alt="Arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="single-service">
              <span className="count">04</span>
              <div className="service-icon">
                <img src={ico_4} alt="Graphic Design Icon" />
              </div>
              <div className="service-content">
                <h4>Graphic Design</h4>
                <p>Integer purus odio, placerat in in, ullamcorper nec dolor.</p>
                <a href="/service-details">
                  Read More
                  <img src={arrow} alt="Arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="single-service">
              <span className="count">05</span>
              <div className="service-icon">
                <img src={ico_5} alt="Video Animation Icon" />
              </div>
              <div className="service-content">
                <h4>Video Animation</h4>
                <p>Integer purus odio, placerat in in, ullamcorper nec dolor.</p>
                <a href="/service-details">
                  Read More
                  <img src={arrow} alt="Arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="single-service">
              <span className="count">06</span>
              <div className="service-icon">
                <img src={ico_6} alt="3D Design Icon" />
              </div>
              <div className="service-content">
                <h4>3D Design</h4>
                <p>Integer purus odio, placerat in in, ullamcorper nec dolor.</p>
                <a href="/service-details">
                  Read More
                  <img src={arrow} alt="Arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="single-service">
              <span className="count">07</span>
              <div className="service-icon">
                <img src={ico_7} alt="UI/UX Design Icon" />
              </div>
              <div className="service-content">
                <h4>UI/UX Design</h4>
                <p>Integer purus odio, placerat in in, ullamcorper nec dolor.</p>
                <a href="/service-details">
                  Read More
                  <img src={arrow} alt="Arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
  <div className="bg-light1">
        <div class="sectin  optech-section-padding">
          <div class="container">
            {/* <div class="optech-section-title center">
              <h2>Our awesome services to give you success</h2>
            </div> */}
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

      {/* Services  */}
      {/* procedure */}
      <section class="service-details sec-mar">
        <div class="container">
          <div class="single-service-work-process">
            <h3>How We Work in Our Services</h3>
            <div class="single-step">
              <div class="row">
                <div class="col-md-8 col-xl-8 or2">
                  <div class="step">
                    <div class="step-count">
                      <span>01</span>
                    </div>
                    <h4>Wireframe &amp; Design</h4>
                    <p>
                      In euismod lacinia rhoncus. Morbi ornare, lectus quis
                      mattis finibus, metus sapien venenatis orci, eget lacinia
                      magna justo vehiculametus. Morbi sit amet erat faucibus,
                      sagittis libero sed, condimentum tortor. Aenean ac nunc
                      dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-xl-4 or1">
                  <div class="step-img">
                    <img src={step_1} alt="Step 1" />
                  </div>
                </div>
              </div>
            </div>

            <div class="single-step">
              <div class="row">
                <div class="col-md-4 col-xl-4">
                  <div class="step-img">
                    <img src={step_2} alt="Step 2" />
                  </div>
                </div>
                <div class="col-md-8 col-xl-8">
                  <div class="step">
                    <div class="step-count">
                      <span>02</span>
                    </div>
                    <h4>Developing</h4>
                    <p>
                      In euismod lacinia rhoncus. Morbi ornare, lectus quis
                      mattis finibus, metus sapien venenatis orci, eget lacinia
                      magna justo vehiculametus. Morbi sit amet erat faucibus,
                      sagittis libero sed, condimentum tortor. Aenean ac nunc
                      dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="single-step">
              <div class="row">
                <div class="col-md-8 col-xl-8 or2">
                  <div class="step">
                    <div class="step-count">
                      <span>03</span>
                    </div>
                    <h4>Checkup &amp; Launch</h4>
                    <p>
                      In euismod lacinia rhoncus. Morbi ornare, lectus quis
                      mattis finibus, metus sapien venenatis orci, eget lacinia
                      magna justo vehiculametus. Morbi sit amet erat faucibus,
                      sagittis libero sed, condimentum tortor. Aenean ac nunc
                      dolor. Quisque vestibulum mollis nisi, vel dictum nisi.
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-xl-4 or1">
                  <div class="step-img">
                    <img src={step_3} alt="Step 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* procedure */}
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

export default Services;

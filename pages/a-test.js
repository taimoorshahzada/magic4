import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "../public/loader";
import Navbar from "./Navbar/navbar";
import { useEffect } from "react";
import Footer from "./Footer";
import TextOnImage from "../components/TextOnImage";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ATest() {
  useEffect(() => {
    // Update the document title using the browser API
    $(".gallery-name-text-wrap").on("click", function () {
      $(this).addClass("no-click");
    });
    /* jQuery Code Here */
    $(".gallery-name-text-wrap").on("click", function () {
      $(this).addClass("no-click");
    });
    $("a").on("mouseenter", function () {
      $(".cursor").addClass("hover");
    });
    // Hover Off Button
    $("a").on("mouseleave", function () {
      $(".cursor").removeClass("hover");
    });
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
    // Hide Transition on Window Width Resize
    setTimeout(() => {
      $(window).on("resize", function () {
        setTimeout(() => {
          $(".transition").css("display", "none");
        }, 50);
      });
    });
    //Enable Smooth Scrolling
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true,
    });

    $(".hamburger-wrap").on("click", function () {
      $("body").toggleClass("no-scroll-b");
    });

    /* jQuery Code Here */
  });
  return (
    <div className="scroll-container">
      <Head>
        {/* <title>Bla Agency</title>
            <link rel="icon" href="/favicon.ico" /> */}
        <script src="/jquery.min.js"></script>
        <script src="/global.js"></script>
        <script src="/locomotive-scroll.min.js"></script>
        <link
          rel="stylesheet"
          href="https://raw.githubusercontent.com/locomotivemtl/locomotive-scroll/master/dist/locomotive-scroll.css"
        />
        <link
          href="/nicole-nero-photography.webflow.e659089d1.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <main>
        <Navbar />
        <div className="content-section" data-scroll-section="1">
          <div className="container">
            <div className="content-inner">
              <div className="content-desc">
                <div className="mask">
                  <p id="span1">
                    La magia de crear proyectos, convertirlos en historias y
                    hacerlos realidad. Un camino que queremos construir contigo
                    desde el principio, desarrollando tu idea y haciendo algo
                    único y diferente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" data-scroll-section="2">
          <TextOnImage
            text1={"MAGIC4"}
            text2={"Events"}
            image={"/images/magic1.jpg"}
            imageSmall={"/images/Magic4U_Revolution_on_ice.webp"}
          />
          <TextOnImage
            text1={"MAGIC4"}
            text2={"Brands"}
            image={"/images/magic2.jpg"}
            imageSmall={"/images/Magic4U_Allianz_xuan_lan.webp"}
          />
          <TextOnImage
            text1={"MAGIC4"}
            text2={"Management"}
            image={"/images/magic3.jpg"}
            imageSmall={"/images/Magic4U_javier_fernandez.webp"}
          />
        </div>
        {/* <div className="magic-section" data-scroll-section="2">
					<div className="container">
						<div className="magic-inner">
							<div className="section-title">
								<h2 id="magic4-title3">
									MAGIC4<span>Events</span>
								</h2>
							</div>
							<div className="magic-box-outer">
								<img src="/images/magic1.jpg" className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>

				<div className="magic-section" data-scroll-section="3">
					<div className="container">
						<div className="magic-inner">
							<div className="section-title">
								<h2 id="magic4-title3">
									MAGIC4<span>Brands</span>
								</h2>
							</div>
							<div className="magic-box-outer">
								<img src="/images/magic2.jpg" className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>

				<div className="magic-section" data-scroll-section="2">
					<div className="container">
						<div className="magic-inner">
							<div className="section-title">
								<h2 id="magic4-title3">MAGIC4 Management</h2>
							</div>
							<div className="magic-box-outer">
								<img src="/images/magic3.jpg" className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div> */}

        <div className="madrid-section" data-scroll-section="3">
          <div className="madrid-top">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="title-text">Descubre MAGICU4</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div data-scroll-section="4" className="section-nn venues bg-texture">
            <div className="w-embed"></div>

            <div id="sticky1" className="venue-wrapp  er">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="venue-item-cl w-dyn-item">
                    <a
                      data-scroll="1"
                      data-scroll-class="in-view"
                      data-scroll-offset="0%,49%"
                      data-scroll-repeat="true"
                      href="stories/chic-garden-wedding-in-the-hudson-valley.html"
                      className="venue-link-wrap w-inline-block"
                    >
                      <div className="venue-text-flex v">
                        <div className="div-hide flex-v">
                          <h2 className="venue-name-text">Christen + Eric</h2>
                          <h2 className="venue-name-text abs">View Gallery</h2>
                        </div>
                        <div className="venue-text-number d">8.1.2021</div>
                      </div>
                      <div
                        data-scroll="1"
                        data-scroll-sticky="1"
                        data-scroll-target="#sticky1"
                        className="sticky-venue-bg"
                      >
                        <img
                          src="/animation/60ba297cb821af9468768d5f/622378cc989d59a5da692875_nicole-nero-photography14.jpg"
                          loading="eager"
                          alt=""
                          sizes="100vw"
                          srcSet="https://assets.website-files.com/60ba297cb821af9468768d5f/622378cc989d59a5da692875_nicole-nero-photography14-p-1080.jpeg 1080w, https://assets.website-files.com/60ba297cb821af9468768d5f/622378cc989d59a5da692875_nicole-nero-photography14-p-1600.jpeg 1600w, https://assets.website-files.com/60ba297cb821af9468768d5f/622378cc989d59a5da692875_nicole-nero-photography14.jpeg 1900w"
                          className="venue-image-1"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="venue-item-cl w-dyn-item">
                    <a
                      data-scroll="1"
                      data-scroll-class="in-view"
                      data-scroll-offset="50%,49%"
                      data-scroll-repeat="true"
                      href="stories/a-summer-wedding-at-the-aurora-inn.html"
                      className="venue-link-wrap w-inline-block"
                    >
                      <div className="venue-text-flex v">
                        <div className="div-hide flex-v">
                          <h2 className="venue-name-text">Maddie + Gabe</h2>
                          <h2 className="venue-name-text abs">View Gallery</h2>
                        </div>
                        <div className="venue-text-number d">9.24.2021</div>
                      </div>
                      <div
                        data-scroll="1"
                        data-scroll-sticky="1"
                        data-scroll-target="#sticky1"
                        className="sticky-venue-bg"
                      >
                        <img
                          src="/animation/60ba297cb821af9468768d5f/6223792c36f18b7e8ecfb963_nicole-nero-photography15.jpg"
                          loading="eager"
                          alt=""
                          sizes="100vw"
                          srcSet="https://assets.website-files.com/60ba297cb821af9468768d5f/6223792c36f18b7e8ecfb963_nicole-nero-photography15-p-500.jpeg 500w, https://assets.website-files.com/60ba297cb821af9468768d5f/6223792c36f18b7e8ecfb963_nicole-nero-photography15-p-800.jpeg 800w, https://assets.website-files.com/60ba297cb821af9468768d5f/6223792c36f18b7e8ecfb963_nicole-nero-photography15.jpeg 1000w"
                          className="venue-image-1"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="venue-item-cl w-dyn-item">
                    <a
                      data-scroll="1"
                      data-scroll-class="in-view"
                      data-scroll-offset="50%,49%"
                      data-scroll-repeat="true"
                      href="stories/hip-and-detailed-basilica-hudson-wedding.html"
                      className="venue-link-wrap w-inline-block"
                    >
                      <div className="venue-text-flex v">
                        <div className="div-hide flex-v">
                          <h2 className="venue-name-text">Keri + Ben</h2>
                          <h2 className="venue-name-text abs">View Gallery</h2>
                        </div>
                        <div className="venue-text-number d">8.28.2021</div>
                      </div>
                      <div
                        data-scroll="1"
                        data-scroll-sticky="1"
                        data-scroll-target="#sticky1"
                        className="sticky-venue-bg"
                      >
                        <img
                          src="/animation/60ba297cb821af9468768d5f/62237957d24c68122b67e067_nicole-nero-photography16.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://assets.website-files.com/60ba297cb821af9468768d5f/62237957d24c68122b67e067_nicole-nero-photography16-p-500.jpeg 500w, https://assets.website-files.com/60ba297cb821af9468768d5f/62237957d24c68122b67e067_nicole-nero-photography16-p-1080.jpeg 1080w, https://assets.website-files.com/60ba297cb821af9468768d5f/62237957d24c68122b67e067_nicole-nero-photography16-p-1600.jpeg 1600w, https://assets.website-files.com/60ba297cb821af9468768d5f/62237957d24c68122b67e067_nicole-nero-photography16.jpg 1900w"
                          className="venue-image-1"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="venue-item-cl w-dyn-item">
                    <a
                      data-scroll="1"
                      data-scroll-class="in-view"
                      data-scroll-offset="50%,49%"
                      data-scroll-repeat="true"
                      href="stories/winter-loft-433-wedding-with-allison-and-josh"
                      className="venue-link-wrap w-inline-block"
                    >
                      <div className="venue-text-flex v">
                        <div className="div-hide flex-v">
                          <h2 className="venue-name-text">Allison + Josh</h2>
                          <h2 className="venue-name-text abs">View Gallery</h2>
                        </div>
                        <div className="venue-text-number d">3.5.2022</div>
                      </div>
                      <div
                        data-scroll="1"
                        data-scroll-sticky="1"
                        data-scroll-target="#sticky1"
                        className="sticky-venue-bg"
                      >
                        <img
                          src="/animation/60ba297cb821af9468768d5f/62261fbbd6d9fd987f084b66_loft-433-wedding--0110.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://assets.website-files.com/60ba297cb821af9468768d5f/62261fbbd6d9fd987f084b66_loft-433-wedding--0110-p-500.jpeg 500w, https://assets.website-files.com/60ba297cb821af9468768d5f/62261fbbd6d9fd987f084b66_loft-433-wedding--0110-p-800.jpeg 800w, https://assets.website-files.com/60ba297cb821af9468768d5f/62261fbbd6d9fd987f084b66_loft-433-wedding--0110-p-1080.jpeg 1080w, https://assets.website-files.com/60ba297cb821af9468768d5f/62261fbbd6d9fd987f084b66_loft-433-wedding--0110-p-1600.jpeg 1600w, https://assets.website-files.com/60ba297cb821af9468768d5f/62261fbbd6d9fd987f084b66_loft-433-wedding--0110.jpg 1900w"
                          className="venue-image-1"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="venue-item-cl w-dyn-item">
                    <a
                      data-scroll="1"
                      data-scroll-class="in-view"
                      data-scroll-offset="50%,49%"
                      data-scroll-repeat="true"
                      href="stories/candle-lit-engagement-photos-with-taylor-and-luke"
                      className="venue-link-wrap w-inline-block"
                    >
                      <div className="venue-text-flex v">
                        <div className="div-hide flex-v">
                          <h2 className="venue-name-text">Taylor + Luke</h2>
                          <h2 className="venue-name-text abs">View Gallery</h2>
                        </div>
                        <div className="venue-text-number d">2.20.2022</div>
                      </div>
                      <div
                        data-scroll="1"
                        data-scroll-sticky="1"
                        data-scroll-target="#sticky1"
                        className="sticky-venue-bg"
                      >
                        <img
                          src="/animation/60ba297cb821af9468768d5f/621669d37edc51085d521f83_candle-lit-engagement-session-0012.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://assets.website-files.com/60ba297cb821af9468768d5f/621669d37edc51085d521f83_candle-lit-engagement-session-0012-p-1080.jpeg 1080w, https://assets.website-files.com/60ba297cb821af9468768d5f/621669d37edc51085d521f83_candle-lit-engagement-session-0012-p-1600.jpeg 1600w, https://assets.website-files.com/60ba297cb821af9468768d5f/621669d37edc51085d521f83_candle-lit-engagement-session-0012.jpg 1900w"
                          className="venue-image-1"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="venue-item-cl w-dyn-item">
                    <a
                      data-scroll="1"
                      data-scroll-class="in-view"
                      data-scroll-offset="50%,49%"
                      data-scroll-repeat="true"
                      href="stories/direct-flash-engagement-session-with-taylor-and-luke.html"
                      className="venue-link-wrap w-inline-block"
                    >
                      <div className="venue-text-flex v">
                        <div className="div-hide flex-v">
                          <h2 className="venue-name-text">Taylor + Luke</h2>
                          <h2 className="venue-name-text abs">View Gallery</h2>
                        </div>
                        <div className="venue-text-number d">2.19.2022</div>
                      </div>
                      <div
                        data-scroll="1"
                        data-scroll-sticky="1"
                        data-scroll-target="#sticky1"
                        className="sticky-venue-bg"
                      >
                        <img
                          src="/animation/60ba297cb821af9468768d5f/62166910a954b4ace0473a65_direct-flash-engagement-session--0024.jpg"
                          loading="lazy"
                          alt=""
                          sizes="100vw"
                          srcSet="https://assets.website-files.com/60ba297cb821af9468768d5f/62166910a954b4ace0473a65_direct-flash-engagement-session--0024-p-500.jpeg 500w, https://assets.website-files.com/60ba297cb821af9468768d5f/62166910a954b4ace0473a65_direct-flash-engagement-session--0024-p-800.jpeg 800w, https://assets.website-files.com/60ba297cb821af9468768d5f/62166910a954b4ace0473a65_direct-flash-engagement-session--0024-p-1080.jpeg 1080w, https://assets.website-files.com/60ba297cb821af9468768d5f/62166910a954b4ace0473a65_direct-flash-engagement-session--0024-p-1600.jpeg 1600w, https://assets.website-files.com/60ba297cb821af9468768d5f/62166910a954b4ace0473a65_direct-flash-engagement-session--0024.jpg 1900w"
                          className="venue-image-1"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

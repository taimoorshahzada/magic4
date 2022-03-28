import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import "../public/loader";
import Navbar from "./Navbar";
import Link from "next/link";
import Footer from "./Footer/FooterLight";
import { useEffect } from "react";
import Heads from "./Head";
import gsap from "gsap";
export default function Proyectos() {
  useEffect(() => {
    setTimeout(function () {
      const cursorBee = document.querySelector(".cursor-bee");
      const cursorEye = document.querySelector(".cursor-eye");
      let scale = 1;

      function mousemoveHandler(e) {
        const target = e.target;
        const tl = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
            //   ease: "power1.easeOut"
            ease: "slow(0.7, 0.7, false)",
            //   ease: "{ right: 100, ease:Power3.easeIn}, 2)"
          },
        });

        //   if (target.tagName.toLowerCase() === "img") {
        //     tl.to(cursorBee, {
        //       opacity: 0
        //     }).to(
        //       cursorEye,
        //       {
        //         opacity: 1
        //       },
        //       "-=0.5"
        //     );
        //   } else {
        if (target.classList.contains("line-animation")) {
          scale = 10;
        } else {
          scale = 1;
        }

        tl.to(cursorBee, {
          opacity: 1,
          scale: scale,
        }).to(
          cursorEye,
          {
            opacity: 0,
            scale: scale,
          },
          "-=0.5"
        );
      }
      // }

      function mouseleaveHandler() {
        gsap.to(cursorBee, {
          opacity: 0,
        });
      }

      document.addEventListener("mousemove", mousemoveHandler);
      document.addEventListener("mouseleave", mouseleaveHandler);
    }, 500);
  });
  return (
    <div className="">
      <Heads />
      <main>
        <Navbar />

        <div className="main-heading-section ">
          <div className="container">
            <div className="main-header-inner" style={{ overflow: "hidden" }}>
              <div className="main-header-title" style={{ overflow: "hidden" }}>
                <h1
                  className="animate__animated animate__fadeInUp animate__delay-5ms animate__slow"
                  style={{ overflow: "hidden" }}
                >
                  Proyectos
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="border-bottoms"></div>

        <div className="barcode-section">
          <div className="container">
            <div className="barcode-inner">
              <div className="row align-items-center">
                <div className="col-lg-3 barcode-left-outer">
                  <div className="barcode-left">
                    <div className="barcode-left-inner">
                      <div className="barcode-img">
                        <img
                          src="/images/barcode-img.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 barcode-right-outer">
                  <div className="barcode-right">
                    <div className="barcode-right-inner">
                      <div className="barcode-content">
                        <div className="section-desc">
                          <p>
                            Construimos y personalizamos experiencias digitales,
                            creando marcas duraderas y potentes, trabajando tu
                            idea en el entorno digital de principio a fin,
                            desarrollando todo su potencial.
                          </p>
                          <div className="barcode-btn-outer">
                            <Link href="contacto">
                              <a className="btn-link contact-text">Contacto</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-section">
          <div className="container">
            <div className="projects-inner">
              <div className="projects-box-outer" style={{ padding: "0px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img ceil">
                          <img
                            src="/images/p-1.png"
                            className="line-animation img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>SoloPerformance</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              Rediseño app para una mejora de la usabilidad y la
                              conversión.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-primary">
                                  Auditoría digital
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-danger">
                                  Branding
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-success">
                                  User experience
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-secondary">
                                  Marketing digital
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img">
                          <img
                            src="/images/p-2.png"
                            className="img-fluid line-animation"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>Atlerhome</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              Rediseñamos la marca de manera global, aumentando
                              su impacto en el mercado.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-primary">
                                  Auditoría digital
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-danger">
                                  Branding
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-success">
                                  User experience
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-secondary">
                                  Marketing digital
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img">
                          <img
                            src="/images/p-3.png"
                            className="img-fluid line-animation"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>Allianz Xuan Lan</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              Diseño y desarrollo digital para implantar la
                              imagen de marca y el evento en el entorno online.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-primary2">
                                  Diseño y desarrollo web
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-success">
                                  User experience
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img">
                          <img
                            src="/images/p-4.png"
                            className="img-fluid line-animation"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>Madrid Escena</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              Diseño y desarrollo digital para nuestros
                              colaboradores Magic4U y su festival Madrid Escena.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-primary2">
                                  Diseño y desarrollo web
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-success">
                                  User experience
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img">
                          <img
                            src="/images/p-5.png"
                            className="img-fluid line-animation"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>Ntity Brand</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              Estrategia, diseño y gestión de redes sociales
                              enfocadas en renovar la imagen de marca y la venta
                              online de sus exclusivos productos.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-warning">
                                  Social media
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-secondary">
                                  Marketing digital
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img">
                          <img
                            src="/images/p-6.png"
                            className="img-fluid line-animation"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>Vilagos</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              Desarrollo de producto y branding. Un proyecto
                              diseñado y desarrollado desde cero, para crear el
                              Civitatis del turismo rural.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-primary2">
                                  Diseño y desarrollo web
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-danger">
                                  Branding
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-success">
                                  User experience
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img">
                          <img
                            src="/images/p-7.png"
                            className="img-fluid line-animation"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>Bebenube</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              Una estrategia de Marketing Digital 360 para la
                              marca líder del sector de las suscripciones de
                              bebés.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-warning">
                                  Social media
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-secondary">
                                  Marketing digital
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img">
                          <img
                            src="/images/p-8.png"
                            className="img-fluid line-animation"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>Yalma</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              Estrategia, diseño y gestión de redes sociales
                              para el lanzamiento online de una de las mejores
                              ginebras Premium de España.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-warning">
                                  Social media
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-secondary">
                                  Marketing digital
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img">
                          <img
                            src="/images/p-9.png"
                            className="img-fluid line-animation"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>Cris4life</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              Un proyecto global para Cris4life. Una imagen de
                              marca única, para transmitir y captar a sus
                              potenciales clientes.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-warning">
                                  Social media
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-danger">
                                  Branding
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-success">
                                  User experience
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-secondary">
                                  Marketing digital
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img">
                          <img
                            src="/images/p-10.png"
                            className="img-fluid line-animation"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>Wanderlust</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              La cadena de restauración Wanderlust confía en Bla
                              Agency para el diseño y desarrollo de su nueva
                              página web.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-primary2">
                                  Diseño y desarrollo web
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-success">
                                  User experience
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="projects-box">
                      <div className="projects-box-inner">
                        <div className="projects-box-img">
                          <img
                            src="/images/p-11.png"
                            className="img-fluid line-animation"
                            alt=""
                          />
                        </div>
                        <div className="projects-box-content">
                          <div className="section-title">
                            <h3>Navarretinto</h3>
                          </div>
                          <div className="section-desc">
                            <p>
                              Estrategia, diseño y gestión de redes sociales
                              enfocadas en renovar la imagen de y la venta
                              online de sus exclusivos productos.
                            </p>
                          </div>
                          <div className="projects-box-badges">
                            <ul>
                              <li>
                                <a href="#" className="badge badge-warning">
                                  Social media
                                </a>
                              </li>
                              <li>
                                <a href="#" className="badge badge-secondary">
                                  Marketing digital
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* <div className="projects-box-link">
                                                      <a href="#" className="btn-link">Coming soon</a>
                                                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cursor cursor-bee">
            <img src="./images/dot-mini.svg" alt="" />
          </div>
          <div className="cursor cursor-eye">
            <img src="./images/dot-maxi.svg" alt="" />
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{``}</style>
    </div>
  );
}

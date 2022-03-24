import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import '../public/loader'
import Navbar from './Navbar'
import {useEffect} from 'react';
import Footer from './Footer/FooterLight';
import Link from 'next/link';
import Heads from './Head';
export default function BrandingYCreativd() {
    useEffect(() => {
    /* Cursor Animation start */
    const cursorBee = document.querySelector(".cursor-bee");
    const cursorEye = document.querySelector(".cursor-eye");
    let scale = 1;
    
    function mousemoveHandler(e) {
      const target = e.target;
      const tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
          ease: "slow(0.7, 0.7, false)"
        }
      });
    
      // JUST FOR MY LOGO
      // if (
      //   target.closest(".page-footer") ||
      //   target.classList.contains("page-footer")
      // ) {
      //   gsap.to(".cursor", {
      //     opacity: 0
      //   });
      //   return;
      // }
    
      // if (target.tagName.toLowerCase() === "img") {
      if (target.tagName.toLowerCase() === "abc") {
        tl.to(cursorBee, {
          opacity: 0
        }).to(
          cursorEye,
          {
            opacity: 1
          },
          "-=0.5"
        );
      } else {
        if (target.classList.contains("line-animation")) {
          scale = 4;
        } else {
          scale = 1;
        }
    
        tl.to(cursorBee, {
          opacity: 1,
          scale: scale
        }).to(
          cursorEye,
          {
            opacity: 0
          },
          "-=0.5"
        );
      }
    }
    
    function mouseleaveHandler() {
      gsap.to(cursorBee, {
        opacity: 0
      });
    }
    
    document.addEventListener("mousemove", mousemoveHandler);
    document.addEventListener("mouseleave", mouseleaveHandler);
    


        /* Cursor Animation end */
      });
      return (
        <div className="">
          <Heads/>
            
          <main>
            <Navbar/>
    
    
    
              <div className="main-heading-section main-heading-branding">
                  <div className="container">
                      <div className="main-header-inner" style={{overflow:"hidden"}}>
                          <div className="main-header-title" style={{overflow:"hidden"}}>
                              <h1 className='animate__animated animate__fadeInUp animate__delay-5ms animate__slow' style={{overflow:"hidden"}}>Branding y
                              </h1>
                          </div>
                          <div className="main-header-title" style={{overflow:"hidden"}}>
                              <h1 className='animate__animated animate__fadeInUp animate__delay-5ms animate__slow' style={{overflow:"hidden"}}>
                              <span className="creative">creatividad</span>
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
                                              <img src="/images/barcode-img.svg" className="img-fluid" alt=""/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-9 barcode-right-outer">
                                  <div className="barcode-right">
                                      <div className="barcode-right-inner">
                                          <div className="barcode-content">
                                              <div className="section-desc">
                                                  <p>Creamos y diseñamos marcas únicas, una experiencia de identidad que transmite la esencia de la marca. Nuestro equipo te acompañará desde la auditoría inicial, la estrategia y creatividad hasta los diseños finales.
                                                  </p>
                                                  <div className="barcode-btn-outer">
                                                    <Link href="contacto" >
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

              <div className="case-studies-section case-studies-section-2">
                  <div className="section-title">
                      <div className="container">
                          <h2>Proyectos relacionados</h2>
                      </div>
                  </div>
                  <div className="container">
                      <div className="case-studies-inner">
                          <div className="case-studies-img">
                              <img src="/images/img-2.png" className="img-fluid" alt=""/>
                          </div>
                          <div className="case-studies-box-outer">
                              <div className="row">
                                  <div className="col-lg-3">
                                      <div className="case-left">
                                          <div className="case-left-inner">
                                              <div className="section-title">
                                                  <h3>Alterhome</h3>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-9">
                                      <div className="case-right">
                                          <div className="case-right-inner">
                                              <div className="case-content">
                                                  <div className="section-desc">
                                                      <p>Proyecto de rebranding para crear una nueva identidad diferenciadora y crear su máxima expersión digital. Estrategia. Branding. Esencia de marca. Diseño web.</p>
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
    
    
              <div className="services-section border-top-0">
                  <div className="container_">
                      <div className="services-inner">
                          <div className="section-title">
                              <div className="container">
                                  <h2>Servicios</h2>
                              </div>
                          </div>
                          <div className="services-box-outer no-pointer">
                              <ul>
                                  <li><a href="#">Consultoría de marca</a></li>
                                  <li><a href="#">Promesa de valor</a></li>
                                  <li><a href="#">Naming</a></li>
                                  <li><a href="#">Identidad visual</a></li>
                                  <li><a href="#">Guía de estilo</a></li>
                                  <li><a href="#">Relato de marca</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="cursor cursor-bee">
                <img src="./images/dot-mini.svg" alt=""/>
            </div>
            <div className="cursor cursor-eye">
                <img src="./images/dot-maxi.svg" alt=""/>
            </div>
    
          </main>
    
          <Footer/>
    
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
      )
}
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import '../public/loader'
import Navbar from './Navbar'
import {useEffect} from 'react';
import Link from 'next/link'
import Footer from './Footer/FooterLight';
import Heads from './Head';
export default function UserExperience() {
    useEffect(() => {
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
        
          if (target.tagName.toLowerCase() === "abc") {
        //   if (target.tagName.toLowerCase() === "img") {
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



              <div className="main-heading-section main-heading-user-exp">
                  <div className="container">
                      <div className="main-header-inner" style={{overflow:"hidden"}}>
                          <div className="main-header-title" style={{overflow:"hidden"}}>
                              <h1 className='animate__animated animate__fadeInUp animate__delay-5ms animate__slow' style={{overflow:"hidden"}}>User experience</h1>
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
                                                  <p>Trabajamos el producto de inicio a fin centrándonos en la experiencia del usuario. Analizando su comportamiento y como dicho producto soluciona su problema de una forma útil y sencilla.</p>
                                                  <div className="barcode-btn-outer">
                                                      <Link href="contacto" >
                                                        <a className="btn-link contact-text contact-text">Contacto</a>
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

              <div className="case-studies-section case-studies-section-2 case-studies-3">
                  <div className="section-title">
                      <div className="container">
                          <h2>Proyectos relacionados</h2>
                      </div>
                  </div>
                  <div className="container">
                      <div className="case-studies-inner">
                          <div className="case-studies-img">
                              <img src="/images/img-ux.png" className="img-fluid" alt=""/>
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
                                                      <p>Auditamos la app de SoloPerformance con el objetivo de acerla más accesible. Esto redujo la curva de aprendizaje de la plataforma.</p>
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
                          <div className="services-box-outer">
                              <ul>
                                  <li><a href="#">Research</a></li>
                                  <li><a href="#">UX Roles</a></li>
                                  <li><a href="#">Psicología del usuario</a></li>
                                  <li><a href="#">Termografía web</a></li>
                                  <li><a href="#">Accesibilidad</a></li>
                                  <li><a href="#">Analisis hurístico</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>



              <div className="cta-section">
                  <div className="container">
                      <div className="cta-inner">
                          <div className="section-title section-title-white text-center">
                              <h2>¿Podemos ayudarte en tu proyecto?</h2>
                          </div>
                          <div className="btn-cta-outer text-center">
                              <Link href="contacto" >
                                <a className="btn-link btn-link-white contact-text">Contacto</a>
                              </Link>
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

            {/* <footer>

                <div className="footer">
                    <div className="container">
                        <div className="footer-inner">
                            <div className="footer-top">
                                <div className="section-title">
                                    <h2>Diseñamos soluciones digitales</h2>
                                </div>
                            </div>
                            <div className="footer-bottom">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="footer-left">
                                            <div className="footer-left-inner">
                                                <div className="footer-logo">
                                                    <div className="logo">
                                                        <a href="#">Bla.</a>
                                                    </div>
                                                </div>
                                                <div className="footer-copy">
                                                    <p>© Copyright Bla Agency 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="footer-right">
                                            <div className="footer-right-inner">
                                                <div className="footer-email">
                                                    <p>sos@blaagency.com</p>
                                                </div>
                                                <div className="footer-social">
                                                    <ul>
                                                        <li><a href="#" target="_blank">
                                                            <img src="/images/Instagram.svg" className="img-fluid" alt=""/>
                                                            <img src="/images/Instagram-white.svg" className="img-fluid social-dark" alt=""/>
                                                        </a></li>
                                                        <li><a href="#" target="_blank">
                                                            <img src="/images/Linkedin.svg" className="img-fluid" alt=""/>
                                                            <img src="/images/Linkedin-white.svg" className="img-fluid  social-dark" alt=""/>
                                                        </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer> */}
            <Footer/>
    
          <style jsx global>{`
        
          `}</style>
        </div>
      )
}
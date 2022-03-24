import 'bootstrap/dist/css/bootstrap.css';
import '../../public/loader';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
export default function Navbar() {
  useEffect(() => {
    // Update the document title using the browser API
   
   /* jQuery Code Here */

   $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
    
    });

        $(document).ready(function(){

            $(".btn-links").click(function(){
                $('.header-menu-middle ul li span').addClass("animate__fadeOutUp");
                setTimeout(function(){
                    $('.header-menu-container').removeClass("animate__fadeInDown"); 
                    $('.header-menu-container').addClass("animate__fadeOutUp"); 
                }, 1000);

                setTimeout(function(){
                    $('.header-menu-container').removeClass("active"); 
                }, 1200);
            })
            $(".header-menu-btn").click(function(){
                if($('.header-menu-container').hasClass('active')){
                    $('.header-menu-middle ul li span').addClass("animate__fadeOutUp");

                    // console.log("hide");
                    setTimeout(function(){
                        $('.header-menu-container').removeClass("animate__fadeInDown"); 
                        $('.header-menu-container').addClass("animate__fadeOutUp"); 
                    }, 1000);

                    setTimeout(function(){
                        $('.header-menu-container').removeClass("active"); 
                    }, 1200);
                    
                }else{
                    // console.log("show");
                    $('.header-menu-container').addClass("active");
                        $('.header-menu-middle ul li span').addClass("animate__fadeInDown");
                        $('.header-menu-middle ul li span').removeClass("animate__fadeOutUp");
                        $('.header-menu-container').addClass("animate__fadeInDown"); 
                        $('.header-menu-container').removeClass("animate__fadeOutUp"); 
                }
            });

        });


        $(document).ready(function(){

            $(".header-menu-middle ul li a").hover(function(){
                $('.header-menu-middle ul li a').toggleClass("non-active");
                $(this).toggleClass("active");
            });
        });

        $(document).ready(function(){

            $(".header-menu-btn").click(function(){

                if($('.header-menu-container').hasClass('active')){
                }else{
                }


            });

        });



          /* jQuery Code Here */
  });
  return (
    <header className='header-default' >
      {/* <div id="navBarHideIt"> */}
      <div className="container">
        <div className="header-inner">
          <div className="row">
            <div className="col-6 align-self-center">
              <div className="header-left">
                <div className="logo">
                  <Link href="/">MAGIC4U</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="header-right">
                <div className="header-menu-btn">
                  <p>
                    <span className="header-text">Menu</span> <span className="header-dot" />
                  </p>
                </div>
              </div>
              <div className="header-menu-container animate__animated animate__fadeInDown animate_slower-1s">
                <div className="container manual-padding">
                  <div className="header-menu-top">
                    <div className="row">
                      <div className="col-6 align-self-center">
                        <div className="header-left">
                          <div className="logo">
                            <Link href="/">MAGIC4U</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="header-menu-btn">
                          <p>
                            <span className="header-text">Menu</span>{' '}
                            <span className="header-dot" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-menu-middle">
                    <ul>
                      <li>
                        <span className="animate__animated animate__fadeInDown animate__delay-5ms animate__slower 1s">
                          <Link href="/" className="btn-link">
                            Home
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span className="animate__animated animate__fadeInDown animate__delay-5ms animate__slower 1s">
                          <Link href="/proyectos" className="btn-link">
                            About
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span className="animate__animated animate__fadeInDown animate__delay-5ms animate__slower 1s">
                          <Link href="/metodo" className="btn-link">
                            Work
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span className="animate__animated animate__fadeInDown animate__delay-5ms animate__slower 1s">
                          <Link href="/contacto" className="btn-link">
                            Contact
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <style jsx global>{`
        p {
          cursor: pointer !important;
        }
      `}</style>
    </header>
  );
}

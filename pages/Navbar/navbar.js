import 'bootstrap/dist/css/bootstrap.css';
import '../../public/loader';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
export default function Navbar() {
  useEffect(() => {
    // Update the document title using the browser API

    /* jQuery Code Here */

    $('.navbar-collapse a').click(function () {
      $('.navbar-collapse').collapse('hide');
    });

    // Hide and show Header on Scrolling
    $(function () {
      var lastScrollTop = 0,
        delta = 15;
      $(window).scroll(function (event) {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) return;
        if (st > lastScrollTop && lastScrollTop > 0) {
          // downscroll code
          $('#headerContainer').css('top', '-80px');
        } else {
          // upscroll code
          $('#headerContainer').css('top', '0px');
        }
        lastScrollTop = st;
      });
    });

    $(document).ready(function () {
      $('.header-menu-btn').click(function () {
        if ($('.header-menu-container').hasClass('active')) {
          $('.header-menu-middle ul li span').addClass('animate__fadeOutUp');

          // console.log("hide");
          setTimeout(function () {
            $('.header-menu-container').removeClass('animate__fadeInDown');
            $('.header-menu-container').addClass('animate__fadeOutUp');
          }, 1000);

          setTimeout(function () {
            $('.header-menu-container').removeClass('active');
          }, 1200);
        } else {
          // console.log("show");
          $('.header-menu-container').addClass('active');
          $('.header-menu-middle ul li span').addClass('animate__fadeInDown');
          $('.header-menu-middle ul li span').removeClass('animate__fadeOutUp');
          $('.header-menu-container').addClass('animate__fadeInDown');
          $('.header-menu-container').removeClass('animate__fadeOutUp');
        }
      });
    });

    $(document).ready(function () {
      $('.header-menu-middle ul li a').hover(function () {
        $('.header-menu-middle ul li a').toggleClass('non-active');
        $(this).toggleClass('active');
      });
    });

    $(document).ready(function () {
      $('.header-menu-btn').click(function () {
        if ($('.header-menu-container').hasClass('active')) {
        } else {
        }
      });
    });

    setTimeout(function () {
    //   let navbarmine = document.getElementById('navBarHideIt');
    //   let headerContainer = document.getElementById('headerContainer');
    //   navbarmine.style.transitionDuration = '0.4s';
    //   navbarmine.style.opacity = '1';
      // headerContainer.style.transform = 'translateY(0)';
    }, 7300);

    /* jQuery Code Here */
  }, []);
  return (
    <header
      id="headerContainer"
      style={{
        backgroundColor: '#f8f8f8',
        minHeight: '80px',
        transition: 'all 1.0s ease',
        position: 'fixed',
        width: '100%',
        zIndex: 999
      }}
    >
      {/* <div id="navBarHideIt"> */}
      <div id="" className="container">
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
                          <Link href="/" className="btn-link">
                            About
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span className="animate__animated animate__fadeInDown animate__delay-5ms animate__slower 1s">
                          <Link href="/" className="btn-link">
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

import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import '../public/loader'
import {useEffect} from 'react';
import Link from 'next/link'
export default function Test() {
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
      
  
      },[]);
     
    return (
        <>
        <Head>
        <title>Bla Agency</title>
        <link rel="icon" href="/favicon.ico" />
          <script src="/jquery.min.js"></script>
          {/* <script src="/TweenMax.min.js"></script> */}
          <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
      </Head>
      <section class="intro">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-8 offset-lg-2">
              <h1>About bees </h1>
              <p>Bees are insects with wings closely related to wasps and ants, known for their role in pollination and, in the case of the best-known bee species, the western honey bee, for producing honey. Bees are a monophyletic lineage within the superfamily Apoidea. They are presently considered a clade, called Anthophila. There are over 16,000 known species of bees in seven recognized biological families. Some species – including honey bees, bumblebees, and stingless bees – live socially in colonies while most species– including mason bees, carpenter bees, leafcutter bees, and sweat bees – are solitary.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="image-grid">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4">
              <a class="d-block" href="https://unsplash.com/@coolcalm" target="_blank">
                <img width="640" height="426" src="https://assets.codepen.io/162656/bee1.jpg" class="shadow img-fluid" alt=""/>
              </a>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <a class="d-block" href="https://unsplash.com/@thismyrealone" target="_blank">
                <img width="640" height="426" src="https://assets.codepen.io/162656/bee2.jpg" class="shadow img-fluid" alt=""/>
              </a>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <a class="d-block" href="https://unsplash.com/@annikat" target="_blank">
                <img width="640" height="426" src="https://assets.codepen.io/162656/bee3.jpg" class="shadow img-fluid" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="copyright">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-auto">
              <p class="mb-0">Images from <a class="line-animation" href="https://unsplash.com/" target="_blank">Unsplash</a></p>
            </div>
            <div class="col-auto">
              <p class="mb-0">SVG icons from <a class="line-animation" href="https://svgsilh.com/" target="_blank">SVG Silh</a> & <a class="line-animation" href="https://iconmonstr.com/" target="_blank">iconmonstr</a></p>
            </div>
            <div class="col-auto">
              <p class="mb-0">Text from <a class="line-animation" href="https://en.wikipedia.org/wiki/Bee" target="_blank">Wikipedia</a></p>
            </div>
          </div>
        </div>
      </section>
      
      <div class="cursor cursor-bee">
        <img width="30" height="26" src="./images/dot-mini.svg" alt=""/>
      </div>
      <div class="cursor cursor-eye">
        <img width="60" height="60" src="./images/dot-maxi.svg" alt=""/>
      </div>
        <style jsx global>{`
  :root {
    --white: whitesmoke;
    --yellow: #ffd60a;
    --darkblue: transparent;
  }
  
  ::selection {
    background: var(--yellow);
    color: var(--darkblue);
  }
  
  body {
    margin: 10vh 0;
    font: 20px / 28px "Nunito", sans-serif;
    color: var(--yellow);
    background: var(--darkblue);
  }
  
  h1 {
    margin-bottom: 30px;
  }
  
  section + section {
    margin-top: 10vh;
  }
  
  .copyright .col-auto:not(:last-child) {
    position: relative;
  }
  
  .copyright .col-auto:not(:last-child)::before {
    content: "•";
    position: absolute;
    top: 50%;
    right: -7.5px;
    transform: translateY(-50%);
  }
  
  .line-animation,
  .line-animation:hover {
    color: var(--white);
  }
  
  .cursor {
    position: fixed;
    pointer-events: none;
    opacity: 0;
  }
  
  .cursor-bee {
    top: -15px;
    left: -13px;
    z-index: -1;
  }
  
  .cursor-eye {
    top: -50px;
    left: -50px;
    padding: 20px;
    z-index: 1;
    border-radius: 50%;
  }
  
  
  /* FOOTER STYLES
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .page-footer {
    position: fixed;
    right: 0;
    bottom: 60px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 5px;
    color: black;
    background: rgba(255, 255, 255, 0.65);
  }
  
  .page-footer a {
    display: flex;
    margin-left: 9px;
  }
      `}</style>
        </>
       
    )
}
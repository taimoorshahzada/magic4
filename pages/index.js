import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import Heads from "./Head";
import "../pages/scrollanimate.module.css";
import ImageScrollingAnimation from "../components/ImageScrollingAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FirstAnimation from "../components/FirstAnimation";
// import AOS from 'aos';
import BgChangeText from "../components/BgChangeText";
// import ImageScrolling from '../components/ImageScrolling';
import TextOnImage from "../components/TextOnImage";
import BottomTextAnimate from "../components/BottomTextAnimate";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [controls, setControls] = useState(false);
  let els1 = useRef();
  let trigg = useRef();
  let qss = gsap.utils.selector(els1);
  // let els2 = useRef();
  // let trigg2 = useRef();
  // let qss2 = gsap.utils.selector(els2);
  const videoPlayer = () => {
    return (
      <video
        style={{ zIndex: "3" }}
        id="mainVideo1234"
        width="100%"
        src={require("../public/video/mov_bbb.mp4")}
        autoPlay
        muted
        loop
      />
    );
  };

  const videoPlayerControls = () => {
    return (
      <video
        style={{ zIndex: "3" }}
        id="mainVideo1234"
        width="100%"
        src={require("../public/video/mov_bbb.mp4")}
        controls
      />
    );
  };

  const background = useRef();

  function startAnimation() {
    let j = 1;
    let k = 5;

    let divider = document.getElementById("divider");
    let fadeInText = document.getElementById("animateFadeIn");
    let animateUpTexts = document.getElementsByClassName("animateMoveUp");
    let backgroundArea = document.getElementById("animationFirst");
    let enjoy = document.getElementById("enjoy");
    let create = document.getElementById("create");

    fadeInText.style.animationName = "fadein";
    fadeInText.style.animationDuration = String(k) + "s";
    divider.style.animationName = "fadein";
    divider.style.animationDuration = String(k) + "s";
    backgroundArea.style.animationName = "shrink";
    backgroundArea.style.animationDuration = String(k) + "s";
    enjoy.style.animationName = "enjoyIn";
    enjoy.style.animationDuration = String(k) + "s";
    create.style.animationName = "createIn";
    create.style.animationDuration = String(k) + "s";

    for (let i = 0; i < animateUpTexts.length - 1; i++) {
      animateUpTexts[i].style.animationName = "moveup";
      animateUpTexts[i].style.animationDelay = String(j / 2) + "s";
      j += 1;
    }

    animateUpTexts[animateUpTexts.length - 1].style.animationName =
      "lastMoveup";
    animateUpTexts[animateUpTexts.length - 1].style.animationDuration = "2s";
    animateUpTexts[animateUpTexts.length - 1].style.animationDelay = "2.5s";
    animateUpTexts[animateUpTexts.length - 1].style.animationFillMode =
      "forwards";
  }

  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }
  let scrollAnim = () => {
    const element = document.getElementById("span1");
    const offHeight = element.offsetHeight;
    const offTop = element.offsetTop;
    const myoffset = 0;

    if (window.innerWidth < 600) {
      myoffset = 70;
    } else {
      myoffset = 30;
    }

    let distance = offTop - offHeight - myoffset;

    if (window.scrollY >= distance + myoffset) {
      element.style.backgroundPosition = "100%";
    }
    if (window.scrollY >= distance + 2 * myoffset) {
      element.style.backgroundPosition = "90%";
    }
    if (window.scrollY >= distance + 4 * myoffset) {
      element.style.backgroundPosition = "80%";
    }
    if (window.scrollY >= distance + 6 * myoffset) {
      element.style.backgroundPosition = "70%";
    }
    if (window.scrollY >= distance + 8 * myoffset) {
      element.style.backgroundPosition = "60%";
    }
    if (window.scrollY >= distance + 10 * myoffset) {
      element.style.backgroundPosition = "50%";
    }
    if (window.scrollY >= distance + 12 * myoffset) {
      element.style.backgroundPosition = "40%";
    }
    if (window.scrollY >= distance + 14 * myoffset) {
      element.style.backgroundPosition = "30%";
    }
    if (window.scrollY >= distance + 16 * myoffset) {
      element.style.backgroundPosition = "20%";
    }
    if (window.scrollY >= distance + 18 * myoffset) {
      element.style.backgroundPosition = "10%";
    }
    if (window.scrollY >= distance + 20 * myoffset) {
      element.style.backgroundPosition = "0%";
    }
    if (window.scrollY >= distance + 22 * myoffset) {
      element.style.backgroundPosition = "0%";
    }
  };

  let textScrollAnim = () => {
    const elements = document.getElementsByClassName("section-title");
    const el = elements[0];
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    const offset = 70;

    if (elemTop < window.innerHeight - offset && elemBottom >= 0) {
      el.style.top = "0%";
    }
    if (elemTop < window.innerHeight - 2 * offset && elemBottom >= 0) {
      el.style.top = "5%";
    }
    if (elemTop < window.innerHeight - 3 * offset && elemBottom >= 0) {
      el.style.top = "15%";
    }
    if (elemTop < window.innerHeight - 4 * offset && elemBottom >= 0) {
      el.style.top = "20%";
    }
    if (elemTop < window.innerHeight - 5 * offset && elemBottom >= 0) {
      el.style.top = "25%";
    }
    if (elemTop < window.innerHeight - 6 * offset && elemBottom >= 0) {
      el.style.top = "30%";
    }
    if (elemTop < window.innerHeight - 7 * offset && elemBottom >= 0) {
      el.style.top = "35%";
    }
    if (elemTop < window.innerHeight - 8 * offset && elemBottom >= 0) {
      el.style.top = "40%";
    }
    if (elemTop < window.innerHeight - 9 * offset && elemBottom >= 0) {
      el.style.top = "45%";
    }
    if (elemTop < window.innerHeight - 10 * offset && elemBottom >= 0) {
      el.style.top = "50%";
    }
    if (elemTop < window.innerHeight - 11 * offset && elemBottom >= 0) {
      el.style.top = "55%";
    }
  };

  let textScrollAnim2 = () => {
    const elements = document.getElementsByClassName("section-title");
    const el = elements[1];
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    const offset = 70;

    if (elemTop < window.innerHeight - offset && elemBottom >= 0) {
      el.style.top = "0%";
    }
    if (elemTop < window.innerHeight - 2 * offset && elemBottom >= 0) {
      el.style.top = "5%";
    }
    if (elemTop < window.innerHeight - 3 * offset && elemBottom >= 0) {
      el.style.top = "15%";
    }
    if (elemTop < window.innerHeight - 4 * offset && elemBottom >= 0) {
      el.style.top = "20%";
    }
    if (elemTop < window.innerHeight - 5 * offset && elemBottom >= 0) {
      el.style.top = "25%";
    }
    if (elemTop < window.innerHeight - 6 * offset && elemBottom >= 0) {
      el.style.top = "30%";
    }
    if (elemTop < window.innerHeight - 7 * offset && elemBottom >= 0) {
      el.style.top = "35%";
    }
    if (elemTop < window.innerHeight - 8 * offset && elemBottom >= 0) {
      el.style.top = "40%";
    }
    if (elemTop < window.innerHeight - 9 * offset && elemBottom >= 0) {
      el.style.top = "45%";
    }
    if (elemTop < window.innerHeight - 10 * offset && elemBottom >= 0) {
      el.style.top = "50%";
    }
    if (elemTop < window.innerHeight - 11 * offset && elemBottom >= 0) {
      el.style.top = "55%";
    }
  };

  let textScrollAnim3 = () => {
    const elements = document.getElementsByClassName("section-title");
    const el = elements[2];
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    const offset = 70;

    if (elemTop < window.innerHeight - offset && elemBottom >= 0) {
      el.style.top = "0%";
    }
    if (elemTop < window.innerHeight - 2 * offset && elemBottom >= 0) {
      el.style.top = "5%";
    }
    if (elemTop < window.innerHeight - 3 * offset && elemBottom >= 0) {
      el.style.top = "15%";
    }
    if (elemTop < window.innerHeight - 4 * offset && elemBottom >= 0) {
      el.style.top = "20%";
    }
    if (elemTop < window.innerHeight - 5 * offset && elemBottom >= 0) {
      el.style.top = "25%";
    }
    if (elemTop < window.innerHeight - 6 * offset && elemBottom >= 0) {
      el.style.top = "30%";
    }
    if (elemTop < window.innerHeight - 7 * offset && elemBottom >= 0) {
      el.style.top = "35%";
    }
    if (elemTop < window.innerHeight - 8 * offset && elemBottom >= 0) {
      el.style.top = "40%";
    }
    if (elemTop < window.innerHeight - 9 * offset && elemBottom >= 0) {
      el.style.top = "45%";
    }
    if (elemTop < window.innerHeight - 10 * offset && elemBottom >= 0) {
      el.style.top = "50%";
    }
    if (elemTop < window.innerHeight - 11 * offset && elemBottom >= 0) {
      el.style.top = "55%";
    }
  };

  let textScrollOnImage = () => {
    const els = document.getElementsByClassName("slide");
    const ts = document.getElementsByClassName("slide-text");
    const el = els[0];
    const t = ts[0];
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var offset = 0;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    var isVisible1 = elemTop >= 0 && elemBottom <= window.innerHeight;
    // var isVisible2 = elemTop >= 0 && elemBottom <= window.innerHeight;
    // var isVisible3 = elemTop >= 0 && elemBottom <= window.innerHeight;
    if (elemTop < window.innerHeight - offset && elemBottom >= 0) {
      el.style.opacity = 1;
      t.style.transform = "scale(2, 2)";
      t.style.opacity = 1;
    }
    if (!isVisible1) {
      el.style.opacity = 0;
      t.style.transform = "scale(1, 1)";
      t.style.opacity = 1;
    }
  };
  let textScrollOnImage1 = () => {
    const els = document.getElementsByClassName("slide");
    const ts = document.getElementsByClassName("slide-text");
    const el = els[1];
    const t = ts[1];
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var offset = 0;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    var isVisible1 = elemTop >= 0 && elemBottom <= window.innerHeight;
    // var isVisible2 = elemTop >= 0 && elemBottom <= window.innerHeight;
    // var isVisible3 = elemTop >= 0 && elemBottom <= window.innerHeight;
    if (elemTop < window.innerHeight - offset && elemBottom >= 0) {
      el.style.opacity = 1;
      t.style.transform = "scale(2, 2)";
      t.style.opacity = 1;
    }
    if (!isVisible1) {
      el.style.opacity = 0;
      t.style.transform = "scale(1, 1)";
      t.style.opacity = 1;
    }
  };
  let textScrollOnImage2 = () => {
    const els = document.getElementsByClassName("slide");
    const ts = document.getElementsByClassName("slide-text");
    const el = els[2];
    const t = ts[2];
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var offset = 0;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    var isVisible1 = elemTop >= 0 && elemBottom <= window.innerHeight;
    // var isVisible2 = elemTop >= 0 && elemBottom <= window.innerHeight;
    // var isVisible3 = elemTop >= 0 && elemBottom <= window.innerHeight;
    if (elemTop < window.innerHeight - offset && elemBottom >= 0) {
      el.style.opacity = 1;
      t.style.transform = "scale(2, 2)";
      t.style.opacity = 1;
    }
    if (!isVisible1) {
      el.style.opacity = 0;
      t.style.transform = "scale(1, 1)";
      t.style.opacity = 1;
    }
  };

  useEffect(() => {
    // AOS.init({
    // 	offset: 500,
    // 	duration: 600,
    // 	easing: 'ease-in',
    // 	delay: 100
    // });
    gsap.to("#hellosir", { x: 300, duration: 4 });
    gsap.fromTo(
      qss(".title-text-animate"),
      { translateY: 100, opacity: 0 },
      {
        translateY: 0,
        duration: 0.7,
        ease: "power1.in",
        opacity: 1,
        markers: true,
        scrollTrigger: {
          trigger: trigg.current,
        },
      }
    );
    // gsap.fromTo(
    // 	qss2('.title-text-animate1'),
    // 	{ translateY: 100, opacity: 0 },
    // 	{
    // 		translateY: 0,
    // 		duration: 0.7,
    // 		ease: 'power1.in',
    // 		opacity: 1,
    // 		markers: true,
    // 		scrollTrigger: {
    // 			trigger: trigg.current
    // 		}
    // 	}
    // );

    // $(window).resize(function () {
    //   if ($(window).width() <= 700) {
    //     // is mobile device
    //     $('#random1').css('font-size', '30px');
    //     $('#random2').css('font-size', '30px');
    //     $('#random3').css('font-size', '30px');
    //     $('#random4').css('font-size', '30px');
    //     $('#random5').css('font-size', '30px');
    //   }
    // });
    /* text hover bg animation start */

    // $(document).ready(function() {
    // 	setTimeout(startAnimation, 2000);
    // });

    $(".cafetito")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/cafetito.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".cafetito").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });

    $(".starbucks")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/starbucks.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".starbucks").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });

    $(".colchones")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/colchones.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".colchones").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".vinos")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/vinos.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".vinos").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".moda")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/moda.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".moda").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".arquitectura")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/arquitectura.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".arquitectura").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".iluminacion")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/iluminacion.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".iluminacion").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".trufas")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/trufas.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".trufas").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".decoracion")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/decoracion.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".decoracion").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".deporte")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/deporte.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".deporte").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".cana")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/cana.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".cana").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".colega")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/colega.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".colega").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".boda")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/boda.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".boda").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });
    $(".elequipo")
      .mouseenter(function () {
        $(".bg-dynamic").css("background-image", "url(/gifs/elequipo.gif)");
        $(".bg-dynamic").css("background-repeat", "no-repeat");
        $(".bg-dynamic").css("background-size", "100%");
        $(".animated-text").css("color", "rgba(0,0,0,0.05)");
        $(".animated-text span").css("color", "rgba(0,0,0,0.05)");
        $(".elequipo").css("color", "rgba(0,0,0,1)");
      })
      .mouseleave(function () {
        $(".animated-text").css("color", "rgba(0,0,0,1)");
        $(".animated-text span").css("color", "rgba(0,0,0,1)");
        $(".bg-dynamic").css("background-image", "");
      });

    /* text hover bg animation end */

    // setTimeout(function() {
    // 	getScroll();
    // 	$('body').css('overflow-y', 'hidden');
    // }, 50);
    setTimeout(function () {
      window.scrollTo({
        left: 0,
        top: 0,
      });
    }, 100);
    setTimeout(function () {
      $(".topcontainer").addClass(
        "animate__animated animate__fadeOutUp animate__delay-10ms animate__slow"
      );
      $(".topcontainer").addClass(
        "animate__animated animate__fadeOutUp animate__delay-10ms animate__slow"
      );
    }, 1400);
    setTimeout(function () {
      // $('.main-header-inner').show();
      // $('.topcontainer-outer').css('display','none');
      $("body *").css("visibility", "visible");
      $(".body").addClass(
        "animate__animated animate__fadeInUp animate__delay-7ms animate__slow"
      );
      // $('.header-inner').addClass('animate__animated animate__fadeInUp animate__delay-10ms animate__slow');

      $(".barcode-inner").addClass(
        "animate__animated animate__fadeInUp animate__delay-10ms animate__slow"
      );
      $("#3d-section").addClass(
        "animate__animated animate__fadeInUp animate__delay-10ms animate__slow"
      );
      $(".border-bottoms").show();
      $(".barcode-section").show();
      $("#3d-section").show();
    }, 1800);
    setTimeout(function () {
      $("body").css("overflow-y", "scroll");
      // $('body').css('overflow-y', 'hidden')

      $(".services-section").css("border-top", "1px solid #000000");
      $(".logo").addClass(
        "animate__animated animate__fadeInUp animate__delay-10ms animate__slow"
      );
      $(".header-menu-btn").addClass(
        "animate__animated animate__fadeInUp animate__delay-10ms animate__slow"
      );
      $(".main-header-inner").css("display", "block");
      $(".header-inner").css("display", "block");
      $(".topcontainer-outer").hide("slow");
      $(".header-menu-btn").addClass(
        "animate__animated animate__fadeInUp animate__delay-10ms animate__slow"
      );
    }, 7500);

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
          ease: "slow(0.7, 0.7, false)",
        },
      });

      // if (target.tagName.toLowerCase() === "img") {
      if (target.tagName.toLowerCase() === "abc") {
        tl.to(cursorBee, {
          opacity: 0,
        }).to(
          cursorEye,
          {
            opacity: 1,
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
          scale: scale,
        }).to(
          cursorEye,
          {
            opacity: 0,
          },
          "-=0.5"
        );
      }
    }

    function mouseleaveHandler() {
      gsap.to(cursorBee, {
        opacity: 0,
      });
    }

    document.addEventListener("mousemove", mousemoveHandler);
    document.addEventListener("mouseleave", mouseleaveHandler);

    /* Cursor Animation end */
  }, []);
  function getScroll() {
    $.fn.isInViewport = function () {
      var elementTop = $(this).offset().top;

      var viewportTop = $(window).scrollTop();

      viewportTop = viewportTop + 900;

      if (window.matchMedia("(max-width: 870px)").matches) {
        return viewportTop > elementTop && viewportTop < elementTop + 1900;
      } else {
        return viewportTop > elementTop && viewportTop < elementTop + 1600;
      }
    };

    $(window).on("scroll", function () {
      if ($(".gallery-section").isInViewport()) {
        var elementTop = $(".gallery-section").offset().top;
        var viewportTop = $(window).scrollTop();
        let change = (viewportTop / 100) * 5 - 16;
        // console.log("Change: " + change);
        $(".gallery-section .cols-even").css(
          "transform",
          "translateY(-" + change + "%)"
        );
        $(".gallery-section .cols-odd").css(
          "transform",
          "translateY(" + change + "%)"
        );
        // console.log("Section Visible");
      } else {
        // console.log("Section InVisible");
      }
    });

    // window.addEventListener('scroll', scrollAnim);
    // window.addEventListener('scroll', textScrollAnim);
    // window.addEventListener('scroll', textScrollAnim2);
    // window.addEventListener('scroll', textScrollAnim3);
    // window.addEventListener('scroll', textScrollOnImage);
    // window.addEventListener('scroll', textScrollOnImage1);
    // window.addEventListener('scroll', textScrollOnImage2);

    return () => {
      // window.removeEventListener('scroll', scrollAnim);
      // window.removeEventListener('scroll', textScrollAnim);
      // window.removeEventListener('scroll', textScrollAnim2);
      // window.removeEventListener('scroll', textScrollAnim3);
      // window.removeEventListener('scroll', textScrollOnImage);
      // window.removeEventListener('scroll', textScrollOnImage1);
      // window.removeEventListener('scroll', textScrollOnImage2);
    };
  }

  return (
    <div className="main-page">
      <Heads />
      <main>
        <Navbar />

        {/* <div className="main-heading-section">
					<div className="container">
						<div className="topcontainer-outer" style={{ overflow: 'hidden' }}>
							<div className="topcontainer">
								<div className="content">
									<div className="row1" style={{ display: 'flex', flexDirection: 'row' }}>
										<p className="letter one">M</p>
										<p className="letter two">A</p>
										<p className="letter three">G</p>
										<p className="letter four">I</p>
										<p className="letter five">C</p>
										<p className="letter six">4</p>
										<p className="letter seven">A</p>
										<p className="letter eight">l</p>
										<p className="letter nine">l</p>
										<p className="letter ten">i</p>
										<p className="letter eleven">a</p>
										<p className="letter twelve">n</p>
										<p className="letter thirteen">z</p>
									</div>
								</div>
								<div className="topcontainer1" />
							</div>
						</div>

						<div className="main-header-inner text-center" style={{ overflow: 'hidden' }}>
							<div className="main-header-title" style={{ overflow: 'hidden' }}>
								<h1
									className="animate__animated animate__fadeInUp animate__delay-10ms animate__slow"
									style={{ overflow: 'hidden' }}
								>
									ENJOY.
								</h1>
							</div>
							<div className="main-header-title" style={{ overflow: 'hidden' }}>
								<h1
									className="animate__animated animate__fadeInUp animate__delay-10ms animate__slow"
									style={{ overflow: 'hidden' }}
								>
									CREATE. FEEL.
								</h1>
							</div>
						</div>
					</div>
				</div> */}

        {/* <div id="animationFirst">
					<div id="alltextcontainteranimate">
						<h1 id="enjoy">Enjoy</h1>
						<p id="animateFadeIn">Hello</p>
						<div id="divider" />
						<p id="random1" className="animateMoveUp">
							Random 1
						</p>
						<p id="random2" className="animateMoveUp">
							Random 2
						</p>
						<p id="random3" className="animateMoveUp">
							Random 3
						</p>
						<p id="random4" className="animateMoveUp">
							Random 4
						</p>
						<p id="random5" className="animateMoveUp">
							Random 5
						</p>
					</div>
					<h1 id="create">Create, Feel</h1>
					<div
						className="somebox"
						style={{
							background: 'rgb(248,248,248)',
							zIndex: 3,
							height: '6em',
							transform: 'translateY(13em)',
							position: 'absolute',
							width: '100%',
							opacity: 1
						}}
					/>
				</div> */}
        <FirstAnimation />

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div
                style={{
                  height: "auto",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  id="myplaybutton"
                  onClick={() => {
                    let myvideo = document.getElementById("mainVideo1234");
                    let mybutton = document.getElementById("myplaybutton");
                    setControls(true);

                    myvideo.play();
                    mybutton.style.opacity = "0";
                  }}
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(18 20 19 / 85%)",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "5",
                  }}
                >
                  <h2 style={{ color: "#FFF" }}>Play</h2>
                </div>
                {controls ? videoPlayerControls() : videoPlayer()}
              </div>
            </div>
          </div>
        </div>

        <div className="border-bottoms mt-5" />

        {/* <div className="content-section">
					<div className="container">
						<div className="content-inner">
							<div className="content-desc">
								<div className="mask">
									<p id="span1" ref={background}>
										La magia de crear proyectos, convertirlos en historias y hacerlos realidad. Un
										camino que queremos construir contigo desde el principio, desarrollando tu idea
										y haciendo algo único y diferente.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="magic-section">
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
				</div> */}

        {/* <div className="magic-section">
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

				<div className="magic-section">
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
				</div>

				<div className="madrid-section">
					<div className="madrid-top">
						<div className="container">
							<div className="section-title text-center">
								<h2 className="title-text">Descubre MAGICU4</h2>
							</div>
						</div>
					</div>
				</div> */}

        <div className="container">
          <BgChangeText />

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
        <div className="madrid-section">
          <div className="madrid-top">
            <div className="container">
              <div className="section-title text-center">
                <div id="descubre">
                  <h2 className="title-text">Descubre</h2>
                  <div style={{ width: "2%" }} />
                  <h2 className="title-text">MAGICU4</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ImageScrollingAnimation />
        {/* <ImageSection /> */}
        {/* <ImageScrolling /> */}

        {/* Image Scrolling Animation Here */}

        <div className="border-bottoms_" />

        <div
          className="gallery-section"
          id="3d-section"
          style={{ height: "0px" }}
        />

        {/* <div className="ft-cta-section">
					<div className="container">
						<div className="ft-cta-inner">
							<div ref={els1} className="section-title text-center" style={{ overflow: 'hidden' }}>
								<h2 ref={trigg} className="title-text title-text-animate">
									cuéntanos tu
								</h2>
							</div>
							<div ref={els2} className="section-title text-center" style={{ overflow: 'hidden' }}>
								<h2 ref={trigg2} className="title-text title-text-animate1">
									idea
								</h2>
							</div>
						</div>
					</div>
				</div> */}
        <BottomTextAnimate />
        <div className="footer-contact-section">
          <div className="container">
            <div className="footer-contact-outer">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="footer-contact-box">
                    <div className="footer-contact-box-inner">
                      <div className="footer-contact-box-title">
                        <h3>EVENTOS</h3>
                      </div>
                      <div className="footer-contact-box-desc">
                        <p>hola@magic4u.es</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="footer-contact-box">
                    <div className="footer-contact-box-inner">
                      <div className="footer-contact-box-title">
                        <h3>BRANDS</h3>
                      </div>
                      <div className="footer-contact-box-desc">
                        <p>hola@magic4u.es</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="footer-contact-box">
                    <div className="footer-contact-box-inner">
                      <div className="footer-contact-box-title">
                        <h3>CONTACTO</h3>
                      </div>
                      <div className="footer-contact-box-desc">
                        <p>hola@magic4u.es</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="cursor cursor-bee">
                <img src="./images/dot-mini.svg" alt=""/>
            </div>
            <div className="cursor cursor-eye">
                <img src="./images/dot-maxi.svg" alt=""/>
            </div> */}

      <Footer />

      <style jsx global>{`
        .header-left {
          overflow: hidden;
        }
        .header-right,
        .barcode-section {
          overflow: hidden;
        }
        .main-header-inner,
        .border-bottoms,
        .gallery-section,
        .barcode-section {
          display: none;
        }
        body
          *:not(#__next):not(head):not(.main-page):not(main):not(.main-heading-section):not(.container):not(.topcontainer-outer):not(.topcontainer):not(.content):not(.row1):not(.letter):not(.topcontainer1) {
          visibility: hidden;
        }
        .services-section {
          border-top: none;
        }
        .header-inner {
          display: none;
        }
      `}</style>
    </div>
  );
}

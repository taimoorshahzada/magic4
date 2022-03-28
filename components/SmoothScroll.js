import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Scroll = () => {
  useEffect(() => {
    const bodyScrollBar = Scrollbar.init(document.body, {
      speed: 0.1,
      delegateTo: document,
    });
    bodyScrollBar.setPosition(0, 0);
    bodyScrollBar.track.xAxis.element.remove();
    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: document.body });
  }, []);

  return null;
};
export default Scroll;

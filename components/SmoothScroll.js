import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const Scroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, {
      speed: 0.2,
    });
  }, []);

  return null;
};
export default Scroll;

import Scrollbar from "smooth-scrollbar";
import { useEffect } from 'react';
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
    enable: true,
    effect: 'bounce',
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: '#fff',
  };

const options = {
damping : 0.07,
plugins: {

    overscroll: { ...overscrollOptions },

},
}

var docWidth = document.documentElement.offsetWidth;
var docHeight = document.documentElement.offsetHeight;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);


const Scroll = () => {
    useEffect(() => {
        Scrollbar.use(OverscrollPlugin);
        Scrollbar.init(document.body, options);
    
        return () => {
          if (Scrollbar) Scrollbar.destroy(document.body)
        }  },[])

    return null;
  };
  
  export default Scroll;
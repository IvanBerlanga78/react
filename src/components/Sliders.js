import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';




const SlideFade = ({firstSlide, secondSlide,thirdSlide}) => {
 

    const indicators = (index) => (<div className="indicator">{index + 1}</div>);
    
    return (
        <>

        <Fade indicators={indicators} arrows={false}>

            <div className="each-slide">
            <div>
                <img src={firstSlide} />
            </div>
            </div>
            <div className="each-slide">
            <div>
                <img src={secondSlide} />
            </div>
            </div>
            <div className="each-slide">
            <div>
                <img src={thirdSlide} />
            </div>
            </div>
        </Fade>
        </>
    );
};

export default SlideFade;





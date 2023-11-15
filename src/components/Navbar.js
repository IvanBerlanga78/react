import React from "react";
import logo from "../assets/imgs/logo.svg";
import thumbnail from "../assets/imgs/ivan-profile-thumb.png";
import arrowRight from "../assets/imgs/arrow right.svg";

export default function Navbar ({ refToLastComp }){
    const scrolltoLast = () => {
        if (refToLastComp.current) {
          refToLastComp.current.scrollIntoView();
        }
      };
    return (
        <>
        <div className="navbar">
           <div className="container nav w-container">
               <a className='logo-wrap' href="#">
                    <img src={logo}></img>
                </a>
                <div>
                <a className='cta-contact-button glow-on-hover' href='#' onClick={scrolltoLast}>
                    <img className='thumbnail' src={thumbnail}/>
                    <span>Conctacta!</span>
                    <img className='arrow-right' src={arrowRight}/>
                </a> 
                </div>

            </div> 
        </div>
        </>
    )
}

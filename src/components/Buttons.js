import React from "react";
import iconPlane from "../assets/imgs/icon-plane_icon-plane.svg";

export default function DetailsButton ({ButtonLink, ButtonText}){
    return (
        <>
          <a className="details-button wide" 
            href={ButtonLink}>
            <div className='details-button-wrap'>
                <div className='details-buttonn-icon-wrap'>
                    <img src={iconPlane}/>
                </div>
                <p>
                {ButtonText}
                </p>
                </div>   
            </a>  
        </>
    )
}
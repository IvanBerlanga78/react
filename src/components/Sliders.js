import {React, useEffect, useState } from "react";
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import iconTalk from "./../assets/imgs/icon-talk_icon-talk.svg";


function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(
      () => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);
        const handler = (event) => setMatches(event.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
      },
      [] // Empty array ensures effect is only run on mount and unmount
    );
    return matches;
  }

function useBreakpoints() {
    const breakpoints = {
      isXs: useMediaQuery("(max-width: 640px)"),
      isLg: useMediaQuery("(min-width: 641px)"),
      active: "xs"
    };
    if (breakpoints.isXs) breakpoints.active = "xs";
    if (breakpoints.isLg) breakpoints.active = "lg";
    return breakpoints;
  }

const SlideFade = ({firstSlide, secondSlide, thirdSlide}) => {
 

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

export default function Breakpoint({ at, children }) {
    if (!at) {
      console.error("<Breakpoint>: must specify a breakpoint for the `at` prop.");
    }
    const { active } = useBreakpoints();
    return active === at ? children : null;
  }

function ReviewsSlider () {
    
    return (
        <>
        <Breakpoint at="xs">
            <Slide slidesToScroll={1} slidesToShow={1} arrows={false}>
            <div className="each-slide-effect">
                    <img className="icon-talk" src= {iconTalk}/>
                    <p className='review-text'>Iván es un profesional con el que da gusto trabajar. Siempre proactivo, predispuesto a mejorar lo que sea necesario y haciendo que las cosas sean fáciles. Llevo varios años trabajando con él y espero que continuemos colaborando mucho tiempo más.</p>
                    <p className='reviewer'>Guadalupe González / Art Director & Graphic Designer at Open Design Studio BCN</p>
                </div>
                <div className="each-slide-effect">
                <img className="icon-talk" src= {iconTalk}/>
                    <p className='review-text'>Iván es una gran persona y muy buen profesional. He trabajado con él durante un largo periodo y es trabajador, creativo y tiene muy buenas ideas. Y lo más importante es que a nivel de carácter es muy fácil trabajar con él.</p>
                    <p className='reviewer'>Leyre Suárez / Responsable de Marketing y Comunicación</p>
                </div>
                <div className="each-slide-effect">
                    <img className="icon-talk" src= {iconTalk}/>
                    <p className='review-text'>Trabajo con Iván desde hace muchos años. Es parte del equipo. Somos referencia en nuestro sector, y una web de esas características está en constante movimiento: renovación de diseño, hacer páginas para cursos, banners, documentos… todo eso nos lo resuelve Iván con eficacia, rapidez y diseño profesional.</p>
                    <p className='reviewer'>Carlos A. Gutiérrez / nutricionistadeperrros.com</p>
                </div>
                <div className="each-slide-effect">
                    <img className="icon-talk" src= {iconTalk}/>    
                    <p className='review-text'>Ivan es uno de los mejores desarrolladores y diseñadores web con los que trabajé. Recuerdo que cuando comenzó con nosotros, lo incorporaron directamente a un proyecto con un plazo muy ajustado pero estricto y no solo pudo realizar la entrega a tiempo, sino que la calidad superó nuestras expectativas. Sin duda recomiendo ampliamente a Iván por su creatividad y capacidad para superar las expectativas.</p>
                    <p className='reviewer'>Abdelrahman Haroun / Founder and Managing Director at Digiturnal</p>
                </div>
                <div className="each-slide-effect">
                    <img className="icon-talk" src= {iconTalk}/>
                    <p className='review-text'>He trabajado en algunos proyectos con Ivan y fue una experiencia increíble. Entendió y tradujo el concepto al diseño y luego a un prototipo funcional en un plazo menor al esperado. Recomiendo a Ivan como diseñador creativo.</p>
                    <p className='reviewer'>Rahid Kader / Empowering Museum Retail Through Digital Commerce Expertise | Elevating Cultural Experiences Online</p>
                </div>
            </Slide>
        </Breakpoint>
        <Breakpoint at="lg">
            <Slide slidesToScroll={3} slidesToShow={3} arrows={false}>
            <div className="each-slide-effect">
                    <img className="icon-talk" src= {iconTalk}/>
                    <p className='review-text'>Iván es un profesional con el que da gusto trabajar. Siempre proactivo, predispuesto a mejorar lo que sea necesario y haciendo que las cosas sean fáciles. Llevo varios años trabajando con él y espero que continuemos colaborando mucho tiempo más.</p>
                    <p className='reviewer'>Guadalupe González / Art Director & Graphic Designer at Open Design Studio BCN</p>
                </div>
                <div className="each-slide-effect">
                <img className="icon-talk" src= {iconTalk}/>
                    <p className='review-text'>Iván es una gran persona y muy buen profesional. He trabajado con él durante un largo periodo y es trabajador, creativo y tiene muy buenas ideas. Y lo más importante es que a nivel de carácter es muy fácil trabajar con él.</p>
                    <p className='reviewer'>Leyre Suárez / Responsable de Marketing y Comunicación</p>
                </div>
                <div className="each-slide-effect">
                    <img className="icon-talk" src= {iconTalk}/>
                    <p className='review-text'>Trabajo con Iván desde hace muchos años. Es parte del equipo. Somos referencia en nuestro sector, y una web de esas características está en constante movimiento: renovación de diseño, hacer páginas para cursos, banners, documentos… todo eso nos lo resuelve Iván con eficacia, rapidez y diseño profesional.</p>
                    <p className='reviewer'>Carlos A. Gutiérrez / nutricionistadeperrros.com</p>
                </div>
                <div className="each-slide-effect">
                    <img className="icon-talk" src= {iconTalk}/>    
                    <p className='review-text'>Ivan es uno de los mejores desarrolladores y diseñadores web con los que trabajé. Recuerdo que cuando comenzó con nosotros, lo incorporaron directamente a un proyecto con un plazo muy ajustado pero estricto y no solo pudo realizar la entrega a tiempo, sino que la calidad superó nuestras expectativas. Sin duda recomiendo ampliamente a Iván por su creatividad y capacidad para superar las expectativas.</p>
                    <p className='reviewer'>Abdelrahman Haroun / Founder and Managing Director at Digiturnal</p>
                </div>
                <div className="each-slide-effect">
                    <img className="icon-talk" src= {iconTalk}/>
                    <p className='review-text'>He trabajado en algunos proyectos con Ivan y fue una experiencia increíble. Entendió y tradujo el concepto al diseño y luego a un prototipo funcional en un plazo menor al esperado. Recomiendo a Ivan como diseñador creativo.</p>
                    <p className='reviewer'>Rahid Kader / Empowering Museum Retail Through Digital Commerce Expertise | Elevating Cultural Experiences Online</p>
                </div>
            </Slide>
        </Breakpoint>
        </>
    );
}

export  { SlideFade , ReviewsSlider};





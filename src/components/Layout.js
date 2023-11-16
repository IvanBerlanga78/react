import React , {useState, useEffect, useRef, forwardRef, useImperativeHandle, useLayoutEffect} from "react";
import {Loader, AnimatedDesk} from './Animations';
import {useSpring, animated } from '@react-spring/web';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './Navbar';
import {Project , Posts} from "./Project";
import sketchFlexibilidad from  "../assets/imgs/sketch-flexibilidad.svg";
import skills from '../assets/imgs/skills-image.svg';
import profileIcon from '../assets/imgs/icon-profile.svg';
import toolsIcon from '../assets/imgs/icon-tools.svg';
import talkIcon from '../assets/imgs/icon-talk_icon-talk.svg';
import imageElia1 from "../assets/imgs/imgs-projects/elia-1.jpg";
import imageElia2 from "../assets/imgs/imgs-projects/elia-2.jpg";
import imageElia3 from "../assets/imgs/imgs-projects/elia-3.jpg";
import imageElia4 from "../assets/imgs/imgs-projects/elia-4.jpg";
import imageNatalia1 from"../assets/imgs/natalia-1.jpg";
import imageNatalia2 from"../assets/imgs/natalia-2.jpg";
import imageNatalia3 from"../assets/imgs/natalia-3.jpg";
import imageNatalia4 from"../assets/imgs/natalia-4.jpg";
import iconInstagram from "../assets/imgs/iconos_icon-instagram.svg"
import iconLinkedin from "../assets/imgs/iconos_icon-linkedin.svg"
import iconEmail from "../assets/imgs/iconos_icon-mail.svg";
import iconWhatsapp from "../assets/imgs/iconos_icon-whatsapp.svg";



function LoaderIntro () {
    const springs = useSpring({
        from: { opacity: 1 },
        to: { opacity: 0 },
        delay:2000
      })
    return (
        <animated.div 
            style={{       
                ...springs
            }}   
            className='loader-container'>
        <Loader className="centered"/>         
        </animated.div>
    )
}

const ContentLayout = forwardRef((props, ref) => {

    const compRef = useRef();
    useImperativeHandle(ref, () => ({
      scrollIntoView: () => {
        compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }));

  gsap.registerPlugin(ScrollTrigger);

  const el = useRef();
  // store the timeline in a ref.
  
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const sections = self.selector(".animated");
      sections.forEach((section) => {
        gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            scrub: true
          }
        })
        .fromTo(
          section,
          {
            yPercent:0,
            duration: 0.1
          },
          {
            yPercent:-10,
            duration: 0.1
          }
          
        )
      });
    }, el);
    return () => ctx.revert();
  }, []);

    return (
        <>
        <div id='main' ref={el}>
        <Navbar refToLastComp={ref} />
        <div className='section hp-hero'>
          <div className="bcg-dots hp-hero"></div>
          <div className='container'>
          <div className='hp-hero__heading-grid'>
              <div className='hp-hero__ib-wrap'>
                <h1>Iván <br/>Berlanga</h1>
                <h2 className='hp-hero__ib'><span className='highlight-big'>Diseñador Web Freelance</span></h2>      
              </div>
              <div className='hp-hero__ib-wrap'>
                <AnimatedDesk/>
              </div>
          </div>
          <div className='hp-hero__content-grid'>
            <div className='hp-hero__text-wrap'>
                <img className='hp-hero_icon' src={profileIcon}/>
                <p>Soy Iván, Diseñador Web Freelance y puedo ayudarte a crear tu página web. Tengo más de 8 años de experiencia y he trabajado para grandes empresas y también para pequeños emprendedores. Mi objetivo es usar mi creatividad y mi experiencia para crear propuestas de valor. ¿Necesitas una web o quieres que te ayude a crearla? Contacta conmigo.</p>
            </div>
            <div className='hp-hero__text-wrap'>
                <img className='hp-hero_icon' src={toolsIcon}/>
                <p>Me especializo en la construcción de aplicaciones web, tanto en Wordpress como en HTML + CSS + JavaScript y también en React. Disfruto creando una experiencia de usuario fácil y cómoda y diseñando productos digitales agradables. Y me gusta el trato cercano con mis clientes. Tanto si tu proyecto es sencillo como si presenta complejidad, no lo dudes, estoy aquí para resolverlo.</p>
            </div>
            <img src={skills}></img>
            <div className='hp-hero__skills-wrap'>
              <div className='skills-section-container'>
                <div className='skills-section-container-inner'>
                  <div className='skills-section-wrap'>
                    <span className="skill-item skills-section-title">Graphic</span>
                    <span className='skill-item'>Illustrator</span>
                    <span className='skill-item'>Photoshop</span>
                    <span className='skill-item'>Indesign</span>
                    <span className='skill-item'>Figma</span>
                  </div>
                  <div className='skills-section-wrap'>
                    <span className="skill-item skills-section-title">Web</span>
                    <span className='skill-item'>Wordpress</span>
                    <span className='skill-item'>Woocommerce</span>
                    <span className='skill-item'>Elementor</span>
                    <span className='skill-item'>HTML</span>
                    <span className='skill-item'>CSS</span>
                    <span className='skill-item'>JavaScript</span>
                    <span className='skill-item'>React</span>
                    <span className='skill-item'>Git</span>
                  </div>
                  <div className='skills-section-wrap'>
                    <span className="skill-item skills-section-title">Motion Graphics</span>
                    <span className='skill-item'>Premiere</span>
                    <span className='skill-item'>AfterEffects</span>
                    <span className='skill-item'>Lottie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='section animated'>
        <div className='middle-container'>
            <div>
                <h2 className='hp-hero__ib'>Desde lo más <span className='highlight-small'>sencillo</span><br/> a lo más <span className='highlight-small'>complejo</span></h2>
                <div className='middle-section__text-wrap'>
                <p>Tanto si necesitas una web sencilla como si quieres incluir animaciones u otros efectos o funcionalidades más complejas, soy la persona indicada para alcanzar tus objetivos. Mis conocimientos y experiencia me permiten adaptarme a proyectos sencillos o más complicados.</p>
            </div>      
              <img src={sketchFlexibilidad}/>
            </div>          

        </div>   
        </div>
        <div className='section animated'>
          <div className="bcg-dots"></div>
          <div className='reviews-container'>
            <img className="reviews-icon" src={talkIcon}/>
            <p className='review-text'>
            Iván es un profesional con el que da gusto trabajar. Siempre proactivo, predispuesto a mejorar lo que sea necesario y haciendo que las cosas sean fáciles. Llevo varios años trabajando con él y espero que continuemos colaborando mucho tiempo más.
            </p>
            <p className='reviewer'>
            Guadalupe González / Art Director & Graphic Designer at Open Design Studio BCN
            </p>
          </div>
        </div>
        <div className='section animated'>
          <div className="bcg-dots"></div>
          <div className='container'>
              <div className='case-study__item-grid'>
                  <Project
                    ProjectFirstImage={imageElia1}
                    ProjectSecondImage={imageElia2}
                    ProjectThirdImage={imageElia3}
                    ProjectFourthImage={imageElia4}
                    ProjectLabelText1={'Diseño Web'}
                    ProjectLabelText2={'Wordpress'}
                    ProjectHeading={"\"Improving people's live through space\""}
                    ProjectText={"Eli-a es un estudio de arquitectura con gran proyección internacional. Sus proyectos se encuentran repartidos por los cinco continentes y el prestigio de sus obras es reconocido.El objetivo de la web era mostrar un portfolio de los proyectos de la firma de una forma muy intuitiva. Con el uso de fichas de proyecto, conseguí que cada trabajo tuviera una personalidad y entidad propias."}
                    ProjectExternalLink={"https://eli-a.com"}
                  />              
              </div>
            </div>
          </div>
          <div className='section animated'> 
           <div className="bcg-dots"></div>  
           <div className='container'>
              <div className='case-study__item-grid'>
                  <Project
                    ProjectFirstImage={imageNatalia1}
                    ProjectSecondImage={imageNatalia2}
                    ProjectThirdImage={imageNatalia3}
                    ProjectFourthImage={imageNatalia4}
                    ProjectLabelText1={'Diseño Web'}
                    ProjectLabelText2={'Wordpress'}
                    ProjectHeading={"\"¿Crees que tu equipo ha logrado su máximo potencial?\""}
                    ProjectText={"Natalia Sanchidrian es una experta ponente y escritora sobre Inteligencia Emocional. El reto de esta web personal era transmitir todo potencial y personalidad magnética que tiene Natalia. La web, muy visual y elegante, logra su objetivo."}
                    ProjectExternalLink={"https://nataliasanchidrian.com"}
                  />              
              </div>
            </div>
          </div>
          <div className="section previews animated">
           <div className="bcg-dots"></div>
            <div className="container">
              <div className="project-inner-container">
                <div className="project_preview__container">
                  <Posts style = {{   maxWidth: "40rem", margin: "0 auto"}}/>
                </div>
              </div>   
            </div>
          </div>
          <div className="section contact animated" ref={compRef}>
            <div className="container">
              <div className="contact_container">
                <div className="contact_text-wrapper">
                  <h2 className="contact_heading">Contacta</h2>
                  <p className="contact_text">Tanto si tu proyecto es <span className="highlight-small">sencillo</span> como si es más <span className="highlight-small">complejo</span>, soy la persona indicada para alcanzar tus objetivos. Contacta conmigo y <span className="highlight-small">hablémoslo</span>.</p>
                </div>
                <div className="contact-icons-outer">
                  <div className="contact-icon-wrapper">
                    <a href="https://www.instagram.com/iberlanga.design/" className="glow-on-hover">
                      <img src={iconInstagram}/> 
                    </a>
                  </div>
                  <div className="contact-icon-wrapper">
                  <a href="https://www.linkedin.com/in/ivanberlanga/" className="glow-on-hover">
                      <img src={iconLinkedin}/>
                    </a>
                  </div>
                  <div className="contact-icon-wrapper">
                  <a href="https://wa.me/34607604633" className="glow-on-hover">
                    <img src={iconWhatsapp}/>
                    </a>
                  </div>
                  <div className="contact-icon-wrapper">
                    <a href="mailto:iberlanga78@gmail.com" className="glow-on-hover">
                    <img src={iconEmail}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </>
    )
})

function FullLayoutHome () {
    const ref = useRef(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    }, []);

    return ( 
     <>
     
      { loading ? (
        <LoaderIntro/>
       ) : ( 
        <ContentLayout ref={ref} />
        )
      }

      </> 
      )    

}


export { LoaderIntro, ContentLayout, FullLayoutHome };
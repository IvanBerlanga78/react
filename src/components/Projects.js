import React from "react";
import Project from "./Project";
import projectImageLafuente from "../assets/imgs/lafuente-big.webp";
import projectImageElia from "../assets/imgs/eli-a-big.webp";
import projectImageMatteo from "../assets/imgs/pugliese-big.webp";
import video1 from '../assets/videos/video-scroll-comandia-mockup.mp4';



export default function Projects () {

    const texts = [{lafuente:"Lafuente - Colmado Quilez es una reconocida red de tiendas de vinos y destilados de alta gama, ,así como de productos de alimentación gourmet. Con más de 8000 referencias, el reto consistía es ofrecer su amplia gama de productos en una tienda online ágil y ligera de carga, optimizada para todos los dispositivos y con un diseño original y diferenciado de la competencia.", elia:"Eli-a es un estudio de arquitectura con gran proyección internacional. Sus proyectos se encuentran repartidos por los cinco continentes y el prestigio de sus obras es reconocido.El objetivo de la web era mostrar un portfolio de los proyectos de la firma de una forma muy intuitiva. Con el uso de fichas de proyecto, conseguí que cada trabajo tuviera una personalidad y entidad propias.", matteopugliese:"Matteo Pugliese es un escultor milanés, casi autodidacta, amante del arte. En 2001, annimado por amigos, organizó su primera exposición individual.Hoy sus obras se exhiben de forma permanente en galerías de Italia y de las principales ciudades artísticas del mundo, como Nueva York, Roma o Londres.El objetivo de la web era hacer llegar la obra del autor a su público de una manera muy visual, donde las fotografías de las esculturas fueran las protagonistas"}]

    return (
        <>
        <div className="main-projects-container">
            <Project
                projectName={'Elia'}
                projectDescription={texts.map(text => <>{text.elia}</>)}
                projectImage={projectImageElia}
            />
            <Project
                projectName={'Matteo Pugliesse'}
                projectDescription={texts.map(text => <>{text.matteopugliese}</>)}
                projectImage={projectImageMatteo}
            />
            <Project
                projectName={'Lafuente'}
                projectDescription={texts.map(text => <>{text.lafuente}</>)}
                projectImage={projectImageLafuente}
            />
        </div>
        </>
    )
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReviewsSlider () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
        <Slider className='reviews-slider' {...settings}>
            <div>
                <p className='review-text'>Iván es un profesional con el que da gusto trabajar. Siempre proactivo, predispuesto a mejorar lo que sea necesario y haciendo que las cosas sean fáciles. Llevo varios años trabajando con él y espero que continuemos colaborando mucho tiempo más.</p>
                <p className='reviewer'>Guadalupe González / Art Director & Graphic Designer at Open Design Studio BCN</p>
            </div>
            <div>
                <p className='review-text'>Iván es una gran persona y muy buen profesional. He trabajado con él durante un largo periodo y es trabajador, creativo y tiene muy buenas ideas. Y lo más importante es que a nivel de carácter es muy fácil trabajar con él.</p>
                <p className='reviewer'>Leyre Suárez / Responsable de Marketing y Comunicación</p>
            </div>
            <div>
                <p className='review-text'>Trabajo con Iván desde hace muchos años. Es parte del equipo. Somos referencia en nuestro sector, y una web de esas características está en constante movimiento: renovación de diseño, hacer páginas para cursos, banners, documentos… todo eso nos lo resuelve Iván con eficacia, rapidez y diseño profesional.</p>
                <p className='reviewer'>Carlos A. Gutiérrez / nutricionistadeperrros.com</p>
            </div>
        </Slider>

        </>
    )
}
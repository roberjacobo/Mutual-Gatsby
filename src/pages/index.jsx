import React from "react"

import '../styles/global.css'

import Header from "../components/header"
import Footer from "../components/footer"
import Carousel from "../components/carousel"
import About from "../components/about"
import Valores from "../components/valores"
import SEO from "../components/seo"


import funerales15 from "../images/funerales(15).jpeg"
import funerales16 from "../images/funerales(18).jpeg"
import funerales17 from "../images/funerales(1).jpeg"
import funerales18 from "../images/funerales(19).jpeg"
import funerales19 from "../images/funerales(2).jpeg"

import video from "../assets/cover1.mp4"

export default function Index() {
  return (
    <div>
      <SEO title="SFRP"/>
      <div className="nav-wrapper">
        <Header />
      </div>

      <div className="hero-wrapper">
            <div className="hero-overlay">
              <div className="hero-text">
                <h1 className="titulo">Funerales Rafael Paz</h1>
                <h2 className="subtitulo">Servicios funerarios de primer nivel</h2>
              </div>
            </div>
            <div className="contenido_video">
                {/* autoplay: propiedad para que se reproduzca una ves que carga la página
                loop: propiedad para el vídeo se repita infinitamente
                muted: propiedad para que el vídeo no emita sonido
                poster: propiedad que muestra una imagen hasta que cargue el vídeo  */}
              <video className="video" autoplay="autoplay" loop="loop" muted="muted" >
              <source src={video} type="video/mp4" />
              <source src={video} type="video/webm" />
              </video>
            </div>

      </div>
      <div className="Layout-general">

      <About />

      <div className="galeria">
        <div className="sesgoarriba"></div>
        <div className="imagenes"><img src={funerales15} alt="primera foto caja" /></div>
        <div className="imagenes"><img src={funerales16} alt="segunda foto caja" /></div>
        <div className="imagenes"><img src={funerales17} alt="tercera foto caja" />
              <div className="encima">
              <h2>Ataúdes</h2>
              </div>
        </div>
        <div className="imagenes"><img src={funerales18} alt="cuarta foto caja" /></div>
        <div className="imagenes"><img src={funerales19} alt="quinta foto caja" /></div>
        <div className="sesgoabajo"></div>
    </div>

      <div className="container">
        <Carousel />
      </div>
      <div className="container">
        <Valores />
        </div>
      </div>
      <Footer />
    </div>
  );
}
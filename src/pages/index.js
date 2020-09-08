import React from "react"

import '../styles/global.css'

import Header from "../components/header"
import Footer from "../components/footer"

import funerales15 from "../images/funerales(15).jpeg"
import funerales16 from "../images/funerales(18).jpeg"
import funerales17 from "../images/funerales(1).jpeg"
import funerales18 from "../images/funerales(19).jpeg"
import funerales19 from "../images/funerales(2).jpeg"

import Carousel from 'react-bootstrap/Carousel'

export default function Index() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div class="hero-image">

        <div className="header">
          <div className="textos">
            <div className="container-fluid">
              <h1 className="titulo">Funerales Rafael Paz</h1>
              <h3 className="subtitulo">Servicios funerarios de primer nivel</h3>
            </div>
          </div>
        </div>

      </div>

      <div className="about">
        <p className="titulo2">Sobre Nosotros</p>
        <p className="texto1">
           Do aliqua aute nulla velit enim mollit 
           nulla nostrud labore proident.
           Aliqua aliquip laboris veniam sint. 
           Tempor ex non irure enim nulla aliquip 
           do. Excepteur labore ullamco commodo 
           proident ipsum aliquip. Veniam cillum 
           consectetur qui tempor velit officia 
           cillum pariatur aute nostrud.
        </p>
      </div>

      <div className="galeria">
        <div className="sesgoarriba"></div>
        <div className="imagenes"><img src={funerales15} alt="primera foto caja" /></div>
        <div className="imagenes"><img src={funerales16} alt="segunda foto caja" /></div>

        <div className="imagenes"><img src={funerales17} alt="tercera foto caja" />

              <div className="encima">
                <h2>Cajas</h2>
              </div>
        </div>

        <div className="imagenes"><img src={funerales18} alt="cuarta foto caja" /></div>
        <div className="imagenes"><img src={funerales19} alt="quinta foto caja" /></div>
        <div className="sesgoabajo"></div>
    </div>


    

      

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}
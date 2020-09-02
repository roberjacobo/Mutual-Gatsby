import React from "react"

import '../styles/global.css'

import Header from "../components/header"
import Footer from "../components/footer"

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
      </div>

      

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}
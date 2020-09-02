import React from "react"

/* import '../styles/global.css' */

import Header from "../components/header"
import Footer from "../components/footer"

import cover2 from "../images/cover2.mp4"

export default () => {
  return (
    <div>
      <div>
        <Header />
      </div>

        <div>
          <video className="video" width="750" height="500" autoplay="autoplay" loop="loop" muted="muted" controls>
            <source src={cover2.mp4} type="video/mp4"/>
          </video>

          <div className="header">
                <div className="textos">
                  <div className="container-fluid">
                        <h1 className="titulo">Funerales Rafael Paz</h1>
                        <h3 className="subtitulo">Servicios funerarios de primer nivel</h3>
                  </div>
                </div>
          </div>

        </div>
      
    <div>
      <Footer />
    </div>
    
    </div>
  )
}
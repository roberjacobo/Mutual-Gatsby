import React from "react"

import '../styles/global.css'

import Header from "../components/header"
import Footer from "../components/footer"

import cover2 from "../assets/cover2.mp4"

export default function Index() {
  return (
    <div>
      <div>
        <Header />
      </div>
     
      <div className="App">
      <video src={cover2.mp4} type="video/mp4" className="video" width="750" height="500" autoplay loop muted controls />
      </div>
        

        <div className="header">
          <div className="textos">
            <div className="container-fluid">
              <h1 className="titulo">Funerales Rafael Paz</h1>
              <h3 className="subtitulo">Servicios funerarios de primer nivel</h3>
            </div>
          </div>
        </div>

      

      <div>
        <Footer />
      </div>

    </div>
  );
}
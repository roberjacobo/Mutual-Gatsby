import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "../components/header"

export default () => {
  return (
      <Header />

      <div class="contenido__video">
              {/* <!-- 
                autoplay: propiedad para que se reproduzca una ves que carga la página
                loop: propiedad para el vídeo se repita infinitamente
                muted: propiedad para que el vídeo no emita sonido
                poster: propiedad que muestra una imagen hasta que cargue el vídeo 
              --> */}
              <video class="video" autoplay="autoplay" loop="loop" muted="muted" poster="images/artesano.png">
              <source src="assets/img/coverr-a-greek-cemetery-top-view-1578925848736.mp4" type="video/mp4" />
              <source src="assets/img/coverr-a-greek-cemetery-top-view-1578925848736.mp4" type="video/webm" />
              </video>
            </div>
  )
}
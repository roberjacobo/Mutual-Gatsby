import React from "react"
import "../styles/components/fichatotales.css"

import Button from "react-bootstrap/Button"

const fichatotales = ({ clients }) => {
  return (
    <div>
      <div className="ficha-container">
        <div className="ficha">
          <h2>Totales</h2>
          <br />
          <h4>Total de Socios inscritos:</h4>
            <label>{clients ? clients.length : "0"}</label>
          <h4>Adeudo total de socios:</h4>
          <label></label>
          <br />
          <div className="btn-container">
            <Button variant="dark">Mutual Máster</Button>
            <Button variant="dark">Mutual Máster (Empresarial)</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default fichatotales

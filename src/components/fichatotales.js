import React from "react"
import "../styles/components/fichatotales.css"

import Button from "react-bootstrap/Button"

const fichatotales = () => {
  return (
    <div>
      <div className="ficha-container">
        <div className="ficha">
          <h2>Totales</h2>
          <br />

          <h4>Cantidad de Empleados</h4>
          <label>5555</label>
          <h4>Ingreso Neto</h4>
          <label>$ 5555</label>
          <h4>Socios por cobrar</h4>
          <label>5555</label>
          <h4>Ingreso Bruto</h4>
          <label>$ 5555</label>

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

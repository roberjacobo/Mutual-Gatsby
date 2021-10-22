import React from "react"
import '../styles/components/valores.scss'

const Valores = () => {
  return (
    <section className="motivation-wrapper">
        <h3>Valores</h3>
        <div className="row">
          <div className="col-12 col-md-6 values-text">
            <p>
              <strong>INTEGRIDAD</strong> Haciendo siempre lo correcto, demostrando respeto y
              apego a lo que hacemos y lo que representamos.
            </p>
            <p>
              <strong>CALIDAD</strong> Ofreciendo a nuestros clientes una asistencia profesional,
              integral y humana, a través de la excelencia en el servicio.
            </p>
            <p>
              <strong>HONESTIDAD</strong> Comprometiéndonos con la verdad: servicios dignos a
              precios justos.
            </p>
            <p>
              <strong>INICIATIVA</strong> Manteniendo la vanguardia en servicios funerarios,
              trabajando cada día de manera proactiva, servicial y responsable.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <figure>
              <img
                alt="Valores"
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?cs=srgb&dl=pexels-fauxels-3184418.jpg&fm=jpg"
              />
            </figure>
          </div>
        </div>
        <div className="row mision-vision">
          <div className="col-12 col-sm-6">
            <div>
              <h3>Misión</h3>
              <p>
                Brindar apoyo con calidez humana a las familias que han perdido un ser querido, otorgando un servicio funerario de paz y tranquilidad en los momentos que más lo necesitan.
              </p>
            </div>
            <div>
              <figure>
                <img
                  alt="Mision"
                  src="https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </figure>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div>
              <h3>Visión</h3>
              <p>
                Ser la mejor empresa de servicios funerarios a nivel nacional, dando un trato respetuoso de calidad y digno a todos nuestros clientes.
              </p>
            </div>
            <div>
              <figure>
                <img
                  alt="Vision"
                  src="https://images.pexels.com/photos/276259/pexels-photo-276259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Valores

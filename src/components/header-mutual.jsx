import React from "react"
import { Link } from "gatsby";

import user from "../images/Logo.png"

export default function HeaderMutual({logout, isMutual, isHistory}) {
  return (
    <>
      <div className="mutual-top-header">
        <img className="img-User" src={user} alt="user" />
        <span>
          <Link className={isMutual ? "active" : ""} to="/mutual">
            <button className="cta-link">Clientes</button>
          </Link>
          <Link className={isHistory ? "active" : ""} to="/historial">
            <button className="cta-link">Historial</button>
          </Link>
          <button onClick={logout} className="btn buttonLogOut">
            Salir
          </button>
        </span>
      </div>
    </>
  )
}

/**
 * 
 * <Link to="/addClient/">
        <button className="cta-link">Suscribir Cliente</button>
      </Link>
      <Link to="/addEmployee/">
        <button className="cta-link">Nuevo Empleado</button>
      </Link>
      <button className="cta-link">Registrar Egreso</button>
 */
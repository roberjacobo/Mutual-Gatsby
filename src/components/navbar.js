import React from "react"
import { Link } from "gatsby"



export default function Navbar() {

  return(
  <div>
    <div class="navbar navbar-default">
      <div class="container-fluid">
          
          <div class="navbar-header"> 
            <a class="navbar-brand"  href="#">Funeraria Paz</a>
          </div>
        
            <ul class="nav navbar-nav">
                <li><a ><Link to="/">Inicio</Link></a></li>
                <li><a >Servicios</a></li>
                <li><a >Empleados</a></li>
                <li><a >Clientes</a></li>
                <li><a >Mutual</a></li>
            </ul>
      </div>
    </div>
  </div>
  )
}
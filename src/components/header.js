import React from "react"


export default function Header() {
  <nav class="navbar navbar-default">
  <div class="container-fluid">
      
      <div class="navbar-header"> 
        <a class="navbar-brand"  href="#">Funeraria Paz</a>
      </div>
     
        <ul class="nav navbar-nav">
            <li><a routerLink="cuerpo">Inicio</a></li>
            <li><a routerLink="Servicios">Servicios</a></li>
            <li><a routerLink="cuerpo">Empleados</a></li>
            <li><a routerLink="cuerpo">Clientes</a></li>
            <li><a routerLink="Login">Mutual</a></li>
        </ul>
  </div>
</nav>
}

export default Header

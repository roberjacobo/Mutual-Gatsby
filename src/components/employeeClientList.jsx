import React from "react"

import 'bootstrap/dist/css/bootstrap.css'

const EmployeeClientsList = ({ clients }) => {

    return (
        <div className="table-container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre(s)</th>
                        <th>Primer Apellido</th>
                        <th>Segundo Apellido</th>
                        <th>CURP</th>
                        <th>Colonia</th>
                        <th>Dirección</th>
                        <th>Celular</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Adeudo</th>
                        <th>Fecha de inscripción</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {clients ? clients.map(client => (
                        <tr>
                            <td>{client.UserId}</td>
                            <td>{client.Nombre}</td>
                            <td>{client.ApellidoPat}</td>
                            <td>{client.ApellidoMat}</td>
                            <td>{client.Curp}</td>
                            <td>{client.Colonia}</td>
                            <td>{client.Direccion}</td>
                            <td>{client.Celular}</td>
                            <td>{client.Telefono}</td>
                            <td>{client.Correo}</td>
                            <td>${client.Adeudo}.00</td>
                            <td>{client.FechaInscripcion}</td>
                            <td>{client.Tipo}</td>
                        </tr>
                    )) : ""}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeClientsList
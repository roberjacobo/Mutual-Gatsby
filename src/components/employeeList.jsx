import React from "react"
import { Link } from 'gatsby'

import "../styles/components/employeeList.css"

const EmployeesList = ({ employees, deleteEmployee, getEmployees }) => {

  const handleDelete = async (_id) => {
    await deleteEmployee(_id)
    await getEmployees()
  }

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
            <th>Contraseña</th>
            <th>Salario</th>
            <th>Fecha Ingreso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees ? employees.map(employee => (
            <tr>
              <td>{employee.EmployeeId}</td>
              <td>{employee.Nombre}</td>
              <td>{employee.ApellidoPat}</td>
              <td>{employee.ApellidoMat}</td>
              <td>{employee.Curp}</td>
              <td>{employee.Colonia}</td>
              <td>{employee.Direccion}</td>
              <td>{employee.Celular}</td>
              <td>{employee.Telefono}</td>
              <td>{employee.Correo}</td>
              <td>{employee.Contrasenia}</td>
              <td>${employee.Salario}.00</td>
              <td>{employee.fechaIngreso}</td>
              <td>
                <div className="btnEmployee-Container">
                  <Link to='/editEmployee/' state={{ id: employee._id }}>
                    <button className="buttonEmployee-update">Actualizar</button>
                  </Link>

                  <button
                    className="buttonEmployee-delete"
                    onClick={() => handleDelete(employee._id)}
                  >
                    Eliminar
                </button>
                </div>
              </td>
            </tr>
          )) : ""}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeesList
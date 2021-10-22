/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { Link } from 'gatsby';

import 'bootstrap/dist/css/bootstrap.css';

import "../styles/components/clientsList.css";
import Pencil from '../icons/pencil.svg';
import Delete from '../icons/user-delete.svg';
import Card from '../icons/credit-card.svg';

const ClientsList = ({ clients, deleteClient, role }) => {

  const handleDelete = async (_id) => {
    await deleteClient(_id);
  }

  return (
    <div>
      <div className="row thead">
        <div className="col-2 col-md-1">Tipo</div> {/* 1 */}
        <div className="col-5 col-sm-2">Cliente</div> {/* 3 */}
        <div className="col-3 d-none d-md-block">Dirección</div> {/* 3 */}
        <div className="col-2 d-none d-sm-block">Teléfonos</div> {/* 2 */}
        <div className="col-3 col-md-1">Adeudo</div> {/* 1 */}
        <div className="col-2 d-none d-sm-block">Fecha I</div> {/* 1 */}
        <div className="col-2 col-md-1">Acciones</div> {/* 1 */}
      </div>
      {clients ? clients.map(client => (
            <div className="row trow">
              <div className="col-2 col-md-1 client-type">
                <span className="ctype">{client.TipoCliente !== '' ? client.TipoCliente : '-'}</span>
                <span className="croute">{client.Ruta !== '' ? client.Ruta : '-'}</span>
              </div>
              <div className="col-5 col-sm-2">
                {client.UserId} {client.Nombre}<br />
                <span className="lastname">{client.ApellidoPat} {client.ApellidoMat}</span></div>
              <div className="col-3 d-none d-md-block">{client.Direccion}<br /><span className="lastname">{client.Colonia}, {client.Ciudad}</span></div>
              <div className="col-2 d-none d-md-block">{client.Telefono}<br />{client.Celular}</div>
              <div className="col-2 col-md-1">${client.Adeudo}.00</div>
              <div className="col-2 d-none d-sm-block">{new Date(client.FechaInscripcion).toJSON().slice(0, 10)}</div>
              <div className="col-3 col-md-1 actions">
                <Link to='/addClient/' state={{ id: client._id }}>
                  <Pencil />
                </Link>
                {role === 'ADMIN_ROLE' ? <a href="#" onClick={() => handleDelete(client._id)}><Delete /></a> : ''}
                {/* <a href="#" onClick={setChargeId}><Card /></a> */}
              </div>
            </div>
          )) : ""}
    </div>
  )

}

export default ClientsList

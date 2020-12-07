import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

const NavBar = () => {
  return (
    <div className="navbar sidebar-sticky">
      <img src={logo} className="logo" alt="Logo" />
      <ul className="list-unstyled">
        <li>
          <span className="small mb-2 d-block">MENU DE OPCIONES</span>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fal fa-tachometer-alt-slow fa-lg"></i>
            <span>Tablero</span>
          </Link>
        </li>
        <li>
          <a href="foo">
            <i className="fal fa-file-invoice-dollar fa-lg"></i>
            <span>Planeación</span>
            <i className="fal fa-angle-down"></i>
          </a>
          <ul className="list-unstyled">
            <li>
              <Link to="/budgets">
                <span>Presupuestos</span>
              </Link>
            </li>
            <li>
              <Link to="/contracts">
                <span>Contratos</span>
              </Link>
            </li>
            <li>
              <Link to="/broadcastOrders">
                <span>Ordenes de difusión</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="foo">
            <i className="fal fa-cog fa-lg"></i>
            <span>Configuración</span>
            <i className="fal fa-angle-down"></i>
          </a>
          <ul className="list-unstyled">
            <li>
              <Link to="/ratePlans">
                <span>Planes de tarifa</span>
              </Link>
            </li>
            <li>
              <Link to="/systemSettings">
                <span>Catálogos de Sistema</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/reports">
            <i className="fal fa-file-spreadsheet fa-lg"></i>
            <span>Reportes</span>
          </Link>
        </li>
      </ul>
      <ul className="list-unstyled options-profile">
        <li>
          <Link to="/account">
            <i className="fal fa-user-circle fa-lg"></i>
            <span>Mi cuenta</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fal fa-sign-out-alt fa-lg"></i>
            <span>Cerrar sesión</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

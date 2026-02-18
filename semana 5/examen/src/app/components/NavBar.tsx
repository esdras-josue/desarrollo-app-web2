'use client'
import React from "react";
import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CEUTEC - {/*{nombreUsuario} */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/home">
                  Pagina Princial
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/carrito">
                  <button className="btn btn-warning">
                    Carrito
                    <span className="badge badge-secondary">
                     {/*{carrito.length}*/ } 
                    </span>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contacto">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/informacion">
                  Informacion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/adminproducto">
                  Administracion de productos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

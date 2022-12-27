import React from 'react'
import { Link, useLocation } from "react-router-dom"

import './navbar.css'

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <>
      <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-warning text-white border-bottom">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"></a>
          <img src="assets/images/aset1 new.png " alt="Bootstrap" width="45" height="45"></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {splitLocation[1] === "admin" ?
                <>
                  <li class="nav-item">
                    <Link to="admin/paket" class="nav-link">Paket</Link>
                  </li>
                </>
                :
                <>
                  <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="about" class="nav-link">About</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="services" class="nav-link">Services</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="contact" class="nav-link">Contact</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="reservasi" class="nav-link">Reservasi</Link>
                  </li>
                </>
              }
            </ul>
            <form class="d-flex" role="search\">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
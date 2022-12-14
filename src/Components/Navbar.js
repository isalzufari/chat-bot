import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="about" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="blog" class="nav-link">Blog</Link>
              </li>
              <li class="nav-item">
                <Link to="services" class="nav-link">Services</Link>
              </li>
              <li class="nav-item">
                <Link to="contact" class="nav-link">Contact</Link>
              </li>
              <li class="nav-item">
                <Link to="chat" class="nav-link">Chat</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
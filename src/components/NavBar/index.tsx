import React from "react"
const NavBar = () =>{
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand bg-light font-italic text-dark" href="#">Floricultura Rissi</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="nav nav-pills pt-1" role="tablist">
        <li className="nav-item">
          <a className="nav-link bg-light font-italic text-dark border-left" data-toggle="pill" href="#nossosprodutos">Nossos Produtos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link bg-light font-italic text-dark" data-toggle="pill" href="#menu1">Contato</a>
        </li>
        <li className="nav-item">
          <a className="nav-link bg-light font-italic text-dark" data-toggle="pill" href="#menu2">Sobre Nós</a>
        </li>
      </ul>
      </div>
    </div>
  </nav>
}

export default NavBar

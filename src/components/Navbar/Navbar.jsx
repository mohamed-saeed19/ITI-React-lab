import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return<>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink to={'/'} className="navbar-brand text-primary" href="#">Logo</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/category'} className="nav-link" href="#">Category</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/register'} className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/login'} className="nav-link" href="#">Login</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav></>
}

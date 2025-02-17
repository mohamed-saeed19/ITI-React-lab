import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CounterContext } from "../../context/CounterContext";

export default function Navbar() {
  const { count } = useContext(CounterContext); 
  let token = localStorage.getItem("userToken");
  let navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink to={"/"} className="navbar-brand text-primary" href="#">
          Logo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {token ? (
              <>
                <li className="nav-item">
                  <NavLink to={"/"} className="nav-link" aria-current="page" href="#">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/category"} className="nav-link" href="#">
                    Category
                  </NavLink>
                </li>
                <li className="nav-item">
                  <p className="nav-link" onClick={logOut}>
                    Logout
                  </p>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to={"/register"} className="nav-link" href="#">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/login"} className="nav-link" href="#">
                    Login
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink to={"/cart"} className="nav-link" href="#">
                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                <span className="badge bg-danger ms-1">{count}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
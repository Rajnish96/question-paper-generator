import * as React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  return (<>
  <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to='/' ><h5>Logo</h5></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to='/' >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='about' >About</NavLink>
                </li>  
                <li className="nav-item">
                  <NavLink className="nav-link" to='login' >Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='signup' >Sign Up</NavLink>
                </li>      
              </ul>
            
            </div>
          </div>
        </nav>  
      <Outlet />
  </>)
}

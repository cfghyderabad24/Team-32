import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import SignUp from './SignUp';
import './NavBar.css';
function NavBar() {
  const isactivelink = {
    color: "#6D435A",
    fontSize: "1.2rem",
    fontWeight: "bold"
  }
  const isinactivelink = {
    color: "#B1EDE8",
    fontSize: "1.2rem",
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light navbarnavigation " >
        <div className="container-fluid">
          <a className="navbar-brand  text-white"><img src="https://cdn2.vectorstock.com/i/1000x1000/92/86/agriculture-farming-logo-vector-26039286.jpg" width="50px" alt="" /></a>
          <button data-bs-target="#navbarcontent" data-bs-toggle="collapse" class="navbar-toggler" >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarcontent">

            <ul className="navbar-nav">
              
                <li className="nav-item  ">
                  <NavLink className="nav-NavLink" to="/" style={({ isActive }) => {
                    return isActive ? isactivelink : isinactivelink;
                  }}> Home</NavLink>
                </li>

                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/login" id="navbarDropdown" data-bs-toggle="dropdown" style={({ isActive }) => {
                    return isActive ? isactivelink : isinactivelink;
                  }}>Login</NavLink>

                  <ul className="dropdown-menu" >
                    <li>
                      <NavLink className="dropdown-item" to="/loginfarmer" style={({ isActive }) => {
                        return isActive ? isactivelink : isinactivelink;
                      }}>Farmer Login</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/loginvolunteer" style={({ isActive }) => {
                        return isActive ? isactivelink : isinactivelink;
                      }}>Volunteer Login</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/admin" style={({ isActive }) => {
                        return isActive ? isactivelink : isinactivelink;
                      }}>Admin Login</NavLink>
                    </li>
                  </ul>
                </li>
              
              <li className="nav-item  ">
                <NavLink className="nav-NavLink" to="/signup" style={({ isActive }) => {
                  return isActive ? isactivelink : isinactivelink;
                }}> SignUp</NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink className="nav-NavLink" to="/notifications" style={({ isActive }) => {
                  return isActive ? isactivelink : isinactivelink;
                }}></NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink className="nav-NavLink" to="/notifications" style={({ isActive }) => {
                  return isActive ? isactivelink : isinactivelink;
                }}>Notifications</NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink className="nav-NavLink" to="/feedback" style={({ isActive }) => {
                  return isActive ? isactivelink : isinactivelink;
                }}>Feedback</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar 

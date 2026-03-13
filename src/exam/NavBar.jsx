import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
export default function NavBar() {
  return (
    <nav display="flex" justifyContent="space-between" alignItems="center" >
      <ul className="nav-list">
        <button><Link className="nav-button" to="/">Home</Link></button>
        <button><Link className="nav-button" to="/developerregister">Register</Link></button>
        <button><Link className="nav-button" to="/data"> Developers</Link></button>
        <button><Link className="nav-button" to="/apidata">API</Link></button>
      </ul>
    </nav>
  );
}
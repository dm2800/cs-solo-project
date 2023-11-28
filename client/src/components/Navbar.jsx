import React from 'react'
import {Link} from 'react-router-dom'; 
import { Button } from 'react-bootstrap';
import useAppStore from "../AppStore";

const Navbar = ({logout}) => {

    const {LoggedInUserZ} = useAppStore(); 
  return (
        <div className="top-links">
                <Link className = "navbar-link" style={{ textDecoration: "none" }} to={`/login`}>
                    Login/Register
                </Link>
                <Link className = "navbar-link" style={{ textDecoration: "none" }} to={`/create`}>
                    List Instrument
                </Link>
                <button className = "custom-btn" onClick={logout}>Logout  {String(LoggedInUserZ.username).charAt(0).toUpperCase()}{String(LoggedInUserZ.username).slice(1).toLowerCase()}</button>
            </div>
  )
}

export default Navbar
import React from "react";

import { Link } from "react-router-dom"; 

import { Button } from "react-bootstrap";
import useAppStore from "../AppStore";
import { black } from "colorette";
import { nonASCIIwhitespace } from "acorn";

const Header = () => {

    const {LoggedInUserZ} = useAppStore(); 

    return (
        <div className ="header-container">
            <div className="logo-bar">

                <Link style={{}} to = "/">
            <h1 className="logo">GearShare</h1>
                </Link>
                <h5>Lend & borrow your favorite gear.</h5>
            </div>
            {/* <div className="user-welcome">
                <h4>{LoggedInUserZ && `Welcome, ${String(LoggedInUserZ.username).charAt(0).toUpperCase()}${String(LoggedInUserZ.username).slice(1).toLowerCase()}`}</h4>
            </div> */}
            </div>
    )
};

export default Header;

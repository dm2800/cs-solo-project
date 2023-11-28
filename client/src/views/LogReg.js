import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const LogReg = (props) => {
    return (
        <>
            <Header />
            <div className="log-reg-container">
                <Login />

                <Register />
            </div>
        </>
    );
};

export default LogReg;

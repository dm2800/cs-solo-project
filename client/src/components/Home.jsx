import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "../App.css";
import { bold } from "colorette";
import { Button } from "react-bootstrap";

const Home = () => {
    const [instrumentList, setInstrumentList] = useState([]);

    const [loggedInUser, setLoggedInUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/instruments")
            .then((res) => {
                console.log(res);
                console.log("this is the res data", res.data);
                setInstrumentList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/users", { withCredentials: true })
            .then((res) => {
                console.log("user res", res);
                console.log("user res data", res.data);
                setLoggedInUser(res.data);
            })
            .catch((err) => {
                console.log("get users error", err);
                setLoggedInUser(false);
            });
    }, []);

    const logout = (e) => {
        axios
            .post(
                "http://localhost:8080/api/users/logout",
                {}, //As a post request we MUST send something with our request.
                //Because we're not adding anything, sending an empty object.
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const instrumentArray = instrumentList.map((instrument) => {
        return (
            <div className="card">
                <div className="card-text">
                    <Link
                        className="home-inst-link"
                        to={`/instruments/${instrument._id}`}
                    >
                        {instrument.title}
                    </Link>
                    <h6>${instrument.price}/day</h6>
                </div>
                <Link to={`/instruments/${instrument._id}`}><img className="inst-img" src={instrument.image}></img></Link>
            </div>
        );
    });

    return (
        <div>
            <div className="logo-bar">
                <h1 className="logo">GearShare</h1>
                <h6>Lend & borrow your favorite gear.</h6>
            </div>
            <div className="user-welcome">
                <h4>
                {loggedInUser && `Welcome, ${loggedInUser.username}`}
                </h4>
            </div>
            <div className="top-links">
                <Link style={{textDecoration: 'none'}} to={`/login`}>Login/Register</Link>
                <Link style={{textDecoration: 'none'}} to={`/create`}>List an instrument</Link>
                <Button onClick={logout}>Logout</Button>
            </div>

            <div className="feed">
                <div style={{ fontSize: "20px" }}>{instrumentArray}</div>

            </div>
        </div>
    );
};

export default Home;

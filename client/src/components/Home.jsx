import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "../App.css";
import { bold } from "colorette";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./Navbar";
import useAppStore from "../AppStore";

const Home = () => {
    const [instrumentList, setInstrumentList] = useState([]);

    const [loggedInUser, setLoggedInUser] = useState({});

    const navigate = useNavigate();

    const {LoggedInUserZ, setLoggedInUserZ} = useAppStore(); 

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
                setLoggedInUserZ(res.data);
                // loggedInUserZ(res.data);
            })
            .catch((err) => {
                console.log("get users error", err);
                setLoggedInUserZ(false);
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
            <Link to = {`/instruments/${instrument._id}`}>
            <div className="card">
                <div className="card-text">
                    <Link
                        className="home-inst-link"
                        to={`/instruments/${instrument._id}`}
                    >
                        {instrument.title}
                    </Link>
                    <p className = "inst-price">${instrument.price}/day</p>
                </div>
                <Link to={`/instruments/${instrument._id}`}><img className="inst-img" src={instrument.image}></img></Link>
            </div>
            </Link>
        );
    });

    return (
        <div>

            <Header />
            <Navbar logout = {logout}/>
            

            <div className="feed">
                <div style={{ fontSize: "20px" }}>{instrumentArray}</div>

            </div>
        </div>
    );
};

export default Home;

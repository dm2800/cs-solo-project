import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const OneInstrument = (props) => {
    const [instrument, setInstrument] = useState({});
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/instruments/${id}`)
            .then((res) => {
                console.log(res);
                console.log("this is the res data", res.data);
                setInstrument(res.data);
            })
            .catch((err) => {
                console.log("get req err", err);
            });
    }, [id]);

    const deleteInstrument = () => {
        axios
            .delete(`http://localhost:8080/api/instruments/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="single-container">
            <div className="single-card">
                <div className="inst-title">
                    <p style ={{fontSize: '25px'}}>{instrument.title}</p>
                    <p>${instrument.price} / day</p>
                </div>
                <img className="inst-img"src={instrument.image}></img>
                <p className= "inst-description" style={{ fontSize: "15px" }}>{instrument.description}</p>
                {/* <p>Listed by {instrument.createdBy?.username}</p> */}
                <p> <Link style ={{textDecoration: 'none'}}to = {'/chat'}>Message {instrument.createdBy?.username}</Link> </p>
                <div className="one-inst-buttons">
                    <div >
                    <Link to={`/instruments/edit/${instrument._id}`}>
                        <Button>Edit</Button>
                    </Link>
                    <Button onClick={deleteInstrument}>Delete</Button>

                    </div>
                    <br></br>
                    <Link style ={{textDecoration: 'none'}} to="/">Home</Link>
                </div>
            </div>
        </div>
    );
};

export default OneInstrument;

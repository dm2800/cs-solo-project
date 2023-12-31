import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Form from "./Form";
import Button from "react-bootstrap/esm/Button";

//axios, useEffect, useState, Link

const NewInstrument = (props) => {
    const [errors, setErrors] = useState({
        title: {},
        price: {},
        description: {},
        image: {},
    });

    const [newInstrument, setNewInstrument] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
    });

    const navigate = useNavigate();

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/instruments", newInstrument, {
                withCredentials: true,
                headers: {
                    "Access-Control-Allow-Origin": "http://localhost:8080",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "*",
                    
                },
                crossorigin: true
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log("error", err);
                console.log("err.response:", err.response);
                console.log("err.response.data", err.response.data);
                console.log(
                    "err.response.data.errors",
                    err.response.data.errors
                );
                setErrors(err.response.data.errors);
                return;
            });
    };

    const onChangeHandler = (e) => {
        // Making a copy of the new Instrument object by using a spread operator.
        const newStateObject = { ...newInstrument };
        newStateObject[e.target.name] = e.target.value;

        // title = e.target.value

        if (e.target.name === "checkedField") {
            newStateObject[e.target.name] = e.target.checked;
            console.log("e.target.name = ", e.target.name);
            console.log("e.target.checked = ", e.target.checked);
            setNewInstrument(newStateObject);
        } else {
            newStateObject[e.target.name] = e.target.value;
            console.log("e.target.name = ", e.target.name);
            console.log("e.target.value = ", e.target.value);
            //using our setter to set the new copied object equal to our newInstrument object... our Single State Object.
            setNewInstrument(newStateObject);
        }
    };

    return (
            <div className="new-inst-container">
                <header>
                    <section class="section-intro bg-primary padding-y-lg">
                        <div class="container">
                            <h1>GearShare</h1>
                            <h6>Lend & borrow your favorite gear.</h6>
                        </div>
                    </section>
                    <Link to={"/"}>
                        <Button variant="primary">Home</Button>
                    </Link>
                </header>
                <br></br>

                {/* new Form component  */}
                <Form
                    submitHandler={newSubmitHandler}
                    instrument={newInstrument}
                    errors={errors}
                    buttonText={"Add Instrument"}
                    onChangeHandler={onChangeHandler}
                />
            </div>
    );
};

export default NewInstrument;

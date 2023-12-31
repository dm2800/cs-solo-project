import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
// import Header from './Header';
import Form from "./Form";

const EditInstrument = (props) => {
    const navigate = useNavigate();
    // destructuring Instrument id from props
    const { id } = useParams();

    const [errors, setErrors] = useState({});

    //NEW SINGLE STATE OBJECT:
    const [editInstrument, setEditInstrument] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
    });

    //Get request finds one Instrument info for pre-filling the form.
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/instruments/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setEditInstrument(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const editSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8080/api/instruments/${id}`, editInstrument)

            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                console.log("err.response:", err.response);
                console.log("err.response.data", err.response.data);
                console.log(
                    "err.response.data.errors",
                    err.response.data.errors
                );
                setErrors(err.response.data.errors);
            });
    };

    const onChangeHandler = (e) => {
        // Making a copy of the new Instrument object by using a spread operator.
        const newStateObject = { ...editInstrument };

        newStateObject[e.target.name] = e.target.value;

        // title = e.target.value

        if (e.target.name === "checkedField") {
            newStateObject[e.target.name] = e.target.checked;
            console.log("e.target.name = ", e.target.name);
            console.log("e.target.checked = ", e.target.checked);
            setEditInstrument(newStateObject);
        } else {
            newStateObject[e.target.name] = e.target.value;
            console.log("e.target.name = ", e.target.name);
            console.log("e.target.value = ", e.target.value);
            //using our setter to set the new copied object equal to our newInstrument object... our Single State Object.
            setEditInstrument(newStateObject);
        }
    };

    return (
        <div className="edit-inst-container">
            <div className="single-card">
                {/* reusable component for header :)  */}
                <header className="edit-inst-header">
                    <section class="section-intro bg-primary padding-y-lg">
                
                    </section>

                    <Link to={"/"}>Home</Link>
                </header>
                <br></br>

                <div className="inst-title">
                    <p style ={{fontSize: '25px'}}>{editInstrument.title}</p>
                    <p>${editInstrument.price} / day</p>
                </div>

                <img
                    style={{ maxWidth: "200px" }}
                    src={editInstrument.image}
                ></img>
                {/* reusable component for Form */}
                <Form
                    submitHandler={editSubmitHandler}
                    instrument={editInstrument}
                    errors={errors}
                    buttonText={"Update Instrument"}
                    onChangeHandler={onChangeHandler}
                />
            </div>
        </div>
    );
};

export default EditInstrument;

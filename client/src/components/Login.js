import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import useAppStore from "../AppStore";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); 
    const {setLoggedInUserZ} = useAppStore(); 


    const login = (event) => {
        event.preventDefault();
        axios
            .post(
                "http://localhost:3000/api/users/login",
                {
                    email: email,
                    password: password,
                },
                {
                    // this will force the sending of the credentials/cookies so they can be updated
                    //XMLHttpRequest from a different domain cannot set cookie values for their own domain unless withCredentials is set to true before making the request.
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res, "res");
                console.log(res.data, "is res data.");
                // setLoggedInUserZ(res.data); 
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            });
    };

    return (
    <div>


    <h2>Login</h2>
    <p className="error-text">{errorMessage ? errorMessage : ""}</p>
    <Form className="form-container"onSubmit={login}>
        <Form.Group className="form-group">
            <FormLabel className="form-label">Email</FormLabel>
            <FormControl
                className="form-field w-25"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="form-group row justify-content-center mb-3">
            <FormLabel className = "form-label">Password</FormLabel>
            <FormControl
                className="form-field w-25"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>
        <div className="center">
            <Button className = "custom-btn" type="submit">Sign In</Button>
        </div>
    </Form>
</div>
)
}

export default Login
import React, { useEffect } from "react";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OneInstrument from "./components/OneInstrument.js";
import NewInstrument from "./components/NewInstrument.js";
import LogReg from "./views/LogReg.js";
import EditInstrument from "./components/EditInstrument.js";
import { io } from "socket.io-client";
import ChatPage from "./components/ChatPage.js";
// const socket = socketIO.connect('http://localhost:3000');

const App = () => {
    // const socket = io("http://localhost:8080");

    // useEffect(() => {
    //     console.log("hello");
    //     socket.on("connect", () => console.log("socket", socket.id));
    //     socket.on("connect_error", () => {
    //         setTimeout(() => socket.connect(), 5000);
    //     });
    // }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<NewInstrument />} path="/create" />
                    <Route element={<LogReg />} path="/login" />
                    <Route
                        element={<OneInstrument />}
                        path="/instruments/:id"
                    />
                    <Route
                        element={<EditInstrument />}
                        path="/instruments/edit/:id"
                    />
                    <Route
                        element={<ChatPage socket={socket} />}
                        path="/chat/"
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

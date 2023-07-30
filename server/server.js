const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const http = require("http");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(
    cors({
        origin: "http://localhost:8080",
        credentials: true,
    })
);

app.options(
    "*",
    cors({
        origin: "http://localhost:8080",
        credentials: true,
    })
);


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

require("./config/mongoose.config");
require("./routes/instrument.routes")(app);
require("./routes/user.routes")(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

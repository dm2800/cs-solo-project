const mongoose = require("mongoose");

const mongo_uri = 'mongodb://localhost:27017'


mongoose
    .connect(`${mongo_uri}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(() => console.log(`Connected to instruments database`))
    .catch((err) => console.log(err));

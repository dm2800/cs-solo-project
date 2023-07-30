const mongoose = require("mongoose");

const mongo_uri = 'mongodb+srv://dm2800:QdEelIL3rDNVEd5o@cluster0.wyyva3f.mongodb.net/?retryWrites=true&w=majority'


mongoose
    .connect(`${mongo_uri}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(() => console.log(`Connected to instruments database`))
    .catch((err) => console.log(err));

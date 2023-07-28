const mongoose = require("mongoose");


mongoose
    .connect(`mongodb://localhost/instruments`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(() => console.log(`Connected to instruments database`))
    .catch((err) => console.log(err));

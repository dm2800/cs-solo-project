const Instrument = require("../models/instruments.model");
const jwt = require("jsonwebtoken");


module.exports = {
    //Create
    createInstrument: (req, res) => {
        const newInstrumentObject = new Instrument(req.body);

        // //Keeping track of who created the listing: 
        const decodedJWT = jwt.decode(req.cookies.usertoken, {
            complete: true,
        });

        newInstrumentObject.createdBy = decodedJWT.payload.id;

        newInstrumentObject
            .save()
            .then((newInstrument) => {
                console.log(newInstrument);
                res.json(newInstrument);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //Get One
    getOneInstrument: (req, res) => {
        Instrument.findById({ _id: req.params.id })
            .populate("createdBy", "username email")
            .then((oneInstrument) => {
                res.json(oneInstrument);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //Get All  
    getAllInstruments: (req, res) => {
        Instrument.find({})
            .populate('createdBy', 'username email')
            .then((allInstruments) => {
                res.json(allInstruments); 
            })
            .catch((err) => {
                console.log(err); 
                res.status(400).json(err); 
            })
    },

    //Delete
    deleteInstrument: (req, res) => {
        Instrument.deleteOne({ _id: req.params.id })
            .then((deletedInstrument) => {
                res.json(deletedInstrument);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //Edit
    editInstrument: (req, res) => {
        Instrument.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedInstrument) => {
                res.json(updatedInstrument);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    findAllInstrumentsByUser: (req, res) => {
        if (req.jwtpayload.username !== req.params.username) {
            console.log('not the user'); 
            User.findOne({username: req.params.username})
                .then((userNotLoggedIn) => {
                    Instrument.find({ createdBy: userNotLoggedIn._id})
                        .populate("createdBy", "username")
                        .then((allInstrumentsFromUser) => {
                            console.log(allInstrumentsFromUser);
                            res.json(allInstrumentsFromUser);
                        })
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err); 
                })
        } else {
            console.log("current user");
            console.log("req.jwt.payload.id:", req.jwtpayload.id);
            Instrument.find({ createdBy: req.jwtpayload.id})
                .populate('createdBy', 'username')
                .then((allInstrumentsFromLoggedInUser) => {
                    console.log(allInstrumentsFromLoggedInUser);
                    res.json(allInstrumentsFromLoggedInUser);
                })
                .catch((err) => {
                    console.log(err); 
                    res.status(400).json(err); 
                });
        }
    }
};

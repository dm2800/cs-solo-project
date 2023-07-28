const InstrumentController = require("../controllers/instrument.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.get(`/api/instruments`, InstrumentController.getAllInstruments);
    app.post(`/api/instruments`, InstrumentController.createInstrument, (req, res) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080")}); // add authenticate in the chain to keep track of who added the instrument
    app.put(`/api/instruments/:id`, InstrumentController.editInstrument);
    app.delete(`/api/instruments/:id`, InstrumentController.deleteInstrument);
    app.get(`/api/instruments/:id`, InstrumentController.getOneInstrument);
    app.get(
        "/api/instrumentsbyuser/:username",
        authenticate,
        InstrumentController.findAllInstrumentsByUser
    );
};

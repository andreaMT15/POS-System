const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    restaurantName: { type: String },
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    date: { type: Date, default: Date.now },
    partySize: { type: Number },
});

module.exports = ReservationSchema;

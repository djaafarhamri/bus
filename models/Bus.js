const mongoose = require("mongoose");

//Sign up
const busSchema = mongoose.Schema(
  {
    ref: {
      type: String,
      required: [true, "please enter an ref"],
      unique: true,
    },
    ticket_price: {
      type: Number,
      required: [true, "please enter your ticket_price"],
    },
    colis_price: {
      type: Number,
      required: [true, "please enter your ticket_price"],
    },
    depart_ville: {
      type: String,
      required: [true, "please enter your depart_ville"],
    },
    depart_time: {
      type: String,
      required: [true, "please enter your depart_time"],
    },
    arrival_ville: {
      type: String,
      required: [true, "please enter your arrival_ville"],
    },
    arrival_time: {
      type: String,
      required: [true, "please enter your arrival_time"],
    },
    max_personnes: {
        type: Number,
        required: [true, "please enter your max_personnes"],
    },
    max_colis: {
        type: Number,
        required: [true, "please enter your max_personnes"],
    },

  },
  { collection: "buses" }
);



const model = mongoose.model("busSchema", busSchema);

module.exports = model;

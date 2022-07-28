const mongoose = require("mongoose");

//Sign up
const truckSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "please enter an ref"],
      unique: true,
    },
    frais: {
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
    colis: [
      {
        type: String,
      },
    ],
    allColis: [
      {
        colis: {
          type: String,
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { collection: "trucks" }
);


const model = mongoose.model("truckSchema", truckSchema);

module.exports = model;

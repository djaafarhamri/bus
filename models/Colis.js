const mongoose = require("mongoose");

//Sign up
const colisSchema = mongoose.Schema(
  {
    bus: {
        type: String,
        required: [true, "please enter a bus"],
    },
    ref: {
      type: String,
      required: [true, "please enter a ref"],
      unique: true,
    },
    frais: {
      type: Number,
      required: [true, "please enter your frais"],
    },
    expediteur: {
      type: String,
      required: [true, "please enter your expediteur"],
    },
    beneficiare: {
        type: String,
        required: [true, "please enter your beneficiare"],
    },
    depart_ville: {
      type: String,
      required: [true, "please enter your depart_ville"],
    },
    arrival_ville: {
      type: String,
      required: [true, "please enter your arrival_ville"],
    },
    remarque: {
        type: String,
        required: [true, "please enter your remarque"],
    },
    creation_date: {
        type: Date,
        default: Date.now(),
    }
  },
  { collection: "colis" }
);



const model = mongoose.model("colisSchema", colisSchema);

module.exports = model;

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
    montant: {
      type: Number,
      required: [true, "please enter your frais"],
    },
    name: {
      type: String,
      required: [true, "please enter your name"],
    },
    contact: {
      type: String,
      required: [true, "please enter your contact"],
    },
    departTime: {
      type: String,
      required: [true, "please enter your depart"],
    },
    departDay: {
      type: String,
      required: [true, "please enter your depart"],
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

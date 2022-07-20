const mongoose = require("mongoose");

//Sign up
const colisSchema = mongoose.Schema(
  {
    truck: {
        type: String,
        required: [true, "please enter a bus"],
    },
    ref: {
      type: String,
      required: [true, "please enter a ref"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "please enter your name"],
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

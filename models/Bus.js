const mongoose = require("mongoose");

//Sign up
const busSchema = mongoose.Schema(
  {
    id: {
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
    max_personnes: {
      type: Number,
      required: [true, "please enter your max_personnes"],
    },
    max_colis: {
      type: Number,
      required: [true, "please enter your max_personnes"],
    },
    colis: [
      {
        type: String,
      },
    ],
    personnes: [
      {
        type: String,
      },
    ],
  },
  { collection: "buses" }
);


busSchema.pre('validate', function (next) {
  console.log("this: ", this);
  if (this.colis.length < 4){
    next();
  } else {
    var error = new mongoose.Error.ValidationError(this);
    error.errors.colis = new mongoose.Error.ValidatorError(
      "colis",
      "max colis",
      "notvalid",
      this.colis
    );
    return next(error);
  }
});


const model = mongoose.model("busSchema", busSchema);

module.exports = model;

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
    personnes: [
      {
        type: String,
      },
    ],
    allPersonnes: [
      {
        personne: {
          type: String,
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { collection: "buses" }
);

busSchema.pre("validate", function (next) {
  if (this.personnes.length < this.max_personnes) {
    next();
  } else {
    var error = new mongoose.Error.ValidationError(this);
    error.errors.personnes = new mongoose.Error.ValidatorError(
      "personnes",
      "max personnes",
      "notvalid",
      this.personnes
    );
    return next(error);
  }
});

const model = mongoose.model("busSchema", busSchema);

module.exports = model;

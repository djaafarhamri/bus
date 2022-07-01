const Bus = require("../models/bus");

module.exports.add_bus = (req, res) => {
  const {
    id,
    ticket_price,
    colis_price,
    depart_ville,
    depart_time,
    arrival_ville,
    arrival_time,
    max_personnes,
    max_colis,
  } = req.body;
  Bus.create({
    id,
    ticket_price,
    colis_price,
    depart_ville,
    depart_time,
    arrival_ville,
    arrival_time,
    max_personnes,
    max_colis,
  })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.getAll = (req, res) => {
  console.log("getAll");
  Bus.find()
    .then((buses) => {
      res.status(200).json(buses);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}
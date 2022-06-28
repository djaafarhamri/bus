const Bus = require("../models/bus");

module.exports.add_bus = (req, res) => {
  const {
    ref,
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
    ref,
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

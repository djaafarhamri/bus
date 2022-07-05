const Bus = require("../models/bus");

module.exports.add_bus = async (req, res) => {
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
  console.log(req.body);
  await Bus.create({
    id,
    ticket_price,
    colis_price,
    depart_ville,
    depart_time,
    arrival_ville,
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
  Bus.find()
    .then((buses) => {
      // res buses except _id
      res.status(200).json(
        buses.map((bus) => ({
          id: bus.id,
          ticket_price: bus.ticket_price,
          colis_price: bus.colis_price,
          depart_ville: bus.depart_ville,
          depart_time: bus.depart_time,
          arrival_ville: bus.arrival_ville,
          max_personnes: bus.max_personnes,
          max_colis: bus.max_colis,
          colis: `${bus.colis.length}/${bus.max_colis}`,
          personnes: `${bus.personnes.length}/${bus.max_personnes}`,
        }))
      );
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

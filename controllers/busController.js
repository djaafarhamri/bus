const Bus = require("../models/bus");

module.exports.add_bus = async (req, res) => {
  const {
    id,
    ticket_price,
    colis_price,
    depart_ville,
    depart_time,
    arrival_ville,
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

module.exports.edit_id = async (req, res) => {
  const { id, value } = req.body;
  await Bus.findOneAndUpdate({ id }, { id: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.edit_ticket_price = async (req, res) => {
  const { id, value } = req.body;
  await Bus.findOneAndUpdate({ id }, { ticket_price: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// module.exports.edit_colis_price = async (req, res) => {
//   const { id, value } = req.body;
//   await Bus.findOneAndUpdate({ id }, { colis_price: value })
//     .then((bus) => {
//       res.status(200).json(bus);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// };

module.exports.edit_depart_ville = async (req, res) => {
  const { id, value } = req.body;
  await Bus.findOneAndUpdate({ id }, { depart_ville: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.edit_arrival_ville = async (req, res) => {
  const { id, value } = req.body;
  await Bus.findOneAndUpdate({ id }, { arrival_ville: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.edit_depart_time = async (req, res) => {
  const { id, value } = req.body;
  await Bus.findOneAndUpdate({ id }, { depart_time: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.edit_max_personnes = async (req, res) => {
  const { id, value } = req.body;
  await Bus.findOneAndUpdate({ id }, { max_personnes: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


module.exports.delete = async (req, res) => {
  const { id } = req.body;
  await Bus.findOneAndDelete({ id })
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
          depart_ville: bus.depart_ville,
          depart_time: bus.depart_time,
          arrival_ville: bus.arrival_ville,
          max_personnes: bus.max_personnes,
          personnes: `${bus.personnes.length}/${bus.max_personnes}`,
        }))
      );
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

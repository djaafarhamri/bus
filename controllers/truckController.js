const Truck = require("../models/truck");
const Colis = require("../models/colis");
const endOfDay = require("date-fns/endOfDay");
const startOfDay = require("date-fns/startOfDay");

module.exports.add_truck = async (req, res) => {
  console.log('truck');
  const {
    id,
    frais,
    depart_ville,
    depart_time,
    arrival_ville,
    max_colis,
  } = req.body;
  console.log(req.body);
  await Truck.create({
    id,
    frais,
    depart_ville,
    depart_time,
    arrival_ville,
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
  await Truck.findOneAndUpdate({ id }, { id: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.edit_frais = async (req, res) => {
  const { id, value } = req.body;
  await Truck.findOneAndUpdate({ id }, { frais: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// module.exports.edit_colis_price = async (req, res) => {
//   const { id, value } = req.body;
//   await Truck.findOneAndUpdate({ id }, { colis_price: value })
//     .then((bus) => {
//       res.status(200).json(bus);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// };

module.exports.edit_depart_ville = async (req, res) => {
  const { id, value } = req.body;
  await Truck.findOneAndUpdate({ id }, { depart_ville: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.edit_arrival_ville = async (req, res) => {
  const { id, value } = req.body;
  await Truck.findOneAndUpdate({ id }, { arrival_ville: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.edit_depart_time = async (req, res) => {
  const { id, value } = req.body;
  await Truck.findOneAndUpdate({ id }, { depart_time: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.edit_max_colis = async (req, res) => {
  const { id, value } = req.body;
  await Truck.findOneAndUpdate({ id }, { max_personnes: value })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


module.exports.delete = async (req, res) => {
  const { id } = req.body;
  await Truck.findOneAndDelete({ id })
    .then((bus) => {
      res.status(200).json(bus);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.getAll = (req, res) => {
  Truck.find()
    .then((buses) => {
      // res buses except _id
      res.status(200).json(
        buses.map((bus) => ({
          id: bus.id,
          frais: bus.frais,
          depart_ville: bus.depart_ville,
          depart_time: bus.depart_time,
          arrival_ville: bus.arrival_ville,
          max_colis: bus.max_colis,
          colis: `${bus.colis.length}/${bus.max_colis}`,
        }))
      );
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.getAllByDepart = async (req, res) => {
  const { depart } = req.params;
  await Truck.find({ depart_ville: depart })
    .then((buses) => {
      // res buses except _id
      res.status(200).json(
        buses.map((bus) => ({
          arrival_ville: bus.arrival_ville,
        }))
      );
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}


module.exports.getAllColisByDate = async (req, res) => {
  const { bus, date } = req.body;
  console.log(req.body);
  await Truck.findOne({ id: bus })
    .then(async (bus) => {
      console.log(bus.id);
      console.log(bus.allColis);
      // res filter allpersonnes by date
      const allColis = bus.allColis.filter(
        (colis) =>
        colis.addedAt >= startOfDay(new Date(date)) &&
        colis.addedAt <= endOfDay(new Date(date))
        );
        console.log(allColis);
        await Colis.find({ id: { $in: allColis.map((colis) => colis.colis) } })
            .then((data) => {
              return res.status(200).json(data);
            })
            .catch((err) => {
              return res.status(400).json(err);
            });
        })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const Colis = require("../models/colis");
const Truck = require("../models/truck");
const uuidv4 = require("uuid").v4;

module.exports.add_colis = async (req, res) => {
  const {
    frais,
    depart_ville,
    arrival_ville,
    expediteur,
    beneficiare,
    remarque,
  } = req.body;
  const ref = uuidv4().substring(0, 8);
  try {
    const foundBus = await Truck.findOne({ depart_ville, arrival_ville });
    if (!foundBus) {
      return res.status(400).json({ error: "bus not found" });
    }
    await Colis.create({
      truck: foundBus.id,
      ref,
      frais,
      depart_ville,
      arrival_ville,
      expediteur,
      beneficiare,
      remarque,
    });
    res.status(200).json("success");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

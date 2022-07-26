const Colis = require("../models/colis");
const Truck = require("../models/truck");
const uuidv4 = require("uuid").v4;

module.exports.add_colis = async (req, res) => {
  const {
    truck,
    frais,
    depart_ville,
    arrival_ville,
    expediteur,
    beneficiaire,
    remarque,
  } = req.body;
  const ref = uuidv4().substring(0, 8);
  try {
    const foundBus = await Truck.find({
      $and: [{ depart_ville }, { arrival_ville }],
    });
    if (!foundBus) {
      return res.status(400).json({ error: "bus not found" });
    }
    for (let t in foundBus) {
      if (t.colis.length < t.max_colis) {
        await Colis.create({
          truck,
          ref,
          frais,
          depart_ville,
          arrival_ville,
          expediteur,
          beneficiaire,
          remarque,
        });
        await Truck.updateOne({ ref: foundBus.ref }, { $push: { colis: ref } });
        res.status(200).json("success");
      }
    }
    return res.status(400).json({ error: "max colis reached" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

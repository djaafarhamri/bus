const Colis = require("../models/colis");
const Bus = require("../models/bus");
const uuidv4 = require("uuid").v4;

module.exports.add_colis = async (req, res) => {
  const {
    bus,
    frais,
    depart_ville,
    arrival_ville,
    expediteur,
    beneficiare,
    remarque,
  } = req.body;
  const ref = uuidv4().substring(0, 8);
  try {
    const foundBus = await Bus.findOne({ ref: bus }); 
    if (!foundBus) {
      return res.status(400).json({ error: "bus not found" });
    }
    if (foundBus.colis.length === foundBus.max_colis) {
      return res.status(400).json({ error: "max colis reached" });
    }
    await Colis.create({
        bus,
        ref,
        frais,
        depart_ville,
        arrival_ville,
        expediteur,
        beneficiare,
        remarque,
    })
    await Bus.updateOne(
        { ref: bus },
        { $push: { colis: ref } }
    )
    res.status(200).json("success");
  } catch (err) {
    
      console.log(err);
      res.status(400).json(err);
  }
};

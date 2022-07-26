const Personne = require("../models/personne");
const bus = require("../models/bus");
const uuidv4 = require("uuid").v4;

module.exports.add_personne = async (req, res) => {
  const {
    name,
    depart_ville,
    arrival_ville,
    contact,
    depart_time,
    depart_day,
  } = req.body;
  console.log(req.body);
  const ref = uuidv4().substring(0, 8);
  try {
    const foundBus = await bus.find({
      $and: [{ depart_ville }, { arrival_ville }],
    });
    if (!foundBus) {
      return res.status(400).json({ error: "bus not found" });
    }
    for (let t of foundBus) {
      if (!t.personnes || t.personnes.length < t.max_personnes) {
        await Personne.create({
          bus: t.id,
          ref,
          montant: t.ticket_price,
          name,
          depart_ville,
          arrival_ville,
          contact,
          departTime: depart_time,
          departDay: depart_day,
        });
        res.status(200).json("success");
      }
    }
    return res.status(400).json({ error: "max colis reached" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

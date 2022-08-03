const Personne = require("../models/personne");
const Bus = require("../models/bus");
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
  const id = uuidv4().substring(0, 8);
  try {
    const foundBus = await Bus.find({
      $and: [{ depart_ville }, { arrival_ville }],
    });
    if (!foundBus) {
      return res.status(400).json({ error: "Bus not found" });
    }
    for (let t of foundBus) {
      if (!t.personnes || t.personnes.length < t.max_personnes) {
        await Personne.create({
          bus: t.id,
          id,
          montant: t.ticket_price,
          name,
          depart_ville,
          arrival_ville,
          contact,
          departTime: depart_time,
          departDay: depart_day,
        });
        await Bus.updateOne({ id: t.id }, { $push: { personnes: id } });
        await Bus.updateOne({ id: t.id }, { $push: { allPersonnes: {personne: id} } });
        return res.status(200).json("success");
      }
    }
    return res.status(400).json({ error: "max colis reached" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

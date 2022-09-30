const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  foto: { type: String, require: true },
  nome: { type: String, require: true },
  raca: { type: String, require: true },
  idade: { type: String, require: true },
  sexo: { type: String, require: true },
  peso: { type: Number, require: true },
  porte: { type: String, require: true },
  vacinado: { type: Boolean, require: true },
  castrado: { type: Boolean, require: true },
  historico: { type: String, require: true },
  adotado: { type: Boolean, require: true },
});

const Pet = mongoose.model("pets", PetSchema);

module.exports = Pet;
